const hv = document.querySelector(".image-view");

console.log("hv", hv)

hv.forEach(element => {
    element.addEventListener("click", () => {
        window.location.href="http://127.0.0.1:5500/productView.html"
    })
});

