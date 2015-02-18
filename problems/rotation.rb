def find_rotation_point(array)
	first_number = array[0]
	half = array.length / 2
	loop do
		prior_value = array[half - 1]
		left_value = array[half]
		right_value = array[half + 1]
		return right_value if left_value > right_value
		return left_value if prior_value > left_value
		return “no rotation point” if left_value == first_number

		if left_value < first_number
			half = half / 2
		else
			half = (half + array.length)/2
		end

	end
end

p find_rotation_point([7,8,9,1,2,3])
