var wpa_supplicant = require('wireless-tools/wpa_supplicant');

var options = {
  interface: 'wlan0',
  ssid: 'D3EA4E',
  passphrase: '81408320',
  driver: 'wext'
};

wpa_supplicant.enable(options, function(err) {
      // connected to the wireless network
      console.log(arguments)
});
