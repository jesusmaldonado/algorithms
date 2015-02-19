def move_zeros(array)

	array.each_with_index do |value, index|
			if value == 0 && array[index + 1]
				array[index] = array[index + 1]
				array.delete_at(index + 1)
				array << 0
			end
	end
	array
end

p move_zeros([1, 2, 0, 3, 4, 0, 5, 6, 0])
