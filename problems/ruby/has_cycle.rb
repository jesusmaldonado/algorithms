def has_cycle?(node)
	current = node
	previous = nil

	until current == previous || current.nil?
		previous = current
		current = current.next
	end
!!current
end


##in this case, the graph is directed s.t. a node will return an array


require ‘set’
def has_cycle_directed_graph?(node)
	seen = Set.new
	children = node.next

	children.each do |child|
		return false if children.empty?
		return true if seen.include?(child)
		seen << child
		children += child.next
	end
	nil
end
