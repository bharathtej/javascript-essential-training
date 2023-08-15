/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const bottle = {
    color: "Grey",
    height: 25,
    width: 10,
    length: 50,
    bottleOpen: false,
    openBottle:function(open){
        this.bottleOpen = open;
    }
}
console.log("Bottle object is :",bottle)
