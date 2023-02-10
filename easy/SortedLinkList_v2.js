class LinkedNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    getSize() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    getLast() {
        let node = this.head;
        while (node?.next) {
            node = node.next;
        }
        return node;
    }

    getFirst() {
        return this.head?.data;
    }

    getAllNodedValue() {
        let values = [];
        let node = this.head;
        while (node) {
            values.push(node.data);
            node = node.next;
        }
        return values;
    }
}

let node11 = new LinkedNode(2);
let node2 = new LinkedNode(3);
let node3 = new LinkedNode(4);
node11.next = node2;
node2.next = node3;
let list1 = new LinkedList(node11);

let node21 = new LinkedNode(1);
let node22 = new LinkedNode(5);
let node23 = new LinkedNode(6);
node21.next = node22;
node22.next = node23;
let list2 = new LinkedList(node21);

console.log(list1.getAllNodedValue());
console.log(list2.getAllNodedValue());

const mergeTwoLists = (node1, node2) => {
    //debugger
    if (!node1)
        return node2;

    if (!node2)
        return node1;

    const result = new LinkedNode(undefined);

    if (node1.data < node2.data) {
        node1.next = mergeTwoLists(node1.next, node2);
        return node1;
    } else {
        node2.next = mergeTwoLists(node1, node2.next);
        return node2;
    }
}

let finalNode = mergeTwoLists(node11, node21);
console.log((new LinkedList(finalNode)).getAllNodedValue());