require_relative "static_array"
##implementation taken from aA

class DynamicArray

	def initialize
		@store, @capacity, @length = StaticArray.new(8), 8, 8
	end


	def [](index)
		check_index(index)
		self.store[index]
	end

	def []=(index)
    check_index(index)
		self.store[index] = value
	end
	#0(1)
	def pop
		raise "index out of bounds" unless (length > 0)
		val, self[length - 1] = self[length - 1], nil
		self.length -= 1
    val
	end

	#O(n) at worst
	def push(val)
		resize! if length == capacity

		self.length += 1
		self[length - 1] = val

		nil
	end

	#O(n)
	def shift
		raise "index out of bounds" if (length == 0)
		val = self[0]
    self.length -= 1
		(1..self.length).each { |i| self [i - 1] = self[i] }
    self.length -= 1
    val
	end

	#O(n)
	def unshift(val)
		resize! if length == capacity
		self.length += 1
    (length - 2).downto(0).each { |i| self[i + 1] = self[i] }
    self[0] = val
		nil
	end


	protected
  attr_accessor :capacity, :store
  attr_writer :length

	def check_index(index)
		raise "index out of bounds" unless index >= 0 && index < length
	end

	def resize!
		##grow the array by two
		new_capacity = capacity * 2
	  new_store = StaticArray.new(new_capacity)
    length.times { |i| new_store[i] = self[i] }
    self.capacity = new_capacity
	  self.store = new_store
	end
end
