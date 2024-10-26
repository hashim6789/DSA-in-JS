class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjList.get(vertex1).push(vertex2);
    this.adjList.get(vertex2).push(vertex1);
  }

  displayGraph() {
    for (let [vertex, edges] of this.adjList) {
      console.log(vertex + "->" + edges);
    }
  }

  dfs(vertex) {
    let visited = new Set();
    const dfsHelper = (vertex) => {
      if (!visited.has(vertex)) {
        visited.add(vertex);
        console.log(vertex);
        const neighbors = this.adjList.get(vertex);
        for (let neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            dfsHelper(neighbor);
          }
        }
      }
    };
    dfsHelper(vertex);
  }

  removeVertex(vertex) {
    if (!this.adjList.has(vertex)) {
      return;
    }

    const neighbors = this.adjList.get(vertex);
    for (let neighbor of neighbors) {
      this.adjList
        .get(neighbor)
        .splice(this.adjList.get(neighbor).indexOf(vertex), 1);
    }
    this.adjList.delete(vertex);
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjList.has(vertex1)) {
      this.adjList
        .get(vertex1)
        .splice(this.adjList.get(vertex1).indexOf(vertex2), 1);
    }
    if (this.adjList.has(vertex2)) {
      this.adjList
        .get(vertex2)
        .splice(this.adjList.get(vertex2).indexOf(vertex1), 1);
    }
  }

  bfs(vertex) {
    const visited = new Set();
    const queue = [vertex];
    visited.add(vertex);
    while (queue.length > 0) {
      const vertex = queue.shift();
      console.log(vertex);
      const neighbors = this.adjList.get(vertex);
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
}

const graph1 = new Graph();
graph1.addVertex("A");
graph1.addVertex("B");
graph1.addVertex("C");
graph1.addVertex("D");

graph1.addEdge("A", "B");
graph1.addEdge("B", "C");
graph1.addEdge("C", "D");
graph1.addEdge("D", "A");

// graph1.removeVertex("A");
// graph1.removeVertex("C");

graph1.removeEdge("A", "B");
graph1.removeEdge("D", "B");

graph1.displayGraph();

console.log(graph1.adjList);

// graph1.dfs("B");
graph1.bfs("B");
