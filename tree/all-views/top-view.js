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
node.right.right = new Node(7);

/**
 * 
 * 
 *          1
 *      2       3
 * 4       5 6      7
 * 
 * 
 * 
 * topView = [4, 2, 1, 3, 7]
 * 
 * vertical traversal = [[4], [2], [1, 5, 6], [3], [7]]
 * 
 * 
 * */

// using level order traversal

function topView(node){
    if(node === null) return;

    const queue = [{node, pos: 0}];
    const ans = {};
    const topView = [];

    while(queue.length){
        
        const item = queue.shift();
        const x = item.pos;

        if(x in ans){
            ans[x].push(item.node.value);
        }else{
            ans[x] = [item.node.value];
        }

        if(item.node.left !== null) {
            queue.push({ node: item.node.left, pos: x - 1 });
        }
        if(item.node.right !== null){
            queue.push({ node: item.node.right, pos: x + 1 });
        }
    }

    // ans = { '0': [ 1, 5, 6 ], '1': [ 3 ], '2': [ 7 ], '-1': [ 2 ], '-2': [ 4 ] }

    const keys = Object.keys(ans); // ['0', '1', '2', '-1', '-2']
    keys.sort((a, b) => a - b); // [-2, -1, 0, 1, 2]
    for(let x of keys){
        topView.push(ans[x][0]);
    }

    return topView;
}

console.log(topView(node));