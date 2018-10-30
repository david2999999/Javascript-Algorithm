class Node {
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
            this.length++;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            this.length++;
        }
        return this;
    }

    unshift(val){
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let count, current;

        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            while (count !== index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }

        return current;
    }

    insert(index, val){
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let beforeNode = this.get(index);

        newNode.prev = beforeNode;
        newNode.next = beforeNode.next;
        beforeNode.next.prev = newNode;
        beforeNode.next = newNode;

        return true;
    }

    shift() {
        if (this.length === 0) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }

        this.length--;
        return oldHead;
    }

    pop() {
        if (!this.head) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    remove(index){
        if (index < 0 || index > this.length - 1) return undefined;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();

        let node = this.get(index);
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.next = null;
        node.prev = null;
        this.length--;
        return node;
    }
}