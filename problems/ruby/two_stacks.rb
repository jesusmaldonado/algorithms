class ShittyStacks
	def initialize(size)
		self.store = Array.new(size)
		self.first_index = 0
		self.second_index = size - 1
	end

	def push1(el)
		raise “array1 overflows” if first_index == second_index
		self.store[first_index] = el
first_index += 1
	end

	def push2(el)
		raise “array2 overflows” if first_index == second_index
		self.store[second_index] = el
		second_index -= 1
	end

	def pop1
		raise “no elements in stack1” if first_index = self.store.size
	self.store.delete_at(first_index)
		first_index -= 1
	end

	def peek1
		raise “no elements in stack 1” if self.store[first_index].nil?
		self.store[first_index]
	end

	def peek2
		raise “no elements in stack 2” if self.store[first_index].nil?
		self.store[second_index]
end
	def pop2
		raise “no elements in stack 2” if second_index = self.store.size
		self.store.delete_at(second_index)
		second_index += 1
	end



	protected
	attr_accessor :store
	attr_reader :first_index, :second_index
end
