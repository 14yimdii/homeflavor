// Get the input field
// Execute a function when the user releases a key on the keyboard
const form = document.forms['submit-to-google-sheet'];
form.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        form.submit();
    }
});

function stepSetSinhVien() {
    // var DN = $.trim($("select[name='Ten']").val());
    // if (DN == '') {
    //     alert("VUI LÒNG CHỌN MÔN THI");
    //     return false;
    // }


    // var email = $.trim($("input[name='Email']").val());
    // if (email == '') {
    //     alert("VUI LÒNG NHẬP EMAIL");
    //     return false;
    // }
    // var phone = $.trim($("input[name='Loinhan']").val());
    // if (phone == '') {
    //     alert("VUI LÒNG NHẬP SỐ ĐIỆN THOẠI");
    //     return false;
    // }
    // var lop = $.trim($("input[name='txtLop']").val());
    // if (lop == '') {
    //     alert("VUI LÒNG NHẬP TÊN LỚP");
    //     return false;
    // }
    doLoading()
        .then(doSetSinhVien)
        .then(doComplete);
}

function doLoading() {
    return new Promise(function (resolve, reject) {
        // document.querySelector('.js-loading').classList.remove('is-hidden');
        // resolve();
    });
}

function doSetSinhVien() {
    return new Promise(function (resolve, reject) {
        resolve();
    });
}

function doComplete() {
    return new Promise(function (resolve, reject) {
        // setTimeout(() => {
        //     document.querySelector('.js-loading').classList.add('is-hidden');
        // }, 1000);
        // resolve();
    });
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbz5w_50AkuveT9XgLUrNpM_WmaUlAcYDukXqJELA6yiCRjCxItIOmNtawku8cKNxbXu/exec';



form.addEventListener('submit', e => {
    e.preventDefault();
    document.querySelector('.js-loading').classList.remove('is-hidden');
    showLoadingIndicator();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => showSuccessMessage(response))
        .catch(error => showErrorMessage(error));
})

function showLoadingIndicator() {
    form.classList.add('is-hidden');
    document.querySelector('.js-loading').classList.remove('is-hidden');
    $("#loadingOK").show();
}

function showSuccessMessage(response) {
    console.log('Success!', response);
    setTimeout(() => {
        successMessage.classList.remove('is-hidden');
        $("#loadingOK").hide();
    }, 1000);
}

function showErrorMessage(error) {
    console.error('Error!', error.message);
    setTimeout(() => {
        errorMessage.classList.remove('is-hidden');
        $("#loadingOK").hide();
    }, 1000);
}