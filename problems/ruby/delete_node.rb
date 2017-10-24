##this is for a singly-linked list, where
##ruby is a garbage-collected language, which means that we don't have to manually free
##up the mmeory
##O(1) memory


def delete_node(node)
	##if there is no next node
	if node.next
		neighbor = node.next
		node.value = neighbor.value
		node.next = neighbor.next
	else
		node = nil
	end
end
