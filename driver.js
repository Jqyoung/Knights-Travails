import { Graph } from "./graph.js";

const knightGraph = new Graph();
knightGraph.buildGraph();

function knightMoves(startSquare, endSquare) {
  const shortestPath = knightGraph.findShortestPath(startSquare, endSquare);
  const numberOfMoves = shortestPath.length - 1;

  // output the result
  console.log(`You made it in ${numberOfMoves} moves! Here's your path: `);
  shortestPath.forEach((square) => console.log(square));
}

// testing by calling the function that output the shortest path
knightMoves([3, 3], [4, 3]);
knightMoves([0, 0], [3, 3]);
knightMoves([0, 0], [1, 2]);
