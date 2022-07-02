class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// sample tree
const node = new Node(1);
node.left = new Node(2);
node.right = new Node(3);
node.left.left = new Node(4);
node.left.right = new Node(5);

node.right.left = new Node(6);
node.right.left.right = new Node(8);
node.right.right = new Node(7);


/**
 * 
 *          1
 *      2       3
 * 4       5 6      7
 *              8
 * 
 * rightView = [1, 3, 7, 8]
 * 
 * */ 

function rightView(node, level, ans){
    if(node === null) return;

    if(level === ans.length){
        ans.push(node.value);
    }

    rightView(node.right, level + 1, ans);
    rightView(node.left, level + 1, ans);
}

function main(){
    const ans = [];
    rightView(node, 0, ans);
    return ans;
}

console.log(main());