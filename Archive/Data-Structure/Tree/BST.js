class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);

        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (val === current.value) return undefined;
                if (val < current.value) {
                    if (!current.left) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (val > current.value) {
                    if (!current.right) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    
    find(val) {
        if (!this.root) return null;

        let current = this.root;
        let found = false;

        while (current && !found) {
            if (val < current.value) {
                current = current.left;
            } else if (val > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }

        return found ? current : null;
    }

    BSF() {
        let node = this.root,
            data = [],
            queue = [];

        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return data;
    }

    DFSPreOrder() {
        let data = [];

        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return data;
    }

    DFSPostOrder() {
        let data = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }

        traverse(this.root);
        return data;
    }

    DFSInOrder() {
        let data = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return data;
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BSF());
console.log(tree.DFSPreOrder());

