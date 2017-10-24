##shuffle an array in place, with equal probability of any element appearing anywhere

def shuffle_in_place(arr)
	clone = arr.dup
	last_idx = arr.length - 1
	arr.each_with_index do |value, index|
		left_random = rand(0..(index))
		right_random = rand((index + 1)..last_idx)

		if left_random.nil?
			random = right_random
		elsif right_random.nil?
			random = left_random
		else
			random = ( rand(1) == 1 ? left_random : right_random )
		end

			arr[index], arr[random] = arr[random], arr[index]
		end
	arr.sort == clone.sort
end



def keck_shuffle(arr)

	arr.each_with_index do |value, index|
		rand_idx = rand(index..(arr.length - 1))

		arr[index], arr[rand_idx] = arr[rand_idx], arr[index]
	end
	arr
end

	#no bias towards any side, but we only deal with integers that haven’t been placed yet
	#n - index possibilities of placement each time!


p shuffle_in_place([634,45,32,4,3,2,34,4,4,5,6])
p keck_shuffle([5,3,2,4,1])
