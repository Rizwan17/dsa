class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

function removeKthNodeFromEnd(head, k){
    let p1 = head, p2 = head, count=1, prev = null;
	
	//1->2->3->4 k = 2
	//		p  p2   p1
	while(p1 && count <= k){
		p1 = p1.next;
		count++;
	}
	
	if(p1 === null){
		head.value = head.next.value;
		head.next = head.next.next;
		return;
	}
	
	while(p1){
		prev = p2;
		p1 = p1.next;
		p2 = p2.next;
	}
	
	prev.next = p2.next;
    
}

const node = new Node(0);
node.next = new Node(1);
node.next.next = new Node(2);
// node.next.next.next = new Node(3);
// node.next.next.next.next = new Node(4);

console.log(JSON.stringify(node));

removeKthNodeFromEnd(node, 3);

console.log(JSON.stringify(node));
