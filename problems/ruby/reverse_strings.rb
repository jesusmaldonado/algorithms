
def reverse_in_place(string)

	reverse_word!(string, 0, string.length - 1)

	word_idx = 0
	(0..string.length).each do |i|
		char = string[i]
		if char == " " || (i == string.length)
			reverse_word!(string, word_idx, i - 1)
			word_idx = i + 1
		end
	end

	string
end

def reverse_word!(string, start_idx, end_idx)
	while start_idx < end_idx
			string[start_idx], string[end_idx] = string[end_idx], string[start_idx]
			start_idx += 1
			end_idx -= 1
	end
end

p reverse_in_place("cat hats")
# “cat hats”
# “stah tac”
# “hats tac”
# “hats cat”
# “ hi cats”
# “stac ih “
# “cats ih “
# “cats hi “
