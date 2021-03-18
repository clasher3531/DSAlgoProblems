// Given the heads of two singly linked-lists headA and headB, return the node at which 
// the two lists intersect. If the two linked lists have no intersection at all, return null.

// Problem Link : https://leetcode.com/problems/intersection-of-two-linked-lists/

// In this we are basically created two linked list A,B like A+B and B+A and then finding the 
// common point between them
var getIntersectionNode = function(headA, headB) {
    let a = headA, b = headB
    while (a !== b) {
        a = !a ? headB : a.next
        b = !b ? headA : b.next
    }
    return a
};
