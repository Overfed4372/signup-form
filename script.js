const REPEAT_PASSWORD = document.querySelector("div.all-inputs > div.input:nth-child(6) > input:nth-of-type(1)");
const PASSWORD = document.querySelector("div.all-inputs > div.input:nth-child(5) > input:nth-of-type(1)");
const PASSWORD_REPEAT_ERROR =  document.querySelector("div.all-inputs > div.input:nth-child(6) > span:nth-of-type(1)");
const PASSWORD_ERROR =  document.querySelector("div.all-inputs > div.input:nth-child(5) > span:nth-of-type(1)");
const FORM = document.querySelector("form");
const passRegExp = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

PASSWORD.addEventListener("keyup" , (event)=> {
    showPassError();
});
REPEAT_PASSWORD.addEventListener("keyup", (event) => {
    showPassRepError();
});
FORM.addEventListener("submit" , (event) => {
    showPassRepError() === true ? "" : event.preventDefault();
    showPassError() === true ? "" : event.preventDefault();
})

function showPassRepError () {
    if (REPEAT_PASSWORD.value !== PASSWORD.value) {
        PASSWORD_REPEAT_ERROR.className="error active";
        REPEAT_PASSWORD.style.cssText += "border: 2px dashed red;";
        PASSWORD_REPEAT_ERROR.textContent="Passwords don't match!";
        return false;
    } else {
        PASSWORD_REPEAT_ERROR.className="error";
        REPEAT_PASSWORD.style.cssText -= "border: 2px dashed red;";
        PASSWORD_REPEAT_ERROR.textContent="";
        return true;
    }
}
function showPassError () {
    const isValid = PASSWORD.value.length === 0 ||
    passRegExp.test(PASSWORD.value);
    if (!isValid) {
        PASSWORD_ERROR.className = "error active";
        PASSWORD_ERROR.textContent = "Password is not qualified!";
        PASSWORD.style.cssText += "border: 2px dashed red;";
        return false;
    } else {
        PASSWORD_ERROR.className = "error";
        PASSWORD_ERROR.textContent = "";
        PASSWORD.style.cssText -= "border: 2px dashed red;";   
        return true;
    }
}