##given a string can we make a hash map with word counts, deal with punctuation and capitalization
##capitalization will be uncapitalized
##puncutation will be ignored
##here we make a hash map --> keys to values, really hash lookup/insertion is not O(1) --> collisions can make it O(n)


##scan(regexp) --> array, all match
##split(regexp) --> array, of characters separated by words
##gsub(regexp, sub) --> returns a new copy of the string

def make_cloud(string)
	arr = string.scan(/[a-zA-Z]+-[a-zA-Z]+|[a-zA-Z]+/).map{|word| word.downcase}
	cloud = Hash.new {|k,v| k[v] = 0}

	until arr.empty?
		word = arr.pop
		cloud[word] += 1
	end

cloud
end

p make_cloud("after after. AFTER")
