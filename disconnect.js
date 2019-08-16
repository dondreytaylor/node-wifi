var wpa_supplicant = require('wireless-tools/wpa_supplicant');

wpa_supplicant.disable('wlan0', function(err) {
    // disconnected from wireless network
    console.log(arguments)
});
