$(function () {

    const firebaseConfig = {
        apiKey: "AIzaSyBDPvNlsj8ylQtCFSw-4C-5Y8kyLkTRL8k",
        authDomain: "attar-399ac.firebaseapp.com",
        databaseURL: "https://attar-399ac-default-rtdb.firebaseio.com",
        projectId: "attar-399ac",
        storageBucket: "attar-399ac.appspot.com",
        messagingSenderId: "215257177125",
        appId: "1:215257177125:web:ddd7ed592ac0b71363b3cc"
    };

    firebase.initializeApp(firebaseConfig);

    var bigOne = document.getElementById('bigOne');
    var bigTwo = document.getElementById('bigTwo');
    var bigThree = document.getElementById('bigThree');
    var bigFour = document.getElementById('bigFour');
    var bigFive = document.getElementById('bigFive');
    var bigSix = document.getElementById('bigSix');

    const card1 = firebase.database().ref().child('n1');
    const card2 = firebase.database().ref().child('n2');
    const card3 = firebase.database().ref().child('n3');
    const card4 = firebase.database().ref().child('n4');
    const card5 = firebase.database().ref().child('n5');
    const card6 = firebase.database().ref().child('n6');

    card1.on('value', (snap) => {
        bigOne.innerText = snap.val();
        console.log(snap.val());
    });
    card2.on('value', (snap) => {
        bigTwo.innerText = snap.val();
        console.log(snap.val());
    });
    card3.on('value', (snap) => {
        bigThree.innerText = snap.val();
        console.log(snap.val());
    });
    card4.on('value', (snap) => {
        bigFour.innerText = snap.val();
        console.log(snap.val());
    });
    card5.on('value', (snap) => {
        bigFive.innerText = snap.val();
        console.log(snap.val());
    });
    card6.on('value', (snap) => {
        bigSix.innerText = snap.val();
        console.log(snap.val());
    });

    var owner = $('#owner');
    var cardNumber = $('#cardNumber');
    var cardNumberField = $('#card-number-field');
    var CVV = $("#cvv");
    var mastercard = $("#mastercard");
    var validateCard = $("#validate-card");
    var confirmButton = $('#confirm-purchase');
    var visa = $("#visa");
    var amex = $("#amex");

    // Use the payform library to format and validate
    // the payment fields.

    cardNumber.payform('formatCardNumber');
    CVV.payform('formatCardCVC');


    cardNumber.keyup(function () {

        amex.removeClass('transparent');
        visa.removeClass('transparent');
        mastercard.removeClass('transparent');

        if ($.payform.validateCardNumber(cardNumber.val()) == false) {
            cardNumberField.addClass('has-error');
        } else {
            cardNumberField.removeClass('has-error');
            cardNumberField.addClass('has-success');
        }

        if ($.payform.parseCardType(cardNumber.val()) == 'visa') {
            mastercard.addClass('transparent');
            amex.addClass('transparent');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'amex') {
            mastercard.addClass('transparent');
            visa.addClass('transparent');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'mastercard') {
            amex.addClass('transparent');
            visa.addClass('transparent');
        }
    });

    var cardValid = 0;

    validateCard.click(function (e) {
        e.preventDefault();

        var inpCard = document.getElementById("cardNumber").value;
        var text1 = document.getElementById("bigOne").innerText;
        var text2 = document.getElementById("bigTwo").innerText;
        var text3 = document.getElementById("bigThree").innerText;
        var text4 = document.getElementById("bigFour").innerText;
        var text5 = document.getElementById("bigFive").innerText;
        var text6 = document.getElementById("bigSix").innerText;

        console.log(inpCard);
        
        if (inpCard == text1) {
            console.log(text1);
            alert("Card Number is Correct!");
            cardValid++;
        }
        else if (inpCard == text2) {
            console.log(text2);
            alert("Card Number is Correct!");
            cardValid++;
        }
        else if (inpCard == text3) {
            console.log(text3);
            alert("Card Number is Correct!");
            cardValid++;
        }
        else if (inpCard == text4) {
            console.log(text4);
            alert("Card Number is Correct!");
            cardValid++;
        }
        else if (inpCard == text5) {
            console.log(text5);
            alert("Card Number is Correct!");
            cardValid++;
        }
        else if (inpCard == text6) {
            console.log(text6);
            alert("Card Number is Correct!");
            cardValid++;
        }
        else {
            alert("Card Number is InCorrect!");
            cardValid = 0;
        }
    });

    confirmButton.click(function (e) {

        e.preventDefault();

        var isCardValid = cardValid;
        var isCvvValid = $.payform.validateCardCVC(CVV.val());

        if (owner.val().length < 5) {
            alert("Enter correct Name!");
        } else if (isCardValid == 0) {
            alert("Validate the card number first!");
        } else if (!isCvvValid) {
            alert("Enter correct CVV!");
        } else {
            // Everything is correct. Add your form submission code here.
            window.location.replace("conformation.html");
        }
    });
});
