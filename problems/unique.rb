
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

def find_unique_fast(array)
	uniq = 0
	array.each do |val|
		uniq ^= val
	end
	uniq
end
##conditions: numrepeat % 2 == 0, only finds 1 uniq
p find_unique_fast([23, 24, 23, 25, 25, 25, 25, 5, 5])


def find_duplicates
