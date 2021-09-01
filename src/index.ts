import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { Sorter } from './Sorter';
import { LinkedList } from './LinkedList';


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
const numbersCollection = new NumbersCollection([0, -5, 10, 2, 1]);
const charactersCollection = new CharactersCollection('fwahdsa');

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

numbersCollection.sort();
charactersCollection.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
linkedList.print();
