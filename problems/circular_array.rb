#Determine whether a circular array of relative indices has only one cycle
#[0] is a cycle
#[1,-2,1] is a cycle
#[1] is not a cycle
#[3] is not a cycle
#[-1] is a cycle
#[1, -3] is a cycle
#[1,-3,1] is not a cycle
def one_cycle?(arr)
	current_position = 0
	element = 0
	cycle = false
	while element < arr.length
		break if arr[current_position].nil?
		current_position = arr[current_position] + current_position
		if current_position == 0 && cycle == false || element == arr.length - 1 && arr[current_position] == arr[0]
			cycle = true
		elsif current_position == 0 && cycle
			return false
		end
		element += 1
	end
	cycle
end

p one_cycle?([1, -3, 1])
