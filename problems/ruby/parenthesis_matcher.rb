def find_matching_parenthesis(string, parenthesis_idx)
	opener = "("
	closer = ")"
	open_parens = 1
	((parenthesis_idx + 1)...string.length).each do |idx|
		character = string[idx]
		if character == opener
			open_parens += 1
		elsif character == closer
			open_parens -= 1
		end
		return idx if open_parens == 0
	end
	"this parenthesis is not closed"
end





p find_matching_parenthesis("(()(())()())", 1)
