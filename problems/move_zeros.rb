def move_zeros(array)
	##keep track of everything we flip
	zero_place = 0
	array_length = array.length
	##"lazy" approach, keep track of the last zero_place switch.
	array.each_with_index do |value, index|
		##counter will lag behind the minute there is a zero, and will allow values to bubble up
			if value != 0
				array[zero_place] = array[index]
				##there is no zero here, but there may be at the next
				zero_places += 1
			end
	end
	#well we know where to zeros are
	(zero_places...array.length).each do |zero_index|
		array[zero_index] = 0
	end
	array
end
