class Graph {

    // Constructor
    constructor(v) {
        this.V = v;
        this.adj = new Array(v);
        for (let i = 0; i < v; i++)
            this.adj[i] = [];
    }

    // Function to add an edge into the graph
    addEdge(v, w) {

        // Add w to v's list.
        this.adj[v].push(w);
    }
    BFS(value) {

        let visited = new Array(this.V);
        for (let i = 0; i < this.V; i++)
            visited[i] = false;

        let queue = [];
        let result = [];

        visited[value] = true;
        queue.push(value);
        result.push(value)

        while (queue.length > 0) {
            value = queue[0];
            queue.shift();

            this.adj[value].forEach((adjacent, i) => {
                if (!visited[adjacent]) {
                    visited[adjacent] = true;
                    queue.push(adjacent);
                }
            });
        }
        return result;
    }
}



