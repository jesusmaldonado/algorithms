def maximum_windows(arr, k)
	left_over_max = nil
	best_max = nil
	number_frame = 1
	output = []
	arr.each_with_index do |val, index|
		if number_frame < (k)
			number_frame += 1
			if best_max.nil?
				best_max = val
				next
			elsif left_over_max.nil?
				left_over_max = val
				next
			elsif val >= best_max
				left_over_max = best_max
				best_max = val
			end
		elsif number_frame == k
			if val > best_max
				output << val
				left_over_max = best_max
				best_max = val
			else
				output << left_over_max
				left_over_max = nil
			end
		end
	end
	output
end


p maximum_windows([1,2,3,4,5,6],4)
