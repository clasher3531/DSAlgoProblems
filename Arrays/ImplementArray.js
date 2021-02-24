class myArray {

    constructor() {

        this.length = 0;
        this.array = {};
    }
    get (index){

        return this.array[index];
    }
    push (element){

        this.array[this.length] = element;
        this.length++;
    }
    pop (){

        delete this.array[this.length-1];
    }
    add (index,element){

        for (let i = this.length-1; i >= index; i--) {
            this.array[i+1] = this.array[i];
            
        }
        this.array[index] = element;
        this.length++;
    }
    remove(index){

        for (let i = index; i < this.length-1; i++) {
            this.array[i] = this.array[i+1];  
        }
        delete this.array[this.length-1];
        this.length--;
    }
    
}

var Array = new myArray();
Array.push(3);
Array.push(5);
Array.push(1);
console.log(Array);