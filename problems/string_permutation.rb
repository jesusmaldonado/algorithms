#conditions for permutations,orderings of letters is that of any ordering there must be an even #or only odd number of letters
#so civic is odd parity but only once, anna is even and has only even parity
#so when we are computing the permutations of a string we should construct a parity map

def permutations_palindrome?(string)
parity_map = {}

(0...string.length).each do |index|
	char = string[index]
	##two scenarios, doesn’t exist, does exist -> ternary
	parity_map[char] = ( parity_map[char].nil? ? true : !parity_map[char] )
end

#now we need to examine the parity. we neeed a flag inc ase any of these guys are
#odd but still palindromes

flag = false

parity_map.values.each do |boolean_value|
	if boolean_value && flag
		return false
	elsif boolean_value
		#i.e. i’ll grant you a middle
	flag = true
end
end

true
end


##permutations essentially imply an O(n) runtime because the arrangement produces the permutation
##why store booleans? to avoid overflow. this can go through an arbitrarily large string
##the memory cost is extremeley efficient, ther eis a constant memory for all strings because there is only a set of certain letters
