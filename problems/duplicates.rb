
def find_unique(array)
	hash = Hash.new { |k,v| k[v] = 0 }
	array.each do |val|
		hash[value] += 1
	end

	hash.select { |k, v| v == 1 }.keys[0]
end

##so this is is o(n)/o(n) space
#[1,999,999,2,2,4,2,3,1,3]
#{ 1 => 2, 999 => 2, 2 => 3, 4 => 1, 3 => 2 }, {4 => 1}.keys[0]

def find_unique(array)
	uniq = 0
	
	array.each do |val|
		uniq = uniq ^ val
	end
	uniq
end
##so this is o(n) / o(1)
