const REPEAT_PASSWORD = document.querySelector("div.all-inputs > div.input:nth-child(6) > input:nth-of-type(1)");
const PASSWORD = document.querySelector("div.all-inputs > div.input:nth-child(5) > input:nth-of-type(1)");
const PASSWORD_ERROR =  document.querySelector("div.all-inputs > div.input:nth-child(6) > span:nth-of-type(1)");
const FORM = document.querySelector("form");

REPEAT_PASSWORD.addEventListener("keyup", (event) => {
    showPassError();
});
FORM.addEventListener("submit" , (event) => {
    showPassError() === true ? "" : event.preventDefault();
})

function showPassError () {
    if (REPEAT_PASSWORD.value !== PASSWORD.value) {
        PASSWORD_ERROR.className="error active";
        REPEAT_PASSWORD.style.cssText += "border: 2px dashed red;";
        PASSWORD_ERROR.textContent="Passwords don't match!";
        return false;
    } else {
        PASSWORD_ERROR.className="error";
        REPEAT_PASSWORD.style.cssText -= "border: 2px dashed red;";
        PASSWORD_ERROR.textContent="";
        return true;
    }
}