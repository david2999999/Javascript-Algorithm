function ArrayList() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements

    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
}

// appends an element to our list in the next available position
function append(element) {
    this.dataStore[this.listSize++] = element;
}

// an insertion functions needs to know where to insert an element
// We first find the index position of the element 'after'
    // if the element does exist (index != -1)
        // Then we will add the new element to (index + 1) using the splice method
function insert(element, after) {
    var insertPosition = this.find(after);
    if (insertPosition > -1) {
        this.dataStore.splice(insertPosition + 1, 0, element);
        ++this.listSize;
        return true;
    }

    return false;
}

function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }

    return false;
}

function contains(element) {
    return find(element) > -1;
}

// clears our all elements of a list and allow new elements to be entered
// We use the delete operator to delete the data store array
    // We will then create an empty datastore and set our list/position to 0 to indicate
    // the start of the array
function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

// Iterate through our array to find the element's index
function find(element) {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] === element) {
            return i;
        }
    }
    return -1;
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

// traversing a list
function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}

function next() {
    if (this.pos < this.listSize - 1) {
        ++this.pos;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(postion) {
    this.pos = postion;
}

function getElement() {
    return this.dataStore[this.pos];
}

var names = new ArrayList();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

names.front();
console.log(names.getElement()); // displays Clayton

names.next();
console.log(names.getElement()); // displays Raymond

names.next();
names.next();
names.prev();
console.log(names.getElement()); // displays Cynthia
