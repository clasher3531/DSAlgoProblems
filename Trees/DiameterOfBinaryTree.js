// Given a Binary Tree, find diameter of it.
// The diameter of a tree is the number of nodes on the longest path between two end nodes 
// in the tree.

// Problem Link : https://practice.geeksforgeeks.org/problems/diameter-of-binary-tree/1#

const height = function (root) {
    if(root === null){
        return 0
    }
    var left = this.height(root.left);
    var right = this.height(root.right);
    
    if(left > right){
        var height = left + 1;
    }else{
        var height = right + 1;
    }
    return height;
}

const diameter = function(root){
    if(root === null){
        return 0;
    }
    var left = height(root.left);
    var right = height(root.right);
    
    var ldiameter = diameter(root.left);
    var rdiameter = diameter(root.right);
    
    var d = Math.max(left + right + 1, Math.max(ldiameter,rdiameter));
    
    return d;
}

console.log(diameter);