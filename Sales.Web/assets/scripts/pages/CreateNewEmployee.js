$(document).ready(function () {
    console.log("ready");
    $('#salesMan').on('ifChecked', function (e) {
        console.log("sales man clicked");
        var salesManDiv = document.getElementById('salesManData');
        if (salesManDiv !== null) {
            if (salesManDiv.classList.contains("hide")) {
                salesManDiv.classList.remove("hide");
            }
        }
    });

    $('#employee').on('ifChecked', function (e) {
        console.log('employee');
        var x = document.getElementById('salesManData');
        if (!x.classList.contains("hide")) {
            x.classList.add("hide");
        }
    });

});