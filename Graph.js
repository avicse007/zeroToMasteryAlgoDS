class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacencyList = {};
  }
  addVertex(node) {
    this.adjacencyList[node] = [];
    this.numberOfNodes++;
  }
  addEdge(node1, node2) {
    this.adjacencyList[node1].push(node2);
    this.adjacencyList[node2].push(node1);
  }
  showConnections() {
    const keys = Object.keys(this.adjacencyList);
    keys.forEach((key) => {
      console.log(`${key}:==> ${this.adjacencyList[key].join(",")}`);
    });
  }

  dfs(startNode, result = [], visited = new Set()) {
    if (!visited.has(startNode)) {
      result.push(startNode);
      visited.add(startNode);

      this.adjacencyList[startNode].forEach((neighbor) => {
        this.dfs(neighbor, result, visited);
      });
    }
    return result;
  }

  bfs(list, queue, visited) {
    if (queue.length === 0) return list;
    let node = queue.shift();
    if (!visited.has(node)) list.push(node);
    visited.add(node);
    this.adjacencyList[node].forEach((ele) => {
      if (!visited.has(ele)) {
        queue.push(ele);
      }
    });
    return this.bfs(list, queue, visited);
  }
}
/*
0----2
|     \
        4
|     /
1----3
*/

const graph = new Graph();
graph.addVertex("0");
graph.addVertex("1");
graph.addVertex("2");
graph.addVertex("3");
graph.addVertex("4");

graph.addEdge("0", "1");
graph.addEdge("0", "2");
graph.addEdge("3", "4");
graph.addEdge("2", "4");
graph.addEdge("1", "3");

graph.showConnections();
let bfsTraversalList = graph.bfs(
  [],
  [Object.keys(graph.adjacencyList)[0]],
  new Set()
);
console.log(`The BFS traversal of the Graph is `, bfsTraversalList);
let dfsTraversalList = graph.dfs(
  Object.keys(graph.adjacencyList)[0],
  [],
  new Set()
);
console.log(`The DFS traversal of the Graph is `, dfsTraversalList);
