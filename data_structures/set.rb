##A set has certain methods
##insert, include, and delete
##unordered collection of values with no duplicates
##you get the benefits of hash's fast-lookup
##with the iteration of an array
##you must require the set it is not standard
require 'set'

class ArraySet
	def initialize
		@store = []
	end

	def include?(el)
		@store.any?{ |el2| el == el2  }
	end

	def add(el)
		return false if self.include?(el)
		@store << el
		true
	end

	def delete(el)
		return false if !self.include?(el)
		@store.delete(el)
		true
	end

end


##with this kind of set we have two problems
##the first is we are restricted to only numbers. Integers, in fact.
##the second is that if the range of numbers is big, it makes more effort in memory to store them
##therefore, this approach takes up considerable memory dependent upon the range of values
class MaxIntSet

	def initialize(max)
		@store = Array.new(max, false)
	end

	def include?(el)
		@store[el]
	end

	def add(el)
		@store[el] = true
	end

	def delete(el)
		@store[el] = false
	end

end


#for n elements, every bucket has essentially n/8.
## what does htis mean? it means that we are approaching linear time. (Why?)

class IntSet

	def initialize
		@buckets = Array.new(8), {[]}
	end

	def include?(el)
		bucket = @buckets[num % buckets.length]
    bucket.include?(num)
	end

	def delete(el)
		return false unless self.include?(el)
		bucket = @buckets[num % buckets.length]
		bucket.delete(el)
		true
	end

	def add(el)
		return false if self.include?(el)
		bucket = @buckets[num % buckets.length]
		bucket << el
		true
	end



end




##we need to use a hash-set to have O(1) operations
##sets are convenient in finding duplicates. you can create a set and then yield values from it.
