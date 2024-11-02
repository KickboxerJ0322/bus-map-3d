# Bus Map 3D - バスマップ3D
- "Bus Map 3D" is an innovative website that displays the current location of Japan's Toei buses on a 3D map in real time.
- 「バスマップ3D」は、日本の都営バスの現在地を3Dマップ上にリアルタイムで表示する画期的なウェブサイトです。

## Inspiration - インスピレーション
- Originally, the train and bus current location map system was built using Google Apps Script and Cloud Functions. I thought that if I expressed it using Photorealistic 3D Maps, I could create a more advanced application.
- もともと、電車とバスの現在地マップシステムは、Google Apps ScriptとCloud Functionsを使用して構築していました。それをフォトリアリスティック3Dマップで表現すれば、より高度なアプリケーションが作れると考えました。

## What it does - 機能
- By displaying the current location of Toei buses on a 3D map, you can intuitively understand where the bus is currently located.
- 都営バスの現在地を3Dマップ上に表示することで、バスが現在どこにいるのかを直感的に把握できます。

## How we built it - 構築方法
- It was built using the publicly available Toei Bus Protocol Buffers API and GTFS-RT data.
- 公開されている都営バスプロトコルバッファAPIとGTFS-RTデータを使用して構築しました。

## Challenges we ran into - 直面した課題
- With Photorealistic 3D Maps, there are 600 to 1,000 Toei buses running at the same time, and when trying to display all the data on a web page at once, an issue occurred where HTML could not be processed. To solve this problem, the code was modified to only display buses within 2 km of the current location, making it possible to display up to about 20 buses.
- フォトリアリスティック3Dマップでは、600台から1,000台の都営バスが同時に走っており、すべてのデータを一度にWebページに表示しようとすると、HTMLが処理できない問題が発生しました。この問題を解決するために、現在地から2km以内のバスのみを表示するようにコードを修正し、最大20台程度まで表示できるようにしました。

## Accomplishments that we're proud of - 誇れる成果
- The FlyCameraTo sample code did not work when copied as is, so I analyzed the code and modified it to implement the FlyCameraTo behavior.
- FlyCameraToのサンプルコードをそのままコピーしても動作しなかったため、コードを解析して修正し、FlyCameraToの動作を実装しました。

## What we learned - 学んだこと
- The potential of Photorealistic 3D Maps. It has the potential to become the standard for all web pages in the future.
- フォトリアリスティック3Dマップの可能性。将来的にはすべてのWebページの標準になる可能性を秘めています。

## What's next for Bus Map 3D - バスマップ3Dの今後
- As for this "Bus Map 3D", with the Protocol Buffers API and GTFS-RT data, it can be expanded to transportation facilities around the world. I want to make it easy to grasp the real-time current location of not only buses, but also trains, ships, aircraft, and other vehicles around the world.
- この「バスマップ3D」については、Protocol Buffers APIとGTFS-RTデータにより、世界中の交通機関に展開できます。バスだけでなく、世界中の電車、船、飛行機など、あらゆる乗り物のリアルタイムの現在位置を簡単に把握できるようにしたいと考えています。

## sample - サンプル
- **001_sample_index.html**: html code. Please replace your Firebase API key. - htmlのコードです。FirebaseのAPIキー、を置き換えて利用ください。
- **002_sample_login.html**: html code. Please replace your Firebase API key. - htmlのコードです。FirebaseのAPIキー、を置き換えて利用ください。
- **011_sample_001_toei_3d_v4.html**: html code. Please replace your Firebase API key and GAS URL. - htmlのコードです。FirebaseのAPIキー、GASのURL、を置き換えて利用ください。
- **021_sample_code.gs.txt**: gas code. Please replace your ODPT key, cloudFunctionUrl, API key, sheet ID, sheet name, and Google Maps API key. - gasのコードです。ODPTキー、cloudFunctionsのUrl、APIキー、シートID、シート名、Google Maps APIキー、を置き換えて利用ください。
- **031_sample_cloudfunctions_.gcloudignore**: Cloud Functions code. - Cloud Funcitonsのコードです。
- **032_sample_cloudfunctions_gtfs-realtime.proto**: Cloud Functions code. - Cloud Funcitonsのコードです。
- **033_sample_cloudfunctions_index.js**: This is the Cloud Functions code. - Cloud Funcitonsのコードです。
- **034_sample_cloudfunctions_package.json**: This is the Cloud Functions code. - Cloud Funcitonsのコードです。
- **035_sample_cloudfunctions_vehicle.proto**: This is the Cloud Functions code. - Cloud Funcitonsのコードです。

## URL
- **[index.html](https://kickboxerj0322.github.io/bus-map-3d/)**

## system architecture
![画像](https://kickboxerj0322.github.io/bus-map-3d/069_system_architecture.png)
