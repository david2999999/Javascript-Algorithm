class SinglyLinkedList{
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        
        while (current.next) {
             newTail = current;
             current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
            this.head = null;
        }

        return current;
    }

    shift() {
        if (this.length === 0) return undefined;

        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return currentHead;
    }


    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let list = new SinglyLinkedList();
list.push("Hi");
list.push("hello");
list.traverse();