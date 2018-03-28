var Boatdesc = function (boatType, description) {
    this.boatType = boatType
    this.description = description;
}

Boatdesc.toObject = function (result) {
    return new Boatdesc(result.boatType, result.description)
}

module.exports = Boatdesc;