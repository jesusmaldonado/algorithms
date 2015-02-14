
def tuple(arr)
	arr.sort!{|x,y| x[0] <=> y[0]}

	arr.each_with_index do |tuple, index|
		p index
		prev_tuple = arr[index - 1] if index - 1 > 0
		next_tuple = arr[index + 1] if index + 1 < arr.length

		if prev_tuple
			if tuple[0].between?(next_tuple[0], next_tuple[1])
				tuple = [prev_tuple[0], tuple[1]]
			end
		end
		if next_tuple
			if tuple[1].between?(next_tuple[0], next_tuple[1])
				tuple = [tuple[0], next_tuple[1]]
			end
		end
		p arr
	end
	p arr
end


tuple([[0,1],[3,5],[4,8], [10,12], [9, 10]])
