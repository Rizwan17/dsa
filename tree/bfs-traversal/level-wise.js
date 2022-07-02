class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/**
 * 
 * level-wise traversal is known as bfs traversal
 * 
 * A queue can be use to traverse the whole tree
 * 
 * Steps
 * -> Add node in queue and loop till queue is not empty, initially queue length will be 1
 * -> dequeue the node from queue and if there is left and right node of node then add them in queue
 * -> and so on.
 * 
 * 
 * / 

/**
 * 
 *          1
 *      2       3
 * 4       5 6      7
 * 
 * levelwise = [[1], [2, 3], [4, 5, 6, 7]]
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


function levelWise(node){
    const ans = [];
    if(node === null) return ans;
    // adding root node in queue;
    const queue = [node];
    
    while(queue.length){
        // get current size of queue and loop throgh it
        const size = queue.length;
        // temp variable to store the level
        const level = [];

        for(let i=0; i< size; i++){
            // dequeue the queue, means removing first item from queue and stored in node variable
            const node = queue.shift();

            // if there is left and right node of removed node then add them into queue
            if(node.left !== null) queue.push(node.left);
            if(node.right !== null) queue.push(node.right);

            // add removed node value into level
            level.push(node.value);
        }
        // once `for` loop completed we will have our one complete level
        ans.push(level);
    }
    return ans;
}

console.log(levelWise(node));