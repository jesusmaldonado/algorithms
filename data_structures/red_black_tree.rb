require_relative "bst"
class RBNode < BSTNode

	def initialize(value)
		self.color = "RED"
		super
	end

end

class RBT < BST

	def initialize
		self.root = nil
	end

	

end
