# Knights-Travails

From [The Odin Project curriculum](https://www.theodinproject.com/lessons/javascript-knights-travails), This project uses a graph data structure and the Breadth First Search algorithm to find the shortest path from a starting square to a destination square for a knight on a chessboard.

![output image](/img/screenshot01.png)
![output image 02](/img/screenshot02.png)

## What I learned

- The concept of a graph data structure as well as its implementation using adjacency list and adjacency matrix.
- The conditions under which a specific graph implementation should be selected. In this project, a adjacency list was chosen for its space efficiency and speed when traversing the edges connected to a given vertex.
- Using Breadth First Search(BFS) algorithm to find the shortest path between two points by searching vertices one layer at a time. it uses a queue to manage the unvisited neighboring vertices of the vertex that is currently being visited. a Set data structure keeps track of visited vertices to prevent infinite traversal. Additionally, a Map data structure tracks the parent vertex of each neighboring vertices, aiding in path reconstruction upon reaching the target vertex.
- Map and Set data structure, a Map functions like an object but supports keys of any type, a Set resembles an array but only allows unique values to be stored within it.

## Ideas for the future

Create a fully playable chess game with the ability to play against an ai as well as another human player
