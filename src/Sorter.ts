//! not used anymore
// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }

export abstract class Sorter {
  //! abstract
  //* existing in the future
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  //! Before
  // constructor(public collection: number[] | string) {}

  //! After
  //! New change
  // constructor(public collection: Sortable) {}

  sort(): void {
    //! Before
    // const { length } = this.collection;

    //! After
    const { length } = this;

    //* v1.0.0
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        //! before
        //* if collection is numbers
        //? Using type guard
        // if (this.collection instanceof Array) {}
        // if (this.collection[j] > this.collection[j + 1]) {
        //   const temp = this.collection[j];
        //   this.collection[j] = this.collection[j + 1];
        //   this.collection[j + 1] = temp;
        // }
        //* if collection is strings
        // if (typeof this.collection === "string") {
        // }

        //! after
        //! Before
        // if (this.collection.compare(j, j + 1)) {
        // this.collection.swap(j, j + 1);

        //! after
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}