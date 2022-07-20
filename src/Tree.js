import React from "react";
import "./tree.css";
import { TreeViz } from "./tree-visualizer";
import _ from "lodash";

class Tree {
  // code goes here
  constructor() {
    this.root = null;
  }
  add(value) {
    // some logic around if this is the root
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      let current = this.root;
      while (true) {
        if (current.value > value) {
          // go left
          if (current.left) {
            current = current.left;
          } else {
            current.left = new Node(value);
            break;
          }
        } else {
          // go right
          if (current.right) {
            current = current.right;
          } else {
            current.right = new Node(value);
            break;
          }
        }
      }
    }
    return this;
  }
  toObject() {
    return this.root;
  }
}

// you might consider using a Node class too
class Node {
  // code maybe goes here
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default function TreeComponent() {
  // const nums = _.shuffle(_.range(10));
  // adding 
  const nums = _.range(100);
  const tree = new Tree();
  nums.map((num) => tree.add(num));
  const objs = tree.toObject();
  return <TreeViz root={objs} />;
}