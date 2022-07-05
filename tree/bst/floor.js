class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/**
 * 
 * the floor function maps x to the greatest integer less than or equal to x, 
 * denoted floor or ⌊x⌋
 * 
 * 
 *                          10
 *                5         |       13
 *             3  |  6      |   11      14    
 *           2  4 |     9   |
 * 
 * x = 8
 * floor(8) = 6 { greatest integer less than or equal to x }
 * 
 *                8
 *          3     |  10
 *      1      6  |      14
 *          4    7|  13
 * 
 * 
 * floor(5) = 6 {greatest integer less than or equal to x}
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
function floorR(root, key, ans = -1){
    if(root === null) return ans;

    if(root.value === key) return root.value;

    console.log(root.value);

    // floor -> less than or equal to key
    if(root.value > key){
        return floorR(root.left, key, ans);
    }else{
        ans = root.value;
        return floorR(root.right, key, ans);
    }
}

console.log(floorR(root, 5));