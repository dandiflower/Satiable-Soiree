$(function() {

    $("#event-submit").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var dateInput = moment($("#date").val().trim());
        console.log(dateInput);
        console.log(dateInput.format("YYYY-MM-DD HH:mm:ss"));

        var starttimeInput = moment($("#starttime").val(), "HH:mm:ss");
        console.log("12", $("#starttime").val());
        console.log(starttimeInput.format("HH:mm:ss"));

        var endtimeInput = moment($("#endtime").val());
        console.log("15", $("#endtime").val());
        console.log(endtimeInput);

        // var newEvent = {
        //     name: $("#name").val(),
        //     street: $("#street").val().trim(),
        //     number: $("#number").val().trim(),
        //     zipcode: $("#zipcode").val().trim(),
        //     city: $("#city").val().trim(),
        //     date: moment($("#date").val().trim(), "YYYY-MM-DD 00:00:00"),
        //     starttime: moment($("#starttime").val().trim(), "HH:mm:ss"),
        //     endtime: moment($("#endtime").val().trim(), "HH:mm:ss"),
        //     UserId: window.sessionStorage.getItem("id")
        // };

        // Send the POST request.
        $.ajax("/api/createevent", {
            type: "POST",
            data: {test: "test"}
        }).then(
            function(result) {
            
            if(result) {

                $(".see-event").attr("href", "/event/"+result.id);
                $('#modal-success').modal('show');

            }

            }
        );
    });

});