class DirectedGraph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjList.has(vertex1)) {
      this.adjList.get(vertex1).push(vertex2);
    }
  }

  removeVertex(vertex) {
    if (!this.adjList.has(vertex)) {
      return;
    }

    for (let [key, value] of this.adjList) {
      const index = value.indexOf(vertex);
      if (index !== -1) {
        value.splice(index, 1);
      }
    }
    this.adjList.delete(vertex);
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjList.has(vertex1)) {
      return;
    }

    const index = this.adjList.get(vertex1).indexOf(vertex2);
    if (index !== -1) {
      this.adjList.get(vertex1).splice(index, 1);
    }
  }

  printGraph() {
    for (let [key, value] of this.adjList) {
      console.log(key + " => " + value);
    }
  }

  dfs(vertex) {
    const visited = new Set();
    const dfsHelper = (vertex) => {
      if (!visited.has(vertex)) {
        visited.add(vertex);
        console.log(vertex);
        for (let neighbor of this.adjList.get(vertex)) {
          if (!visited.has(neighbor)) {
            dfsHelper(neighbor);
          }
        }
      }
    };
    dfsHelper(vertex);
  }

  bfs(vertex) {
    const visited = new Set();
    const queue = [vertex];
    visited.add(vertex);
    console.log(vertex);
    while (queue.length > 0) {
      const vertex = queue.pop();
      const neighbors = this.adjList.get(vertex);
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          visited.add(neighbor);
          console.log(neighbor);
        }
      }
    }
  }
}

const graph2 = new DirectedGraph();
graph2.addVertex("A");
graph2.addVertex("B");
graph2.addVertex("C");
graph2.addVertex("D");
graph2.addVertex("E");
graph2.addVertex("F");
graph2.addEdge("A", "B");
graph2.addEdge("A", "C");
graph2.addEdge("B", "C");
graph2.addEdge("C", "D");
graph2.addEdge("D", "E");
graph2.addEdge("E", "A");
graph2.addEdge("E", "F");
graph2.addEdge("F", "A");

// graph2.removeVertex("A");
graph2.removeEdge("A", "");

console.log(graph2.adjList);
graph2.printGraph();
graph2.dfs("A");
graph2.bfs("A");
