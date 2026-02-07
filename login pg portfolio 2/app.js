let form = document.querySelector("form");
const loginBtn = document.querySelector(".btn")


//add hover effect..................
loginBtn.addEventListener("mouseover", () => {
    loginBtn.classList.add("hovered");
});

loginBtn.addEventListener("mouseout", () => {
    loginBtn.classList.remove("hovered");
});

//add active(click) effect...........
loginBtn.addEventListener("mousedown", () => {
    loginBtn.classList.add("active");
});

loginBtn.addEventListener("mouseup", () => {
    loginBtn.classList.remove("active");
});

//login function
form.addEventListener("submit", (event) => {
    event.preventDefault();

    let user = document.querySelector("#username");
    let password = document.querySelector("#password");

    console.log(user.value);
    console.log(password.value);


});