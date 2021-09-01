"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
//! before
// const numbersCollection = new NumbersCollection([10, 3, -5, 7]);
// const charactersCollection = new CharactersCollection('desSnAf');
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// const sorter2 = new Sorter(charactersCollection);
// sorter2.sort();
// const sorter3 = new Sorter(linkedList);
// sorter3.sort();
// console.log(numbersCollection.data);
// console.log(charactersCollection.data);
//! after
var numbersCollection = new NumbersCollection_1.NumbersCollection([0, -5, 10, 2, 1]);
var charactersCollection = new CharactersCollection_1.CharactersCollection('fwahdsa');
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
numbersCollection.sort();
charactersCollection.sort();
console.log(numbersCollection.data);
console.log(charactersCollection.data);
linkedList.print();
