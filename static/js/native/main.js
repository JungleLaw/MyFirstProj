if (typeof module === 'object') {
    window.jQuery = module.exports;
}

function read() {
    setInterval(function () {
        jQuery.get('http://192.168.1.107:3000/users', function (data, status) {
            console.log(data);
        });
    }, 100);
}

jQuery(document).ready(function () {
    jQuery("div p").click(function () {
        jQuery(this).hide();
    });
    read();
});