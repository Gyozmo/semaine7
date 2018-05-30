var x = 1
var xhr = new XMLHttpRequest();
var url = "form.json";

function getClient() {
    console.log('hello');

}

xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myForm = JSON.parse(this.responseText);
        myFunction(this.responseText);

    }
};

xhr.open("GET", url, true);
xhr.send();

function myFunction(response) {
    var arr = JSON.parse(response);
    var x = 0
    $.each(arr, function (key, data) {
        x++;
        $('#firstOption').after('<option id="optionTest' + x + '">' + key + '</option>');
    })

    $('#optionTest3').click(function () {
        $('#part1').html(arr.Client1.nom);
        $('#part2').html(arr.Client1.prénom);
        $('#part3').html(arr.Client1.adresse);
        $('#part4').html(arr.Client1.ville);


    });

    $('#optionTest2').click(function () {
        $('#part1').html(arr.Client2.nom);
        $('#part2').html(arr.Client2.prénom);
        $('#part3').html(arr.Client2.adresse);
        $('#part4').html(arr.Client2.ville);


    });

    $('#optionTest1').click(function () {
        $('#part1').html(arr.Client3.nom);
        $('#part2').html(arr.Client3.prénom);
        $('#part3').html(arr.Client3.adresse);
        $('#part4').html(arr.Client3.ville);


    });






    // $.each(arr, function (index, data) {
    //     console.log(arr.client1, data);
    // })


    // function createOption() {

    //     optionCreation = document.createElement("option");
    //     clientList.appendChild(optionCreation);
    //     optionCreation.id = optionID;
    //     optionID = (x++);
    //     optionCreation.text = arr.Client + optionID;
    //     clientList.add(optionCreation)
    // }
    // for (let i = 0; i < 7; i++) {
    //     createOption();
    // }
}