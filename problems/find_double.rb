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

p find_double([1,2,3,3,4,5])
