// Implementacion de un Undirected Graph
class Graph {
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

		// No se que deberia retornar?
	}

	addEdge(vertex1, vertex2) {
		// Reviso que esten ambos vertex
		if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
			console.log("Una de las keys no existe");
			return undefined;
		}

		// Agrego el edge, con relacion bidireccional
		// Undirected Graph
		this.adjacencyList[vertex1].push(vertex2);
		this.adjacencyList[vertex2].push(vertex1);

		// No se que deberia retornar?
		return 1;
	}

	removeEdge(vertex1, vertex2) {
		// Reviso que esten ambos vertex
		if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
			console.log("Una de las keys no existe");
			return undefined;
		}

		// Consigo el index en una variable separada por legibilidad
		let indexVertex1 = this.adjacencyList[vertex1].indexOf(vertex2);
		let indexVertex2 = this.adjacencyList[vertex2].indexOf(vertex1);

		this.adjacencyList[vertex1].splice(indexVertex1, 1);
		this.adjacencyList[vertex2].splice(indexVertex2, 1);

		// Tambien se puede hacer con filter
		/*this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
			v => v != vertex2
		);

		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
			v => v != vertex1
		);*/

		// No se que deberia retornar?
		return 1;
	}

	removeVertex(vertex) {
		// Si no existe el vertex, salgo
		if (!this.adjacencyList[vertex]) {
			console.log("No existe la key que se quiere eliminar");
			return -1;
		}

		// Recorro todo el array de ese vertex y llamo a removeEdge para borrar todas las conexiones del vertex
		for(let i = 0; i < this.adjacencyList[vertex].length; i++) {
			this.removeEdge(vertex, this.adjacencyList[vertex][i]);
		}

		// Elimino la propiedad de mi objeto
		delete this.adjacencyList[vertex];

		// No se que deberia retornar?
		return 1;
	}

	// Se haria con un Stack
	depthFirstSearchRecursive(startVertex) {
		const result = [];
		const visitedVertices = {};
		const adjacencyList = this.adjacencyList;

		(function dfs(vertex) {
			if (!vertex) return null;

			visitedVertices[vertex] = true;

			result.push(vertex);

			adjacencyList[vertex].forEach(neighbor => {
				if (!visitedVertices[neighbor]) return dfs(neighbor);
			})

		})(startVertex);

		return result;
	}

	// Se haria con un Stack
	depthFirstSearchIterative(startVertex) {
		const result = [];
		const visitedVertices = {};
		const stack = [startVertex];
		let currentVertex;

		visitedVertices[startVertex] = true;

		while(stack.length) { 
			currentVertex = stack.pop();

			result.push(currentVertex);

			this.adjacencyList[currentVertex].forEach(neighbor => {
				if (!visitedVertices[neighbor]) {
					visitedVertices[neighbor] = true;
					stack.push(neighbor);
				}
			});
		}

		return result;
	}

	// Se haria con una Queue
	breadthFirstSearch(startVertex) {
		const queue = [startVertex];
		const result = [];
		const visitedVertices = {};
		let currentVertex;

		visitedVertices[startVertex] = true;

		while (queue.length) {
			currentVertex = queue.shift();
			result.push(currentVertex);

			this.adjacencyList[currentVertex].forEach(neighbor => {
				if (!visitedVertices[neighbor]) {
					visitedVertices[neighbor] = true;
					queue.push(neighbor);
				}
			});
		}

		return result;
	}
}

let graph = new Graph();
// graph.addVertex("Cordoba");
// graph.addVertex("Rosario");
// graph.addVertex("BuenosAires");

// graph.addEdge("Cordoba", "Rosario");
// graph.addEdge("Cordoba", "BuenosAires");

// console.log(graph);

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "E")
graph.addEdge("D", "E")
graph.addEdge("D", "F")
graph.addEdge("E", "F")