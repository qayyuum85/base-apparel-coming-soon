function submit() {
    var email = document.querySelector("#emailInput");
    var error_msg_elems = document.querySelectorAll(".error-msg");
    for (elem of error_msg_elems) {
        elem.style.display = "none";
    }
    
    if (!email.checkValidity()) {
        for (elem of error_msg_elems) {
            elem.style.display = "block";
        }
    }
}