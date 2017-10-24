#el1 + el2 = k => k - el1 = el2

def two_sum(array, k)
	first_index = 0
	last_index = array.length - 1
	loop do
		first_number = array[first_index]
		second_number = array[last_index]
		return [first_number, second_number] if first_number + second_number == k
		raise "value does not exist" if first_index == last_index
		last_index -= 1 if first_number + second_number > k
		first_index += 1 if first_number + second_number < k
	end
end
#[1,2,3,4,5], 0

p two_sum([1,2,3,4,5],12)
