class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/**
 * 
 * the ceiling function maps x to the least integer greater than or equal to x, 
 * denoted ceil or ⌈x⌉
 * 
 * 
 *                          10
 *                5         |       13
 *             3  |  6      |   11      14    
 *           2  4 |     9   |
 * 
 * x = 8
 * ceil(8) = 9 { least integer greater than or equal to x }
 * floor(8) = 6 { greatest integer less than or equal to x }
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

function ceil(root, key){
    let ans = -1;
    while(root){
        if(key === root.value) return root;

        if(key < root.value){
            ans = root.value;
            root = root.left;
        }else{
            root = root.right;
        }
    }
    

    return ans;
}

// recursion
function ceilR(node, key, ans = -1){
    if(node === null) return ans;

    if(node.value === key) return node.value;

    if(key < root.value){
        ans = root.value;
        return ceilR(root.left, key, ans);
    }else{
        return ceilR(root.right, key, ans);
    }
}

console.log(ceil(root, 100));