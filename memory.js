function Carte (type) {
    this.type = type;
    this.getType = function () {
        alert(type);
    };
    this.setNumber = function() {
        let x = Math.floor((Math.random() * 6) + 1);
        document.getElementById("demo").innerHTML = x;
    }
}
let zob = new Carte('zob')
document.getElementById("cardLeft").addEventListener("click", zob.setNumber);

