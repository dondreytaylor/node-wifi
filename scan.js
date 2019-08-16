var wpa_cli = require('wireless-tools/wpa_cli');

wpa_cli.scan('wlan0', function(err, data){
    wpa_cli.scan_results('wlan0', function(err, data) {
       // returns the results of the BSS scan once it completes
       console.dir(data);
    }
});
