// Implementacion de Weighted Graph
// Muy similar al otro, pero con algunas diferencias en los metodos
// Lo voy a usar para el Algoritmo de Dijkstra, por eso lo saco, porque los otros metodos capaz se rompen
class WeightedGraph {
	constructor() {
		// Usa un objeto porque en JS son una especie de Hash Maps
		this.adjacencyList = {};
	}

	addVertex(vertexName) {
		// Manejo basico de keys duplicadas
		if (!this.adjacencyList[vertexName])
			this.adjacencyList[vertexName] = [];
		else
			console.log("Ya existe esa key. Ingresa otra");
	}

	addEdge(vertex1, vertex2, weight) {
		// Reviso que esten ambos vertex
		if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
			console.log("Una de las keys no existe");
			return undefined;
		}

		// Agrego el edge, con relacion bidireccional
		// Undirected Graph
		// Weighted Graph, ya que le estoy dando un valor a los edges
		this.adjacencyList[vertex1].push({vertex:vertex2, weight});
		this.adjacencyList[vertex2].push({vertex:vertex1, weight});
	}

	shortestPathDijkstra(start, end) { // startNode, endNode
		// Usa la PriorityQueue hecha antes en el curso
		const nodes = new PriorityQueue(); // nodesQueue
		const distances = {};
		const previous = {};
		let path = []; // el camino final que voy a devolver
		let smallest; // smallestNode

		// Preparacion del estado inicial
		// Pongo en 0 la distancia del nodo inicial a si mismo, y en Infinito todos los demas ya que no se a que distancia estan
		// Los agrego a la queue con la misma configuracion
		for (let vertex in this.adjacencyList) {
			if (vertex === start) {
				distances[vertex] = 0;
				nodes.enqueue(vertex, 0);
			} else {
				distances[vertex] = Infinity;
				nodes.enqueue(vertex, Infinity);
			}
			// Lleno el objeto previous con todas keys nulls, ya que no se cual es el camino mas corto de un nodo a otro todavia
			previous[vertex] = null;
		}

		// Recorro siempre y cuando me quede algo por visitar
		while (nodes.values.length) {
			smallest = nodes.dequeue().value;

			if (smallest === end) {
				// Ya esta, buildear el path para devolver
				// Recorro previous y me armo mi objeto
				while (previous[smallest]) {
					path.push(smallest);
					smallest = previous[smallest];
				}
				break;
			}
			if (smallest || distances[smallest] !== Infinity) {
				for(let neighbor in this.adjacencyList[smallest]) {
					// Encontrar el siguiente nodo vecino
					let nextNode = this.adjacencyList[smallest][neighbor];
					// Calcular la distancia entre el nodo actual y el siguiente vecino
					let candidate = distances[smallest] + nextNode.weight;
					let nextNeighbor = nextNode.vertex;
					// Si este nuevo camino es mas corto que lo que tengo
					if (candidate < distances[nextNeighbor]) {
						// Guardo la distancia mas corta al vecino en mi objeto
						distances[nextNeighbor] = candidate;
						// Y guardo cual fue mi camino mas corto para llegar hasta ese nodo vecino
						previous[nextNeighbor] = smallest;
						// Enqueue con la nueva prioridad
						nodes.enqueue(nextNeighbor, candidate);
					}
				}
			}
		}
		// A mi path (que lo tengo al reves) le agrego el primer nodo, que no esta, y lo doy vuelta para que quede el camino bien armado
		return path.concat(smallest).reverse();
	}
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

console.log(graph.shortestPathDijkstra("A", "E"));