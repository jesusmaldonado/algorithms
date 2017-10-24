###[1,2,3,4,5], 4
def replace_array!(arr, k)
	current_k = 0
	arr.each_with_index do |val, index|
		if val != k
			arr[current_k] = arr[index]
			current_k += 1
		end
	end
	arr.slice!(current_k, arr.length - 1)
	arr.length
end

p replace_array!([1,2,3,4,5,6,6,6,6,6],4)
