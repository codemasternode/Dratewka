class Player {
    constructor({ positionX, positionY, item }) {
        this.positionX = positionX
        this.positionY = positionY
        this.item = item
    }
    move(where) {
        console.log(where)
        if (where.toUpperCase() == "W") {
            this.positionX -= 1
        } else if (where.toUpperCase() == "E") {
            this.positionX += 1
        } else if (where.toUpperCase() == "S") {
            this.positionY += 1
        } else {
            this.positionY -= 1
        }
    }
}