class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


/**
 * 
 *          1
 *      2       2
 * 4       5 5      4
 * 
 * 
 * */ 

// sample tree
const node = new Node(1);
node.left = new Node(2);
node.right = new Node(2);
node.left.left = new Node(4);
node.left.right = new Node(5);

node.right.left = new Node(5);
node.right.right = new Node(4);

function isSymmetric(root){
    return root === null || isSymmetricHelp(root.left, root.right);
}

function isSymmetricHelp(left, right){
    if(left === null || right === null){
        return left === right;
    }

    if(left.value !== right.value) return false;
    return (
        isSymmetricHelp(left.left, right.right)
        &&
        isSymmetricHelp(left.right, right.left)
    );
}

const node1 = new Node(10);

console.log(isSymmetric(node1));