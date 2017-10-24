def bst?(T)
	root = T.root
	nodes = [[root, nil, nil]]
	until nodes.empty?
		node, lower_bound, upper_bound = nodes.pop

		if (lower_bound && node.value < lower_bound) || (upper_bound && node.value > upper_bound)
			return false
		end

		if node.left
			nodes << [node.left, lower_bound, node.value]
		elsif node.right
			nodes << [node.right, node.value, upper_bound]
		end
	end
	true
end
