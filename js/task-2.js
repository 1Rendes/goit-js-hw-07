class Storage {
  #input;
  constructor(inputArray) {
    this.#input = inputArray;
  }
  getItems() {
    return this.#input;
  }
  addItem(newItem) {
    this.#input.push(newItem);
  }
  removeItem(itemToRemove) {
    if (this.#input.includes(itemToRemove))
      this.#input.splice(this.#input.indexOf(itemToRemove), 1);
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
