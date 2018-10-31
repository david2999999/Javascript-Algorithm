class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        return this.size++;
    }

    dequeue() {
        if (!this.first) return null;

        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;
        this.size--;

        return temp.val;
    }
}