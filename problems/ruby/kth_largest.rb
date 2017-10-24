def largest(node)
	until node.right.nil?
		node = node.right
	end
	node
end

def second_largest(node)
	current = node
	##don’t go in if we don’t have a current
while current
		##are we about to hit a max
		if current.right.nil? && current.left
			return largest(current.left)
		end

		##is there a rightmost element, are we ABOUT to hit a max, is it a max with no left
		if current.right && current.right.right.nil? && current.right.left.nil?
			return current
		end

		current = current.right
	end
end
