require_relative "./graph"
require 'pp'
def topological_sort(vertices)
	in_edge_counts = {}
	queue, sorted_vertices = [], []

	vertices.each do |vertex|
		vertex
		in_edge_counts[vertex] = vertex.in_edges.count
		queue << vertex if vertex.in_edges.empty?
	end

	until queue.empty?
		vertex = queue.shift
		sorted_vertices << vertex

		vertex.out_edges.each do |outer_edge|
			##change the in count of any outgoing vertices
			to_vertex = outer_edge.to_vertex
			in_edge_counts[to_vertex] -= 1
			queue << to_vertex if in_edge_counts[to_vertex] == 0
		end
	end
	sorted_vertices
end

vertices = [v1 = Vertex.new("hey"), v2 = Vertex.new("hi"), v3 = Vertex.new("sup"), v4 = Vertex.new("hello there bby")]
Edge.new(v1, v3)
Edge.new(v1, v2)
Edge.new(v2, v4)
Edge.new(v3, v4)

topological_sort(vertices.shuffle).each do |vertex|
	p vertex.value
end
