def print_tree(tree)
	queue = [tree.root]
	current_level, next_level = 1 , 0
	until queue.empty?
		node = queue.shift
		current_level -= 1
		puts “#{node.value}”
		if node.left
			queue << node.left
			next_level += 1
		end
		if node.right
			queue << node.right
			next_level += 1
		end
		if current_level == 0
			puts “\n”
			current_level, next_level = next_level, current_level
		end
	end
end
