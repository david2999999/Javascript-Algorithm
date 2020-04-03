function LinkedList() {
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

function Node(element) {
    this.element = element;
    this.next = null;
}