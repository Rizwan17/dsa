class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function mergeLinkedLists(headOne, headTwo) {
    // 					5p1 ->6 ->7
      // 					^
      // 1-> 3 -> 4pr 8p->9->10
      
      let p1 = headOne,
              p = headTwo,
              prev = null;
      
      while(p && p1){
          if(p.value <= p1.value){
              while(p && p.value <= p1.value){
                console.log(p);
                  prev = p;
                  p = p.next;
              }
              prev.next = p1;
          }else{
              while(p1 && p1.value <= p.value){
                  prev = p1;
                  p1 = p1.next;
              }
              prev.next = p;
          }
          
          //p1 = p1.next
          
      }

      return headOne.value < headTwo.value ? headOne : headTwo;
  }
  
  // 					5p1 ->6 ->7
	// 					^
	// 1-> 3 -> 4pr 8p->9->10

const node1 = new Node(1);
node1.next = new Node(3);
node1.next.next = new Node(5);
node1.next.next.next = new Node(7);
//node1.next.next.next.next = new Node(7);

const node2 = new Node(2);
// node2.next = new Node(3);
// node2.next.next = new Node(4);
node2.next = new Node(4);
node2.next.next = new Node(6);
//node2.next.next.next = new Node(10);

// [1,3, 4, 5, 6, 7, 8, 9, 10]
// [1, 3, 5, 7] [2, 4, 6]
// [1, 2, 3, 4, 5, 6, 7]

const s = mergeLinkedLists(node1, node2);

console.log(JSON.stringify(s));

