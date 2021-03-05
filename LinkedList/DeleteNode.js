// Write a function to delete a node in a singly-linked list. 
// You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.

// It is guaranteed that the node to be deleted is not a tail node in the list.

// Problem Link : https://leetcode.com/problems/delete-node-in-a-linked-list/

// just swapping the values and change the pointer
var deleteNode = function(node) {
    
    node.val = node.next.val;
    node.next = node.next.next;
};