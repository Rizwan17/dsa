class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/***
 * post traversal means traverse the left sub tree, traverse the right sub tree and then traverse the root
 * 
 * Left Right Root
 * 
 * raverse the left sub tree, traverse the right sub tree, print root
 * 
 * Time complexity O(N)
 * 
 *          1
 *      2       3
 * 4       5 6      7
 * 
 * postorder = 4 5 2 6 7 3 1
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

function postorder(node){
    if(node === null) return;
    //1 - traverse the left sub tree
    postorder(node.left);
    //2 - traverse the right sub tree
    postorder(node.right);
    //3 - print root
    console.log(node.value);
}

//postorder(node);