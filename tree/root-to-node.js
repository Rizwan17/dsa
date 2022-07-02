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
 *      2       3
 * 4       5 6      7
 * 
 * 
 * */ 

// sample tree
const node = new Node(1);
node.left = new Node(2);
node.right = new Node(3);
node.left.left = new Node(4);
node.left.right = new Node(5);

node.right.left = new Node(6);
node.right.right = new Node(7);


function findPath(root, path, target){
    if(root === null) return false;

    path.push(root.value);

    if(root.value === target) return true;

    if(findPath(root.left, path, target)
    || findPath(root.right, path, target)){
        return true;
    }

    path.pop();
    return false;
}

function main(){
    const path = [];
    const target = 7;
    findPath(node, path, target);
    return path;
}

console.log(main());