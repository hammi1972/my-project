function validateForm() {
    let credits = document.getElementById("credits").value;

    if (credits <= 0) {
        alert("عدد الساعات غير صحيح");
        return false;
    }
}
