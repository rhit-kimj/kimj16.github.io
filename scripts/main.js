let scrollBtn = document.querySelector("#scrollTop");
scrollBtn.onclick = (event) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}