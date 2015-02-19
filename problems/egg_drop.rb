def find_optimal_floors(array)
	max = array[-2]

	current_floor = 0

	current_number = 1
	tries = 2
	max_tries = 100
	while true
		if current_number * tries > max && tries < max_tries
			current_floor = current_number if current_number > current_floor
			max_tries = tries
			current_number += 1
			tries = 1
		end
		tries += 1
		break if current_number == 100
	end
	current_floor
end

p find_optimal_floors((1..100).to_a)
