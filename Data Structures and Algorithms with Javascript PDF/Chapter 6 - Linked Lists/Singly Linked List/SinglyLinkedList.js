function SinglyLinkedList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
}

// to insert a node after an existing node, we first have to find the "after" node
// This helper function find() will be able to search through the linked list look for
// the specified data
function find(item) {
    var currNode = this.head;
    while (currNode != null && currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);

    if (current != null) {
        newNode.next = current.next;
        current.next = newNode;
    }
}

function display() {
    var currNode = head;
    while (!(currNode.next == null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

function remove(item) {
    var prevNode = this.findPrevious(item);

    if (prevNode != null) {
        if (prevNode.next != null) {
            prevNode.next = prevNode.next.next;
        }
    }
}

function findPrevious(item) {
    var currNode = this.head;
    while (currNode != null && currNode.next != null && (currNode.next.element != item)) {
        currNode = currNode.next;
    }
    return currNode;
}

function Node(element) {
    this.element = element;
    this.next = null;
}