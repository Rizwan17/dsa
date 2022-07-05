class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function insert(root, value){
    let curr = root;
    while(true){
        if(value > curr.value){
            if(curr.right !== null){
                curr = curr.right
            }else{
                curr.right = new Node(value);
                break;
            }
        }else{
            if(curr.left !== null){
                curr = curr.left;
            }else{
                curr.left = new Node(value);
                break;
            }
        }
    }

    return root;
}