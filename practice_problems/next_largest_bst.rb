def next_largest(node)
right_node = node.right
parent_node = node.parent
return right_node if right_node && right_node.left.nil?
while right_node.left
  right_node = right_node.left
end

return right_node if right_node
until parent_node.parent.nil? || parent_node.val > node.val
  parent_node = parent_node.parent
end

return parent_node

end
