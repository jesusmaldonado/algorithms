require_relative "static_array"


class CircularBuffer

	attr_reader :length

	def initialize
		self.store, self.capacity = StaticArray.new(8),8
		self.start_idx, self.length = 0, 0
	end


	def [](index)
		check_index(index)
		store[(start_idx + index) % capacity]
	end

	def []=(index, val)
		check_index(index)
		store[(start_idx + index) % capacity] = val
	end

	def pop
		raise "index out of bounds" if (length == 0)

		val, self[length - 1] = self[length - 1], nil
		self.length -= 1

		val
	end



end
