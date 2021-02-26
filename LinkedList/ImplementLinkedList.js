// Here I Implement the SinglyLinkedList 

// LinkedList is basically a list having each node contains two type of data, one is it's value and other one 
// is the address of the next node.
// e.g 10 (value)
//     8324 (address of next node) -------> 5 (value)
//                                         8345 (address of next node) ---------> 16(value)
//                                                                                null --------->(end of list)
// Above list looks like this : 10 ---> 5 ---> 16 ---> null
//                             Head           Tail
// Here the pointer points to the next data, Pointer is basically a reference that points the data into the
// memory
// Firstly Let's understand about the flow

// myLinkedList {
//     head : {                            Head is the first node in list which contains two type of data
//         value : 10,                     one is it's value
//         next : {                        another one is the pointer which points to the next node
//             value : 5,                  value of next data
//             next : {                    pointer to the next node
//                 value : 16,             value of next next data
//                 next : null             last node of the list points to the null because nothing after this
//             }
//         }
//     }
// };

// Now we are ready for implementing our LinkedList

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    constructor(value){
        // At starting there is only one node in the list which is our head 
        // that's why we give next as null because it is first and last node
        // and also we give tail = head
        // and length as 1
        this.head = {
            value : value,
            next : null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value){

        // creating the new node
        var newNode = new Node(value);

        // we have the last element as the tail so set next as our new node 
        // and updating tail and length also
        this.tail.next = newNode
        this.tail = newNode;
        this.length++;
        return this
    }
    prepend(value){

        // creating the new node
        var newNode = new Node(value);

        // setting our previous head next to our new Node
        // And Making new Node as our new head
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this
    }
    printList(){

        var array = [];
        var currentNode = this.head;
        // looping all over the list and pushing it's value to the array
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next
        }
        console.log(array);
    }
    insert(index, value){

        // creating the new node
        var newNode = new Node(value);

        // if index=0 it means we want to add our new node at the starting
        // so we directly use our method called prepend
        if(index===0){
            this.prepend(value);
        }
        // if index is greater than our length of the list then we simply 
        // add our node at the last of the list by using our method called append
        else if(index >= this.length){
            this.append(value);
        }
        // in this case we basically traverse upto the index getting the node previous to the index and
        // next to the index and then adding new node b/w those two nodes.
        else{
            var currentNode = this.head;
            for(let i = 1;i<index;i++){
                currentNode = currentNode.next;
            }
            var nextNode = currentNode.next;
            currentNode.next = newNode;
            newNode.next = nextNode;
            this.length++;
        }
        return this;
       
    }
    remove(index){
        // if index = 0 we basically remove first node from the list
        // and setting second node as the head
        if(index===0){
            var deleteNode = this.head;
            this.head = deleteNode.next;
            deleteNode.next = null;
            this.length--;
        }
        else if(index===this.length-1){
            var currentNode = this.head;
            for(let i = 1;i<index;i++){
                currentNode = currentNode .next;
            }
            var deleteNode = currentNode.next;
            currentNode.next = deleteNode.next;
            deleteNode.next = null;
            this.tail = currentNode;
            this.length--;
        }
        // otherwise we traverse upto the index-1 and then setting our index -1 node with 
        // the index + 1 node.
        else{
            var currentNode = this.head;
            for(let i = 1;i<index;i++){
                currentNode = currentNode .next;
            }
            var deleteNode = currentNode.next;
            currentNode.next = deleteNode.next;
            deleteNode.next = null;
            this.length--;
        }
        return this;
    }
    // Reversing linkedList
    reverse(){

        //O(N^2) approach
        // var currentNode = this.head;
        // var count = 2;
        // while(currentNode.next !== null){
        //     this.prepend(currentNode.next.value);
        //     this.remove(count);
        //     count++;
        // }

        //O(N) approach
        if (!this.head.next) {
            return this.head;
          }
          let first = this.head;
          this.tail = this.head;
          let second = first.next;
      
          while(second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
          }
      
          this.head.next = null;
          this.head = first;
          return this
    }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.remove(3);
myLinkedList.printList();
myLinkedList.reverse();
myLinkedList.printList();
