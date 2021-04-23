class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    insert(value){
        var newNode = new Node(value)
        if(this.root === null){
            this.root = newNode;
        }else{
            var currentNode = this.root
            while(true){
                if(value < currentNode.value){
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }else{
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value){
        if(!this.root){
            return false
        }else{
            var currentNode = this.root;
            while(currentNode){
                if(value === currentNode.value){
                    return currentNode;
                }
                else if(value < currentNode.value){
                    currentNode = currentNode.left;
                }else{
                    currentNode = currentNode.right;
                }
            }
            return false;
        }
    }

    remove(value){
        if(!this.root){
            return false;
        }

        var currentNode = this.root;
        var parentNode = null;

        while(currentNode){

            if(value < currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.left;
            }else if(value > currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.right;
            }else if(value === currentNode.value){
                // We find our node to be removed

                // option 1 : currentNode has no right child
                if(currentNode.right === null){
                    if(parentNode === null){
                        this.root = currentNode.left;
                    }else{
                        if(currentNode.left.value > parentNode.value){
                            parentNode.right = currentNode.left;
                        }else if(currentNode.left.value < parentNode.value){
                            parentNode.left = currentNode.left;
                        }
                    }
                }
                // option 2 : currentNode has right child which doesn't have left child
                else if(currentNode.right.left === null){
                    if(parentNode === null){
                        this.root = currentNode.right;
                    }else{
                        if(currentNode.right.value < parentNode.value){
                            parentNode.left = currentNode.right;
                        }else if(currentNode.right.value > parentNode.value){
                            parentNode.right = currentNode.right;
                        }
                    }
                }
                // option 3 : currentNode has right child which also have left child
                else{
                    //find the Right child's left most child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    
                    while(leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }
                    
                    //Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if(parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if(currentNode.value < parentNode.value) {
                        parentNode.left = leftmost;
                        } else if(currentNode.value > parentNode.value) {
                        parentNode.right = leftmost;
                        }
                    }
                }
                return true;
            }
        }
    }
    // Iterative Approach of BFS
    breadthFirstSearch(){
        var currentNode = this.root;
        var queue = [];
        var result = [];
        queue.push(currentNode);
        while(queue.length > 0){
            currentNode = queue.shift();
            result.push(currentNode.value);
            if(currentNode.left){
                queue.push(currentNode.left);
            }
            if(currentNode.right){
                queue.push(currentNode.right);
            }
        }
        return result;
    }
    // Recursive Approach of BFS
    breadthFirstSearchR(queue,list){
        if(queue.left === 0){
            return list
        }
        var currentNode = queue.shift();
        list.push(currentNode);
        if(currentNode.left){
            queue.push(currentNode.left);
        }
        if(currentNode.right){
            queue.push(currentNode.right);
        }
        return this.breadthFirstSearch(queue,list);
    }
    // Depth First Search
    // Inorder
    DFSInorder(){
        return this.traverseInOrder(this.root,[]);
    }
    // Preorder
    DFSPreorder(){
        return this.traversePreOrder(this.root,[]);
    }
    // Postorder
    DFSPostorder(){
        return this.traversePostOrder(this.root,[]);
    }

    traverseInOrder(node,list){
        if(node.left){
            this.traverseInOrder(node.left,list)
        }
        list.push(node.value);
        if(node.right){
            this.traverseInOrder(node.right,list)
        }
        return list
    }
    traversePreOrder(node,list){
        list.push(node.value);
        if(node.left){
            this.traversePreOrder(node.left,list)
        }
        if(node.right){
            this.traversePreOrder(node.right,list)
        }
        return list
    }
    traversePostOrder(node,list){
        if(node.left){
            this.traversePostOrder(node.left,list)
        }
        if(node.right){
            this.traversePostOrder(node.right,list)
        }
        list.push(node.value);
        return list
    }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
// console.log(tree.breadthFirstSearch());
// console.log(tree.breadthFirstSearchR([tree.root],[]));
console.log(tree.DFSInorder());
console.log(tree.DFSPreorder());
console.log(tree.DFSPostorder());

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}