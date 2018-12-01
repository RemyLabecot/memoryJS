function Carte (type) {
    this.type = type;
    this.getType = function () {
        alert(type);
    };
}
let zob = new Carte('zob')
document.getElementById("myBtn").addEventListener("click", zob.getType);

