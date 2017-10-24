// 2. Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

// *
//  * Definition for singly-linked list.
 // * function ListNode(val) {
 // *     this.val = val;
 // *     this.next = null;
 // * }
// https://leetcode.com/submissions/detail/125150425/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 1h:30m, 97.22% runtime, 199ms.
var addTwoNumbers = function(l1, l2) {
    var firstListItem = l1;
    var otherListItem = l2;
    var remainder = 0;
    var itemToReturn = [];
    var sum = 0;
    while (firstListItem){
        if (otherListItem) {
            var sum = firstListItem.val + otherListItem.val + remainder;
            digit = (sum) % 10;
            remainder = sum > 9 ? Math.floor(sum / 10) : 0;
            var tempNext = firstListItem.next;
            var tempOther = otherListItem.next;
            itemToReturn.push(digit);
            firstListItem = tempNext;
            otherListItem = tempOther;
        } else {
            // this is much simpler here, we just keep adding to either firstNode or newNode
            var sum = firstListItem.val + remainder;
            digit = (sum) % 10;
            remainder = sum > 9 ? Math.floor(sum / 10) : 0;
            var tempNext = firstListItem.next;
            itemToReturn.push(digit);
            firstListItem = tempNext;
        }
    }
    while (otherListItem){
        var sum = otherListItem.val + remainder;
        digit = (sum) % 10;
        remainder = sum > 9 ? Math.floor(sum / 10) : 0;
        //this means we have more to add
        var tempNext = otherListItem.next;
        itemToReturn.push(digit);
        otherListItem = tempNext;
    }

    if (remainder !== 0) {
        itemToReturn.push(remainder);
    }

    return itemToReturn;
};

// linearruntime, constant memory;
