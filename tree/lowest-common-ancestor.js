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

function getPath(node, target, path){
    if(node === null) return false;

    path.push(node.value);
    if(node.value === target) return true;

    const left = getPath(node.left, target, path);
    const right = getPath(node.right, target, path);

    if(left || right) return true;
    path.pop();

    return false;
}
 
// soln - 1
function lowestCommonAncestor(node, value1, value2){
    const path1 = [], path2 = [];
    getPath(node, value1, path1);
    getPath(node, value2, path2);

    const ans = path1.filter((p1) => path2.find(p2 => p2 === p1));
    return ans[ans.length - 1];

}

//console.log(lowestCommonAncestor(node, 6, 7));

// soln - 2
function lowestCommonAncestor2(node, value1, value2){
    if(node === null || node.value === value1 || node.value === value2){
        return node;
    }

    const left = lowestCommonAncestor2(node.left, value1, value2);
    const right = lowestCommonAncestor2(node.right, value1, value2);

    if(left === null) return right;
    else if(right === null) return left;
    else return node;
}

function main(){
    const commonNode = lowestCommonAncestor2(node, 6, 7);
    return commonNode.value;
}

console.log(main());