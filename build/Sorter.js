"use strict";
//! not used anymore
// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    //! Before
    // constructor(public collection: number[] | string) {}
    //! After
    //! New change
    // constructor(public collection: Sortable) {}
    Sorter.prototype.sort = function () {
        //! Before
        // const { length } = this.collection;
        //! After
        var length = this.length;
        //* v1.0.0
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
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
    };
    return Sorter;
}());
exports.Sorter = Sorter;
