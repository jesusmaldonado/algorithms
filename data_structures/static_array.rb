##a static array has a fixed length and can only hold up to n items

class StaticArray
	def initialize(length)
		@store = Array.new(length, nil)
	end

	#getting is O(1) because there is only one memory address being accessed
	def [](index)
		@store[index]
	end

	#setting is O(1) because there is only one memory address being accessed
	def []=(index, value)
		@store[index] = value
	end


	protected
	attr_accessor :store
end
