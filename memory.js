var carte = {
    type: "boule",
    decrire: function () {
        let description = this.type;
        return description;
    }
}
console.log(carte.decrire());