const body = document.querySelector("#body")
const btn = document.querySelector("#btn")
const colorText = document.querySelector("#colorCode")

btn.addEventListener("click", ()=>{
    applyColorCode();
})

function randomCode(){
    let num = Math.random();
    num *= 255;
    num = Math.ceil(num)
    return num;
}

function getColorCode(){
    let red = randomCode();
    let green = randomCode();
    let blue = randomCode();
    let colorCode = "rgb("+red+","+green+","+blue+")";
    return colorCode;
}

function applyColorCode(){
    let colorCode = getColorCode();
    body.style.backgroundColor = colorCode;
    colorText.innerText = colorCode;
}
