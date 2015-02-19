def digital_root(num)
	current_number = num
	sum = 0
	while current_number >= 1
		sum += current_number % 10
		current_number /= 10
	end
	sum
	#O(n) / O(1) where n is number of digits
end
