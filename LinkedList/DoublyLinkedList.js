class Node {

    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {

    constructor(value){
        this.head = {
            value : value,
            next : null,
            prev : null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value){

        // creating the new node
        var newNode = new Node(value);

        // we have the last element as the tail so set next as our new node 
        // and updating tail and length also
        newNode.prev = this.tail;
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
        this.head.prev = newNode;
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
            newNode.prev = currentNode;
            newNode.next = nextNode;
            nextNode.prev = newNode;
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
            this.head.prev = null;
            deleteNode.next = null;
            deleteNode.prev = null;
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
            deleteNode.prev = null;
            this.tail = currentNode
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
            deleteNode.next.prev = currentNode;
            deleteNode.next = null;
            deleteNode.prev = null;
            this.length--;
        }
        return this;
    }

}
let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(1,99);
myLinkedList.insert(4,32);
myLinkedList.printList();
myLinkedList.remove(5);
myLinkedList.printList();
console.log(myLinkedList)