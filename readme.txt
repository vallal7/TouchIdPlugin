This is an Hybrid app build in cordova (Phonegap). This will support various platforms like ios, android, windows...
We are going to add a cordova plugin to authenticate the user with his touch id

1. Install node.js
2. Install cordova - npm install -g cordova
3. Create your app - $ cordova create MyApp
4. Navigate into your app and add any platform:
  cd MyApp
  cordova platform add ios
5. Build your app and run in simulator or device:
  $ cordova build ios
  $ cordova emulate ios
  
  $ cordova run ios
6. Add the plugin - $ cordova plugin add cordova-plugin-touchid
10. Trigger the plugin from your index.js
