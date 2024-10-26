class Graph {
  constructor() {
    this.graph = new Map();
  }

  insert(vertex) {
    if (!this.graph.has(vertex)) {
      this.graph.set(vertex, []);
    }
  }

  insertEdge(vertex1, vertex2) {
    if (this.graph.has(vertex1)) {
      this.graph.get(vertex1).push(vertex2);
    }
  }
  remove(vertex) {
    if (!this.graph.has(vertex)) {
      return;
    }

    for (let [key, value] of this.graph) {
      const index = value.indexOf(vertex);
      console.log(object)
      if (index !== -1) {
        value.splice(index, 1);
      }
    }
    this.graph.delete(vertex);
  }
}

const g = new Graph();
g.insert("A");
g.insert("B");
g.insert("C");
g.insert("D");
g.remove("B");
g.insertEdge("A", "B");
g.insertEdge("C", "B");
g.insertEdge("D", "B");
console.log(g.graph);
