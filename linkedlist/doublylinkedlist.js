// Write a doubly linked list class with head and tail, both of which point to either a linked list
// Node or None/null


class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}


class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    // Write your code here.
    if(this.head === null){
        this.head = node;
        this.tail = node;
        return;
    }
  }

  setTail(node) {
    // 1<->2<->3<->4<->7
    if(this.head === null){
        this.setHead(node);
    }else{
        const currentTail = this.tail;
        currentTail.next = node;
        node.prev = currentTail
        this.tail = node;
    }

  }

  insertBefore(node, nodeToInsert) {
    // 10 <-> 1 <-> 12 <->2<->3<->5

    
    //if(result)

    if(this.head === null){
        this.setHead(node);
    }

    this.remove(nodeToInsert);

    const currentPrevNode = node.prev;
    nodeToInsert.next = node;
    nodeToInsert.prev = currentPrevNode;
    if(currentPrevNode){
        currentPrevNode.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
    if(currentPrevNode === null){
        this.head = nodeToInsert;
    }
    
  }

  insertAfter(node, nodeToInsert) {
    //1 <->2 <->3 <->null/tail
    // head <-> 1 <-2 -> null

    // 1<->2<->5 <->10 <->3<->7<->8 10 

    if(this.head === null){
        this.setHead(node);
    }

    this.remove(nodeToInsert);

    const currentNextNode = node.next;
    nodeToInsert.next = currentNextNode;
    nodeToInsert.prev = node;
    if(currentNextNode){
        currentNextNode.prev = nodeToInsert;
    }
    node.next = nodeToInsert;
    if(nodeToInsert.next === null){
        this.tail = nodeToInsert;
    }
  }

  insertAtPosition(position, nodeToInsert) {
    // head pos = 1, 1<->2<->3<->4 pos = 2
    if(position === 1){
        this.insertBefore(this.head, nodeToInsert);
    }else{
        let currentNode = this.head, currentPosition = 1;
        while(currentNode && currentPosition !== position){
            console.log({ currentNode });
            currentNode = currentNode.next;
            currentPosition++;
        }
        //currentNode = currentNode.next;
        console.log({currentNode});
        this.insertBefore(currentNode, nodeToInsert);


    }
  }

  removeNodesWithValue(value) {
    // Write your code here.
    let currNode = this.head;
    while(currNode && currNode.value !== value){
        currNode = currNode.next;
    }

    if(currNode){
        this.remove(currNode);
    }
  }

  remove(node) {
    // 1<->2<- 3 ->4<->5 remove 3
    let currentNode = this.head;
    while(currentNode && currentNode.value !== node.value){
        currentNode = currentNode.next;
    }

    if(currentNode){
        const prevNode = currentNode.prev;
        const nextNode = currentNode.next;
    
        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        return currentNode.value === node.value ? currentNode : null;
    }
    return false;

    
  }

  containsNodeWithValue(value) {
    // 1<->2<->3<->4
    let currentNode = this.head;
    while(currentNode && currentNode.value !== value){
        currentNode = currentNode.next;
    }
    return value === currentNode.value ? true : false;
  }

  printNodes(){
      let currentNode = this.head;
      let currentNode1 = this.tail;
      const ar = [];
      const ar1 = [];
      console.log('start to end');
      while(currentNode){
          ar.push(currentNode.value);
          currentNode = currentNode.next;
      }
    console.log(ar);

      while(currentNode1){
          ar1.push(currentNode1.value);
          currentNode1 = currentNode1.prev;
      }

    //   console.log(this.tail);
      console.log(ar1);

  }
}


const node = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node5 = new Node(5);
const node6 = new Node(6);
const node0 = new Node(0);
const node10 = new Node(10);
const node11 = new Node(11);
const node12 = new Node(12);

const dl = new DoublyLinkedList();
//dl.setHead(node);
dl.insertAfter(node, node2);
dl.insertAfter(node2, node3);
dl.insertAfter(node2, node5);
dl.insertAfter(node3, node6);
//dl.insertBefore(node2, node0);
//dl.insertBefore(node, node10);

// dl.insertAtPosition(1, node11);
// dl.insertAtPosition(2, node12);
//dl.remove(node2);

dl.insertAfter(node2, node3);
dl.printNodes();