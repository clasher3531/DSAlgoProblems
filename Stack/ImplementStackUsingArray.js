class Stack {
    constructor(){
        this.container = [];
    }

    peek(){
        return this.container[this.container.length-1];
    }

    push(value){
        this.container.push(value);
        return this;
    }

    pop(){
        if(this.container.length===0){
            return null;
        }
        this.container.pop();
        return this;
    }

    printStack(){
        console.log(this.container);
    }
}

var stack = new Stack();
stack.push(5);
stack.push(1);
stack.pop();
stack.printStack();