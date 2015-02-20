	##if an array is of form (1..n) then the series is triangular, the series begins with 1 and increases by 1 each time
	##so, the extra value is the same as the sum of the series - the sum of the triangular series

# def find_double(arr)
# 	##if the array is of form (1..n) then the number must appear twice in succession.
# 	number = nil
# 	arr.each do |value|
# 		return value if value == number
# 		number = value
# 	end
#
# end

def find_double(arr)

	triangular_sum = (arr[-1] ** 2 + arr[-1]) / 2
	sum = arr.inject(&:+)

	number = sum - triangular_sum
end

def find_repeat(arr)
	floor = 1
	ceiling = arr.length - 1
	while floor < ceiling
		midpoint = (ceiling - floor) / 2
		lower_low, lower_high = floor, midpoint
		upper_low, upper_high = midpoint + 1, ceiling

		number_in_range = 0
		arr.each_with_index do |val, index|
			number_in_range += 1 if index <= lower_low && index >= lower_high
		end
		distinct = lower_high - lower_low + 1
		if number_in_range > distinct
			floor, ceiling = lower_low, lower_high
		else
			floor, ceiling = upper_low, upper_high
		end
	end
arr[floor]
end

p find_repeat([1,2,3,4,4,5,5,7,8,8,9])
