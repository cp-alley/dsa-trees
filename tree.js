"use strict";

/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  /** sumValues(): add up all values of invoking node and its children.
   * Returns sum as an integer. */
  sumValues() {
    let total = 0;
    let toVisitStack = [this];

    while(toVisitStack.length > 0) {
      let current = toVisitStack.pop();

      total += current.val;

      for (let child of current.children) {
        toVisitStack.push(child);
      }
    }

    return total;
  }

  /** countEvens(): starting from the invoking node and moving through its
   * children, count how many nodes have even values. Returns that count as
   * an integer. */
  countEvens() {
    let evensTotal = 0;
    let toVisitQueue = [this];

    while (toVisitQueue.length > 0) {
      let current = toVisitQueue.shift();

      if (current.val % 2 === 0) evensTotal += 1;

      for (let child of current.children) {
        toVisitQueue.push(child);
      }
    }

    return evensTotal;
  }

  /** numGreater(lowerBound): starting from the invoking node and moving through
   * its children, return a count of the number of nodes whose value is greater
   * than lowerBound. */
  numGreater(lowerBound){
    let greaterTotal = 0;
    let toVisitStack = [this];

    while (toVisitStack.length > 0) {
      let current = toVisitStack.pop();

      if (current.val > lowerBound) greaterTotal += 1;

      for (let child of current.children) {
        toVisitStack.push(child);
      }
    }

    return greaterTotal;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all values in the tree. */
  sumValues() {
    if (this.root === null) return 0;
    return this.root.sumValues();
  }

  /** countEvens(): count all nodes in the tree that have even values. */
  countEvens() {
    if (this.root === null) return 0;
    return this.root.countEvens();
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    if (this.root === null) return 0;
    return this.root.numGreater(lowerBound);
  }
}

module.exports = { Tree, TreeNode };
