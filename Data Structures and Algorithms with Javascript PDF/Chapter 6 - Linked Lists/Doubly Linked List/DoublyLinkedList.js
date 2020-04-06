function DoublyLinkedList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.remove = remove;
    this.findLast = findLast;
    this.dispReverse = dispReverse;
}

function dispReverse() {
    var currNode = this.findLast();
    while (currNode.value != "head") {
        console.log(currNode.element);
        currNode = currNode.previous;
    }
}

function findLast() {
    var currNode = this.head;
    while (currNode.next != null) {
        currNode = currNode.next;
    }
    return currNode;
}

function remove(item) {
    var currNode = this.find(item);

    if (currNode) {
        currNode.previous.next = currNode.next;

        if (currNode.next) {
            currNode.next.previous = currNode.previous;
        }

        currNode.next = null;
        currNode.previous = null;
    }
}

function display() {
    var currentNode = this.head.next;
    while (currentNode) {
        console.log(currentNode.element);
        currentNode = currentNode.next;
    }
}

function find(item) {
    var currNode = this.head.next;
    while (currNode) {
        if (currNode.element == item) {
            return currNode;
        }

        currNode = currNode.next;
    }

    return null;
}

function insert(newElement, item) {
    var current = this.find(item);

    if (current) {
        var newNode = new Node(newElement);
        newNode.next = current.next;
        newNode.previous = current;

        if (current.next) {
            current.next.previous = newNode;
        }
        current.next = newNode;
    }
}

function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}