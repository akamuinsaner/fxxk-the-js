function Node(value, next) {
    this.value = value;
    this.next = next;
}

function LinkedList() {
    this.insert = insertNode;
    this.delete = deleteNode;
    this.find = findNode;
    this.head = null;
}

function findNode(value) {
    let curr = this.head;
    while (curr.next != null && curr.value != value) {
        curr = curr.next;
    }
    return curr;
}

function findPrevious(value) {
    let curr = this.head;
    if (curr.next != null && curr.next.value != value) {
        curr = curr.next;
    }
    return curr;
}

function deleteNode(value) {
    const pre = this.findPrevious(value);
    pre.next = pre.next.next;
    pre.next.next = null;
}

function insertNode(newValue, value) {
    const pre = this.findPrevious(value);
    const newNode = new Node(newValue);
    newNode.next = pre.next;
    pre.next = newNode;

}



