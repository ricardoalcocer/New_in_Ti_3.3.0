function doClick(e) {
    alert($.label.text);
}

$.field1.setCaption('User Name');
$.field2.setCaption('Password');
$.field2.setPasswordMask(true);

$.index.open();
