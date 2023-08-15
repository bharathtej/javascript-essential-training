/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  changeName:function (nam){
    this.name = nam;
  },
  volume: 30,
  changeVolume: function (volume){
    this.volume = volume;
  },
  color: "grey",
  lidStatus: false,
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log(backpack);
console.log("Before updating name : ", backpack.name);
backpack.changeName("howle");
console.log("After updating name : ", backpack.name);
