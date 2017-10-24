def substrings(str1,str2)
	max_initial_index = nil
	max_final_index = nil

	current_initial_index = nil
	current_final_index = nil
	(0...str1.length).each do |j|
		if str1[j] == str2[j]
			if current_initial_index.nil?
				current_initial_index = j
				current_final_index = j
			else
				current_final_index = j
			end
		else
			if current_initial_index
				if max_initial_index.nil? || (max_final_index - max_initial_index) > (current_final_index - current_initial_index)
					max_initial_index = current_initial_index
					max_final_index = current_final_index
				else
					current_initial_index = nil
					current_final_index = nil
				end
			end
		end
	end
	##O(n) / O(1)
	str1[(max_initial_index..max_final_index)]
end
p substrings("thereisnone", "ther")
