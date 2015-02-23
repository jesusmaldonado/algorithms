require 'algorithms'
include Containers

def merge(array1, array2)
	output = []
	until array1.empty? || array2.empty?
		if array1[0] < array2[0]
			output << array1.shift
		else
			output << array2.shift
		end
	end
	output + array1 + array2
end


def k_merge(input_array)
	until input_array.size == 1 #runtime log k
		first_array = input_array.shift
		second_array = input_array.shift
		input_array << merge(first_array, second_array) #runtime log k * n
	end
	input_array.flatten
end


def k_merge_heap(input_array)
	lam = lambda { |x, y| (y <=> x) == 1 }
	pqueue = PriorityQueue.new(&lam)
	output = []
	input_array.each_with_index do |array, index|
			val = array.shift
			pqueue.push([index, val], val)
	end

	until pqueue.empty?
		array_index, val = pqueue.pop
		output << val
		if input_array[array_index].length > 0
			new_val = input_array[array_index].shift
			pqueue.push([array_index, new_val], new_val)
		else
			input_array.each_with_index do |array, index|
				if array.length > 0
					val = array.shift
					pqueue.push([index, val], val)
				end
			end
		end

	end
	output
end

p k_merge_heap([[1,2,3,4,5,6],[7,8,9,9,10,12,13],[19,20]])
