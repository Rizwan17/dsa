class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/***
 * preorder traversal means Root, then left tree traversal and then right Tree traversal
 * 
 * Root Left Right
 * 
 * print the root and then traverse the left sub tree and traverse the right sub tree
 * 
 * Time complexity O(N)
 * 
 *          1
 *      2       3
 * 4       5 6      7
 * 
 * preorder = 1 2 4 5 3 6 7
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

function preorder(node){
    if(node === null) return;
    //1 - print root
    console.log(node.value);
    //2 - traverse the left sub tree
    preorder(node.left);
    //3 - traverse the right sub tree
    preorder(node.right);
}

//preorder(node);