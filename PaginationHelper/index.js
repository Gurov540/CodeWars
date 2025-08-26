class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    return this.collection.length;
  }
  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }
  pageItemCount(pageIndex) {
    if (pageIndex < 0 || pageIndex >= this.pageCount()) return -1;

    if (pageIndex === this.pageCount() - 1) {
      return this.collection.length % this.itemsPerPage || this.itemsPerPage;
    }

    return this.itemsPerPage;
  }
  pageIndex(itemIndex) {
    if (itemIndex < 0 || itemIndex >= this.collection.length) return -1;
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}

let helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);

console.log(helper.pageCount()); // 2
console.log(helper.itemCount()); // 6
console.log(helper.pageItemCount(0)); // 4
console.log(helper.pageItemCount(1)); // 2
console.log(helper.pageItemCount(2)); // -1
console.log(helper.pageIndex(5)); // 1
console.log(helper.pageIndex(2)); // 0
console.log(helper.pageIndex(20)); // -1
console.log(helper.pageIndex(-10)); // -1
