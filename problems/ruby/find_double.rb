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

def find_repeat(array)
	floor = 1
	ceiling = array.length - 1
	while floor < ceiling
			midpoint = floor + ((ceiling - floor))/2
			lower_range_floor, lower_range_ceiling = floor, midpoint
			upper_range_floor, upper_range_ceiling = midpoint + 1, ceiling

			distinct_items = 0
			array.each_with_index do |val, idx|
				if idx <= lower_range_ceiling && idx >= lower_range_floor
					distinct_items += 1
				end
			end

			possible_integers = lower_range_ceiling - lower_range_floor + 1
			if distinct_items > possible_integers
				floor, ceiling = lower_range_floor, lower_range_ceiling
			else
				floor, ceiling = upper_range_floor, upper_range_ceiling
			end
	end
	array[floor]
end

p find_repeat([1,2,3,4,4,5,6])
