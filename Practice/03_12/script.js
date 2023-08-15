/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Bottle from "./Bottle";
import Backpack from "./Backpack";

const bottle = new Bottle("blue", 23, 25, 17);
const backpack = new Backpack("random", 234, "blue", 76, 76, 87, true);

console.log(backpack)
console.log(bottle.color);
console.log("bottle height", bottle.height);
console.log("bottle status before toggle : ", bottle.isBottleOpen)
bottle.toggleBottleLid();
console.log("bottle status after toggle : ", bottle.isBottleOpen);
