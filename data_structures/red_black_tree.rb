require_relative "bst"
class RBNode < BSTNode

	def initialize(value)
		self.color = "RED"
		super
	end
