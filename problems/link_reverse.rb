

##if we have a head of a linked list then we can reverse by walking through the list and
##unless the node we are looking at has no next neighbor, then we set each prior value to ##each other

def reverse_list(head)
##start with the head
	raise “no items in list” if head.nil?
	node = head

	raise “only items” if node.next.nil?

	child = node.next

	until child.next.nil?
		#set the child’s element to be the prior element
			child.next = node
			#walk down
			node = node.next
	child = node.next
	end

	child.next = node
		head.next = nil
	end

end


-
#head -> 1
#head <- 1
#X-->O-->O

#X<--O<--O
