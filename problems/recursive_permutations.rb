##a permutation of a string is an ordering of a string's characters.
##the subproblem here is to break apart the string into the base case
##generate permutations of smaller strings
# cat -> at -> a  [string] → ta at -> cta tac atc cat tca act
def rec_permutations(string)
	return [string] if string.length <= 1

permutations = rec_permutations(string[1..(string.length - 1)])

container = []
permutations.each do |perm|
	(0...perm.length).each do |j|
		permutation=perm[0...j] + string[0] + perm[j..-1]
		container << permutation
	end
end

return container
end

p rec_permutations("heys")
