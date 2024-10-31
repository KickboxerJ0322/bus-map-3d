const { Buffer } = require('buffer');
const protobuf = require('protobufjs');
const express = require('express');
const app = express();
const path = require('path');

// プロトコルバッファ定義ファイルの相対パス
const protoPath = path.join(__dirname, 'gtfs-realtime.proto');

app.use(express.json());

app.post('/', async (req, res) => {
  try {
    // プロトコルバッファの定義ファイルをロード
    const root = await protobuf.load(protoPath);
    const FeedMessage = root.lookupType("transit_realtime.FeedMessage");
    
    const buffer = Buffer.from(req.body.data, 'base64');
    const message = FeedMessage.decode(buffer);
    const object = FeedMessage.toObject(message, {
      longs: String,
      enums: String,
      bytes: String,
    });
    res.json(object);
  } catch (err) {
    res.status(500).send(err.toString());
  }
});

exports.convertProtobufToJson = app;
