$(document).ready(function () {

    $.ajax({
        url: "https://polisen.se/api/events",
        type: "GET",
        datatype: "JSON",

    })
        .done(function (data) {
            showresultat(data)
        })

    function showresultat(data) {
        $.each(data, function () {

            $("ul").html("<li>" + data[0].name + data[0].summary + data[0].url + "</li>" +
                "<li>" + data[1].name + data[1].summary + data[1].url + "</li>" +
                "<li>" + data[2].name + data[2].summary + "<br>" + data[2].url + "</li>" +
                "<li>" + data[3].name + data[3].summary + "<br>" + data[3].url + "</li>" +
                "<li>" + data[4].name + data[4].summary + "<br>" + data[4].url + "</li>" +
                "<li>" + data[5].name + data[5].summary + "<br>" + data[5].url + "</li>" +
                "<li>" + data[6].name + data[6].summary + "<br>" + data[6].url + "</li>" +
                "<li>" + data[7].name + data[7].summary + "<br>" + data[7].url + "</li>" +
                "<li>" + data[8].name + data[8].summary + "<br>" + data[8].url + "</li>" +
                "<li>" + data[9].name + data[9].summary + "<br>" + data[9].url + "</li>" +
                "<li>" + data[10].name + data[10].summary + "<br>" + data[10].url + "</li>" +
                "<li>" + data[11].name + data[11].summary + "<br>" + data[11].url + "</li>" +
                "<li>" + data[12].name + data[12].summary + "<br>" + data[12].url + "</li>")
        })
    }
});