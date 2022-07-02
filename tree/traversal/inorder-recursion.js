class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/***
 * inorder traversal means Left Tree traversal, Root, then right Tree traversal
 * 
 * Left Root Right
 * 
 * completet the left tree traversal, print the root and then complete the right tree traversal
 * 
 * Time complexity O(N)
 * 
 *          1
 *      2       3
 * 4       5 6      7
 * 
 * inorder = 4 2 5 1 6 3 7
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

function inorder(node, ans){
    if(node === null) return;
    //1 - complete left tree traversal
    inorder(node.left, ans);
    //2 - print root
    //console.log(node.value);
    ans.push(node.value);
    //3 - complete right tree traversal
    inorder(node.right, ans);
}

function main(){
    const ans = [];
    inorder(node, ans);
    return ans;
}

//inorder(node);

console.log(main());