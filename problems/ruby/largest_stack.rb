class Stack
	def initialize
		self.store = []
	end

	def push(item)
		self.store << item
	end

	def pop
		return "no elemenets" if self.store.empty?
		self.store.pop unless self.store.empty?
	end

	def peek
		return "no elements" if self.store.empty?
	end

	protected
	attr_accessor :store

end


class MaxStack < Stack

	def initialize
		self.max_stack = []
		self.max = nil
		super
	end

	def get_max
		self.max = (self.max ? self.max : self.max_stack.last)
	end

	def push(item)
		if self.max.nil? || item > self.max
			self.max_stack << item
			self.max = item
		end
		super
	end

	def pop
		self.max_stack.pop
		self.max = nil
		super
	end


	protected
	attr_accessor :max, :max_stack
end
