function CircularLinkedList() {
    this.head = new Node("head");
    this.head.next = this.head;
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findPrevious = findPrevious;
    this.remove = remove;
}

function Node(element) {
    this.element = element;
    this.next = null;
}