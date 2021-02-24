// Here I implemented HashMap

class HashMap {

    constructor (size){

        this.data = new Array(size);
    }

    // This function basically generates the hash value for a particular key.
    _hash(key) {

        let hash = 0;
        for (let i =0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    // set the key and value pair into the hash table
    set(key,value) {

        let hash = this._hash(key);
        if(!this.data[hash]){
            this.data[hash] = [];
        }
        this.data[hash].push([key,value]);
    }

    // get the value for a particular key from the hash table
    get(key){

        let hash = this._hash(key);
        let currentBucket = this.data[hash];
        if(currentBucket){
            for (let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0]===key){
                    return currentBucket[i][1]
                }
            }
        }
        return undefined;
    }

    keys(){

        let keysArray = [];
        if(this.data){
            for (let i = 0; i < this.data.length; i++) {
                // if it's not an empty memory cell
                if (this.data[i] && this.data[i].length) {
                  // but also loop through all the potential collisions
                  if (this.data.length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                      keysArray.push(this.data[i][j][0])
                    }
                  } else {
                    keysArray.push(this.data[i][0][0])
                  } 
                }
            }
        }
        return keysArray
    }
}

const Map = new HashMap(25);
Map.set('grapes',500);
Map.set('apples',64);
Map.set('oranges',8);
Map.set('mango',100);
console.log(Map.keys());