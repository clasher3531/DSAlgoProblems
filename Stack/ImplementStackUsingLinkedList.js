class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top.value;
    }

    push(value){
        var node  = new Node(value);
        if(this.length===0){
            this.bottom = node;
            this.top = node
        }else{
            var holdingPointer = this.top;
            this.top = node;
            this.top.next = holdingPointer;
        } 
        this.length+=1;
        return this;
    }

    pop(){
        if(!this.top){
            return null;
        }
        if(this.bottom === this.top){
            this.bottom = null;
        }
        var currentNode = this.top
        this.top = currentNode.next
        this.length--;
        return this;
    }

    isEmpty(){
        if(this.length===0){
            return true
        }
        return false;
    }

    printStack(){
        var currentNode = this.top;
        while(currentNode!==null){
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}

var stack = new Stack();
stack.push(4);
stack.push(5);
stack.pop();
stack.printStack();
