class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/**
 * 
 * 
 *                8
 *          3     |  10
 *      1      6  |      14
 *          4    7|  13
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

function searchInBst(node, target){
    if(node === null) return null;

    console.log(node.value)

    if(node.value === target) return node;

    if(target > node.value){
        return searchInBst(node.right, target);
    }else{
        return searchInBst(node.left, target);
    }
}

// const ans = searchInBst(root, 19);
// console.log(ans);

function iterativeBST(root, target){
    while(root !== null && root.value !== target){
        root = target > root.value ? root.right : root.left;
    }
    return root;
}

const ans = iterativeBST(root, 7);
console.log(ans);