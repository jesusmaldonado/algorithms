def find_matrix?(matrix, string)
	first_letter = string[0]
	queue = []
	n = matrix.size
	m = matrix.size
	matrix.each_with_index do |arr, idx|
		arr.each_with_index do |val, idx2|
			if val == first_letter
				queue << [idx,idx2,1, [[idx, idx2]], val]
			end
		end
	end
	dirx = [0,0, 1, -1]
	diry = [-1, 1, 0 , 0]

	until queue.empty?
		x,y,string_position, visited, value = queue.shift
		if string_position == string.size
			return true
		end

		(0..3).each do |i|
			di = dirx[i] + x
			dj = diry[i] + y
			if (di >= 0 && di < n && dj <= m && dj >= 0 &&
				string[string_position] == matrix[di][dj] && !visited.include?([di, dj]))
				queue << [ di, dj, string_position + 1, visited + [[di, dj]], string[string_position] ]
				p queue

			end
		end

	end
	return false
end


p find_matrix?([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "BCCE")
