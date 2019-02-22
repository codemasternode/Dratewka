class Field {
    constructor({text, imagePath, color, directions = ['E', 'W', 'N', 'S'], item = null, positionX, positionY}) {
        this.text = text
        this.imagePath = imagePath
        this.color = color
        this.directions = directions
        this.item = item
        this.positionX = positionX
        this.positionY = positionY
    }
}