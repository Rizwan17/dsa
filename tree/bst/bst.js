class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/**
 * 
 * Binary Search Tree follows a rule where left subtree will be smaller than root and
 * right subtree will be greater than root
 * 
 * left Node < Root Node < Right Node
 * 
 *                8
 *          3     |  10
 *      1      6  |      14
 *          4    7|  13
 * 
 * here left subtree is smaller than root and right sub tree is greater than root and
 * all the nodes follow the same rule.
 * 
 * height = log n base 2
 * 
 * 
 * */ 

// construct a binary tree
const root = new Node(8);
root.left = new Node(3);
root.left.left = new Node(1);
root.left.right = new Node(6);
root.left.right.left = new Node(4);
root.left.right.right = new Node(7);

root.right = new Node(10);
root.right.right = new Node(14);
root.right.left = new Node(13);

