class Graph {
  constructor() {
    this.adjacencyList = new Map();
    this.keys = {};
  }

  buildGraph() {
    const row = 8;
    const column = 8;

    // put all vertices into the adjacency list
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        this.keys[`${i},${j}`] = [i, j];
        this.addVertex(this.keys[`${i},${j}`]);
      }
    }

    // put edges into each vertex
    this.adjacencyList.forEach((list, vertex) => {
      // find all the vertices that are connected to the given vertex and add them to the adjacent list of the given vertex
      let newCoordinate;
      for (let i = 0; i < 8; i++) {
        if (i === 0) {
          newCoordinate = [vertex[0] + 1, vertex[1] + 2];
          this.addEdge(newCoordinate, list);
        } else if (i === 1) {
          newCoordinate = [vertex[0] - 1, vertex[1] + 2];
          this.addEdge(newCoordinate, list);
        } else if (i === 2) {
          newCoordinate = [vertex[0] + 1, vertex[1] - 2];
          this.addEdge(newCoordinate, list);
        } else if (i === 3) {
          newCoordinate = [vertex[0] - 1, vertex[1] - 2];
          this.addEdge(newCoordinate, list);
        } else if (i === 4) {
          newCoordinate = [vertex[0] + 2, vertex[1] + 1];
          this.addEdge(newCoordinate, list);
        } else if (i === 5) {
          newCoordinate = [vertex[0] + 2, vertex[1] - 1];
          this.addEdge(newCoordinate, list);
        } else if (i === 6) {
          newCoordinate = [vertex[0] - 2, vertex[1] + 1];
          this.addEdge(newCoordinate, list);
        } else if (i === 7) {
          newCoordinate = [vertex[0] - 2, vertex[1] - 1];
          this.addEdge(newCoordinate, list);
        }
      }
    });
  }

  addEdge(coordinate, list) {
    if (coordinate.every((value) => value >= 0 && value < 8)) {
      list.push(coordinate);
    }
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  // use breadth-first search to find the shortest path
  findShortestPath(startCoordinate, endCoordinate) {
    const queue = [];
    // use to keep track of the parent of each node visited
    const parent = new Map();
    const visited = new Set();
    const path = [];
    queue.push(startCoordinate);

    while (queue.length > 0) {
      const currentCoordinate = queue.shift();

      const neighborCoordinates = this.adjacencyList.get(
        this.keys[`${currentCoordinate[0]},${currentCoordinate[1]}`]
      );

      // when the target vertex is found
      if (
        currentCoordinate.every(
          (value, index) => value === endCoordinate[index]
        )
      ) {
        // backtrack using the parent vertex mapping to construct the shortest path
        let parentVertex = parent.get(JSON.stringify(currentCoordinate));
        path.push(currentCoordinate);
        while (
          JSON.stringify(parentVertex) !== JSON.stringify(startCoordinate)
        ) {
          path.push(parentVertex);
          parentVertex = parent.get(JSON.stringify(parentVertex));
        }
        path.push(startCoordinate);
        path.reverse();
        return path;
      }

      // iterate through the neighbors and check if the vertex has been visited
      for (const neighbor of neighborCoordinates) {
        const neighborStr = JSON.stringify(neighbor);
        if (!visited.has(neighborStr)) {
          visited.add(neighborStr);
          queue.push(neighbor);
          // record the parent of the vertices that will be visited in the future
          parent.set(neighborStr, currentCoordinate);
        }
      }
    }
  }
}

export { Graph };
