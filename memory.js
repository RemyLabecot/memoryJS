function Carte (type) {
    this.type = type;
    this.getType = function () {
        alert(type);
    };
}
function myFunction() {
    alert("Hello World!");
}
let zob = new Carte('zob')
document.getElementById("myBtn").addEventListener("click", zob.getType);

