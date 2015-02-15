##given a string can we make a hash map with word counts, deal with punctuation and capitalization
##capitalization will be uncapitalized
##puncutation will be ignored
##here we make a hash map --> keys to values, really hash lookup/insertion is not O(1) --> collisions can make it O(n)


def make_cloud(string)
	arr = string.match(/\w+/).map{|word| word.downcase}
	cloud = Hash.new {|k,v| k[v] = 0}

	until arr.empty?
		word = arr.pop
		cloud[word] += 1
	end

cloud
end

p make_cloud(“after AFTER,.  After”)
