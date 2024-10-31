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
- **001_sample_index.html**: htmlのコードです。FirebaseのAPIキー、を置き換えて利用ください。
- **002_sample_login.html**: htmlのコードです。FirebaseのAPIキー、を置き換えて利用ください。
- **011_sample_001_toei_3d_v4.html**: htmlのコードです。FirebaseのAPIキー、GASのURL、を置き換えて利用ください。
- **021_sample_code.gs.txt**: gasのコードです。ODPTキー、APIキー、シートID、シート名、Google Maps APIキー、を置き換えて利用ください。
- **031_sample_cloudfunctions_.gcloudignore**: Cloud Funcitonsのコードです。
- **032_sample_cloudfunctions_gtfs-realtime.proto**: Cloud Funcitonsのコードです。
- **033_sample_cloudfunctions_index.js**: Cloud Funcitonsのコードです。
- **034_sample_cloudfunctions_package.json**: Cloud Funcitonsのコードです。
- **035_sample_cloudfunctions_vehicle.proto**: Cloud Funcitonsのコードです。

## URL
- **[index.html](https://kickboxerj0322.github.io/bus-map-3d/)**
