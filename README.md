# Bus Map 3D
- "Bus Map 3D" is an innovative website that displays the current location of Japan's Toei buses on a 3D map in real time.

## Inspiration
- Originally, the train and bus current location map system was built using Google Apps Script and Cloud Functions. I thought that if I expressed it using Photorealistic 3D Maps, I could create a more advanced application.

## What it does
- By displaying the current location of Toei buses on a 3D map, you can intuitively understand where the bus is currently located.

## How we built it
- It was built using the publicly available Toei Bus Protocol Buffers API and GTFS-RT data.

## Challenges we ran into
- With Photorealistic 3D Maps, there are 600 to 1,000 Toei buses running at the same time, and when trying to display all the data on a web page at once, an issue occurred where HTML could not be processed. To solve this problem, the code was modified to only display buses within 2 km of the current location, making it possible to display up to about 20 buses.

## Accomplishments that we're proud of
- The FlyCameraTo sample code did not work when copied as is, so I analyzed the code and modified it to implement the FlyCameraTo behavior.

## What we learned
- The potential of Photorealistic 3D Maps. It has the potential to become the standard for all web pages in the future.

## What's next for Bus Map 3D
- As for this "Bus Map 3D", with the Protocol Buffers API and GTFS-RT data, it can be expanded to transportation facilities around the world. I want to make it easy to grasp the real-time current location of not only buses, but also trains, ships, aircraft, and other vehicles around the world.

## sample
- **sample_index.html**: htmlのコードです。cloud runのURL、を置き換えて利用ください。
- **sample_code.gs**: gasのコードです。SPREADSHEETのID、シート名、google driveのフォルダID、google api key、VOICEVOX_API_KEY、を置き換えて利用ください。
- **sample_cloudrun_index.js**: cloud runのコードです。Vision APIのキー、を置き換えて利用ください。
- **sample_cloudrun_package.json**: cloud runのコードです。

## URL
- **[sample_index.html](https://sites.google.com/view/emotionalscore/%E3%83%9B%E3%83%BC%E3%83%A0)**
- スマホから利用する場合は、ブラウザでPC版サイトに設定してご利用ください。
- このhtmlは、corsの制限からgoogleのオリジン以外では正しく動作しませんので、ご注意ください。
