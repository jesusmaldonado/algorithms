
def products(int_array)
	arr = []
	(0...int_array.length).each do |index|
		clone = int_array.dup
		clone.delete_at(index)
		arr << clone.inject(&:*)
	end
	arr
end


def prods(arr)
	output = []
	left = 1
	arr.each do |val|
		output << left
		left *= val
	end
	p output

	right = 1
	(arr.length - 1).downto(0) do |j|
		p j
		arr[j]
		output[j] *= right
		right *= arr[j]
	end

	p output
end
