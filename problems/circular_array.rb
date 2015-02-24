def one_cycle?(arr)
	current_position = 0
	element = 0
	cycle = false
	while element <= arr.length - 1
		break if arr[current_position].nil?
		current_position = arr[current_position] + current_position
		if current_position == 0 && cycle == false
			cycle = true
		elsif current_position == 0 && cycle
			return false
		end
		element += 1
	end
	cycle
end
