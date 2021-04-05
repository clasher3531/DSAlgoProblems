// Implement Queue using Stacks
// Implement a first in first out (FIFO) queue using only two stacks. 
// The implemented queue should support all the functions of a normal queue 
// (push, peek, pop, and empty).

// Problem Link : https://leetcode.com/problems/implement-queue-using-stacks/

class MyQueue {
    constructor(){
        this.first = [];
        this.second = [];
    }
    push(x){
        var length = this.second.length;
        for(var i = 0;i<length;i++){
            this.first.push(this.second.pop());
        }
        this.first.push(x);
        return this;
    }
    pop(){
        var length = this.first.length;
        for(var i = 0;i<length;i++){
            this.second.push(this.first.pop());
        }
        return this.second.pop();
        
    }
    peek(){
        if(this.first.length > 0){
            return this.first[0]
        }
        return this.second[this.second.length - 1];
    }
    empty(){
        if(this.first.length === 0 && this.second.length === 0){
            return true;
        }
        return false;
    }
}
