document.addEventListener("DOMContentLoaded", function () {
    var verifyButton = document.getElementById("submission");
    verifyButton.addEventListener("click", checkPasswords);

    function checkPasswords() {
        var password1 = document.getElementById("firstpassword").value;
        var password2 = document.getElementById("secondpassword").value;

        if (firstpassword.length < 8 || secondpassword.length < 8) {
            alert("Passwords should be at least eight characters long.");
        } else if (firstpassword !== secondpassword) {
            alert("Passwords do not match. Please re-enter them.");
        } else {
            alert("Passwords match!");
        }
    }
});