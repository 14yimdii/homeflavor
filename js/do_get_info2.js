// Get the input field
// Execute a function when the user releases a key on the keyboard
const form = document.forms['submit-to-google-sheet'];
form?.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        form.submit();
    }
});

function stepSetSinhVien() {
    // var masv = $.trim($("input[name='Ten']").val());
    // if (masv == '') {
    //     alert("Please enter your name");
    //     return false;
    // }

    // var email = $.trim($("input[name='Email']").val());
    // if (email == '') {
    //     alert("Please enter your email");
    //     return false;
    // } else {
    //     var n = email.includes("uef.edu.vn");
    //     if (n != true) {
    //         alert("Please enter your email like:  XXX@UEF.EDU.VN");
    //         return false;
    //     }
    // }
    // var phone = $.trim($("input[name='Loinhan']").val());
    // if (phone == '') {
    //     alert("Please enter your phone");
    //     return false;
    // }

    doLoading()
        .then(doSetSinhVien)
        .then(doComplete);
}

function doLoading() {
    return new Promise(function (resolve, reject) {
        resolve();
    });
}

function doSetSinhVien() {
    return new Promise(function (resolve, reject) {
        resolve();
    });
}

function doComplete() {
    return new Promise(function (resolve, reject) {
        resolve();
    });
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbw-DXHFpbxS4T2BAd4qGyYjriizBp_UqNykyPd4dCF0nNQePQt1WTR1B4ttLSybkJ9B/exec';


form?.addEventListener('submit', e => {
    e.preventDefault();
    
    showLoadingIndicator();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => showSuccessMessage(response))
        .catch(error => showErrorMessage(error));
})

function showLoadingIndicator() {
}

function showSuccessMessage(response) {
    alert("Thuc hien thanh cong");
    console.log('Success!', response);
    setTimeout(() => {
    }, 1000);
}

function showErrorMessage(error) {
    console.error('Error!', error.message);
    setTimeout(() => {
    }, 1000);
}
