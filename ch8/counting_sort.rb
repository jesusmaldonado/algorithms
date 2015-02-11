def counting_sort(arr, k)
	sorted_array = []
	tmp = Array.new(k) {0}
	arr.each do |element|
		tmp[element - 1] += 1
	end
	tmp.each_with_index do |element, index|
		prior_index = (index - 1 < 0) ? nil : (index - 1)
		tmp[index] = tmp[index] + tmp[prior_index] if prior_index
	end
	(0...arr.length).each do |j|
		sorted_array[tmp[arr[j] - 1] - 1] = arr[j]
		tmp[arr[j] - 1] -= 1
	 	sorted_array
	end
	p sorted_array
end

counting_sort([1,9,5,3,3,4,4,1], 10)
