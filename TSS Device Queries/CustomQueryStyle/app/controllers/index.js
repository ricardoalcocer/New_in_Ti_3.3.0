function doClick(e) {
    alert($.label.text);
}

console.log('iOS 7: ' + Alloy.Globals.isIOS7Plus);
console.log('Android 4: ' + Alloy.Globals.isAndroid4);

$.index.open();
