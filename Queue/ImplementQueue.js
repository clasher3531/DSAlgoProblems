class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek(){
        return this.first.value;
    }

    enqueue(value){
        var newNode = new Node(value)
        if(this.first===null){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this
    }

    dequeue(){
        if(this.first === null){
            return '';
        }if(this.first === this.last){
            this.last = null;
        }
        var newFirst = this.first.next;
        this.first.next = null;
        this.first = newFirst;
        this.length--;
        return this;
    }
}

var queue = new Queue();
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(1);
queue.dequeue();
console.log(queue);