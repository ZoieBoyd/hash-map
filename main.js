import { HashMap } from "./hashMap.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
test.set("moon", "silver");
test.set("moon", "white");

console.log(test.entries());
console.log(test.get("moon")); // Expected: "white"
test.remove("moon");
console.log(test.entries());
console.log(test.length()); // Expected: 12
console.log(test.keys());
console.log(test.values());
test.clear();
console.log(test.entries()); // Expected: []
