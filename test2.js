const texts = ["ppp", "bbb", "ddd", "qqq"];
let index = 0;

setInterval(() => {
    document.getElementById("changing").innerHTML = texts[index];
    index = (index + 1) % texts.length;
}, 100);