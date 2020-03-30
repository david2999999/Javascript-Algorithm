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

var names = new ArrayList();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
console.log(names.toString());

names.remove("Raymond");
console.log(names.toString());