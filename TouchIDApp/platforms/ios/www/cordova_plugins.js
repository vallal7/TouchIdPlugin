cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-touchid/www/touchid.js",
        "id": "cordova-plugin-touchid.TouchID",
        "pluginId": "cordova-plugin-touchid",
        "clobbers": [
            "touchid"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.0",
    "cordova-plugin-touchid": "0.3.0"
}
// BOTTOM OF METADATA
});