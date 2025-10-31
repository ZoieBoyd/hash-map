import { HashMap } from "./hashMap.js";
import { HashSet } from "./hashSet.js";

// Hash Map testing
const hashMap = new HashMap();

hashMap.set("apple", "red");
hashMap.set("banana", "yellow");
hashMap.set("carrot", "orange");
hashMap.set("dog", "brown");
hashMap.set("elephant", "gray");
hashMap.set("frog", "green");
hashMap.set("grape", "purple");
hashMap.set("hat", "black");
hashMap.set("ice cream", "white");
hashMap.set("jacket", "blue");
hashMap.set("kite", "pink");
hashMap.set("lion", "golden");
hashMap.set("moon", "silver");

console.log(hashMap.entries());

// Hash Set testing
const hashSet = new HashSet();

hashSet.set("lion");
hashSet.set("pig");
hashSet.set("turtle");
hashSet.set("camel");
hashSet.set("cat");
hashSet.set("dog");
hashSet.set("tiger");
hashSet.set("donkey");
hashSet.set("rooster");
hashSet.set("dolphin");
hashSet.set("llama");
hashSet.set("cow");
hashSet.set("moose");

console.log(hashSet.entries());
