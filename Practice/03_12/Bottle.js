

class Bottle{
    constructor(
        color,
        height,
        width,
        length
    ){
        this.color = color;
        this.height = height;
        this.length = length;
        this.width = width;
        this.isBottleOpen = false;
    }
    // add methods
    toggleBottleLid(){
        this.isBottleOpen = !this.isBottleOpen;
    }
}

export default Bottle;