function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
}

/**
 * (1) 设根节点为当前节点。
(2) 如果待插入节点保存的数据小于当前节点,则设新的当前节点为原节点的左节点;反
之,执行第 4 步。
(3) 如果当前节点的左节点为 null ,就将新的节点插入这个位置,退出循环;反之,继续
执行下一次循环。
(4) 设新的当前节点为原节点的右节点。
(5) 如果当前节点的右节点为 null ,就将新的节点插入这个位置,退出循环;反之,继续
执行下一次循环
 */

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.findMin = findMin;
    this.findMax = findMax;
    this.find = find;
    this.reverse = reverse;
    this.countNode = countNode;
    this.countSide = countSide;
}

function insert(data) {
    const newNode = new Node(data, null, null);
    if (this.root == null) {
        this.root = newNode;
    } else {
        let current = this.root;
        while (true) {
            if (data < current.data) {
                if (current.left == null) {
                    current.left = newNode;
                    break;
                } else {
                    current = current.left;
                }
            }
            if (data > current.data) {
                if (current.right == null) {
                    current.right = newNode;
                    break;
                } else {
                    current = current.right;
                }
            }
        }
    }
}

/**
 * 有三种遍历 BST 的方式:中序、先序和后序。中序遍历按照节点上的键值,以升序访问
BST 上的所有节点。先序遍历先访问根节点,然后以同样方式访问左子树和右子树。后序
遍历先访问叶子节点,从左子树到右子树,再到根节点。
 */
// 中序遍历
function inOrder(node) {
    if (node != null) {
        inOrder(node.left);
        console.log(node.data);
        inOrder(node.right);
    }
}

// 先序遍历
function preOrder(node) {
    if (node != null) {
        console.log(node.data);
        preOrder(node.left);
        preOrder(node.right);
    }
}

function postOrder(node) {
    if (!(node == null)) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.data);
    }
}

// 查找最小值
function findMin() {
    let current = this.root;
    while (true) {
        if (current.left != null) {
            current = current.left;
        } else {
            break;
        }
    }
    return current.data;
}

// 查找最小值
function findMax() {
    let current = this.root;
    while (true) {
        if (current.right != null) {
            current = current.right;
        } else {
            break;
        }
    }
    return current.data;
}

// 查找给定值
function find(data) {
    var current = this.root;
    while (current != null) {
        if (current.data == data) {
            return current;
        }
        else if (data < current.data) {
            current = current.left;
        }
        else {
            current = current.right;
        }
    }
    return null;
}

function reverse(current) {
    if (!current) {
        current = this.root;
    }
    if (current != null) {
        const temp = current.left;
        current.left = current.right;
        current.right = temp;
        if (current.left != null) this.reverse(current.left);
        if (current.right != null) this.reverse(current.right);
    }
}

function countNode() {
    let count = 0
    function _count(current) {
        if (current != null) {
            count += 1;
            _count(current.left)
            _count(current.right);
        }
    }
    _count(this.root);
    return count;
}

function countSide() {
    let count = 0;
    function _count(current) {
        if (current != null) {
            if (current.left) {
                count += 1;
                _count(current.left);
            }
            if (current.right) {
                count += 1;
                _count(current.right);
            }
        }
    }
    _count(this.root);
    return count;
}

function handleText() {
    var bst = new BST();
    var fs = require('fs');
    const bfData = fs.readFileSync('./tree_test.txt');
    const data = bfData.toString('utf-8');
    const a = data.split(',');
    for (let item of a) {
        bst.insert(item);
    }
    return bst;
}



var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log(handleText());
