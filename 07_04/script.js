/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

const list = ["apple", "mango", "cat", "dog", "elephant", "fish", "giraffe", "monkey"];
console.log("Build an array with 8 items: ", list);
list.pop();
console.log("Remove the last item : ",list);
list.unshift(list.pop());
console.log("Add the last item as the first item on the array:", list);
list.sort();
console.log("Sort the items by alphabetical order :", list);

let foundItem = list.find(function(item){
    if(item.length==3) return item;
});

console.log("Use the find() method to find a specific item in the array :", foundItem);

list.splice(list.indexOf(foundItem), 1);
console.log("Remove the item you found using the find method from the array : ", list);

