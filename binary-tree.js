"use strict";

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */
  minDepthToIncompleteNode() {
    let completeNodes = 0;

    let toVisitQueue = [this];

    while (toVisitQueue.length > 0) {
      let current = toVisitQueue.shift();

      if (current.left === null || current.right === null) {

        return Math.floor(Math.log2(completeNodes)) + 2;

      } else {
        completeNodes += 1;
      }

      toVisitQueue.push(current.left);
      toVisitQueue.push(current.right);
    }

    return completeNodes;
  }

  /** maxDepth(): return the maximum depth from the invoking node -- that is,
   * the length of the longest path from the invoking node to a leaf. */
  maxDepth() {
    let currentDepth = 0;
    let maxDepth = 0;
    let branchResetCounter = 0;
    let toVisitStack = [this];

    while (toVisitStack.length > 0) {
      let current = toVisitStack.pop();
      currentDepth += 1;

      if (current.left === null && current.right === null) {
        maxDepth = Math.max(maxDepth, currentDepth);
        branchResetCounter += 1;
        currentDepth = branchResetCounter;
      }

      if (current.left !== null) toVisitStack.push(current.left);
      if (current.right !== null) toVisitStack.push(current.right);
    }

    return maxDepth;
  }

  /** minDepth(): return the minimum depth from the invoking node -- that is,
   * the length of the shortest path from the invoking node to a leaf. */
  minDepth() {

  }

  /** nextLarger(lowerBound): return the smallest value from the invoking node
   * that is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */

  // this is a stack or recursion problem; we'll use recursion

  minDepthToIncompleteNode() {
    if (this.root === null) return 0;
    return this.root.minDepthToIncompleteNode();

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  maxDepth() {

  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  minDepth() {

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * that is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
