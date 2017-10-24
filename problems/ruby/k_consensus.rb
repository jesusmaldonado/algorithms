##[[1,2,2,3,45], [1,2,3,45], [1,2,6,7]]
require 'set'

def k_consensus(outer_array, k3)
	raise "consensus not possible" if k3 > outer_array.size
	#brute force, nested hash
	hash = Hash.new { |k, v| k[v] = Set.new}
	output = []
	outer_array.each_with_index do |array, index|
		array.each do |val|
			hash[index] << val
		end
	end

	unique_counts = Hash.new { |k, v| k[v] = 0}
	hash.each do |array_index, set|
		set.each do |number|
			unique_counts[number] += 1
		end
		hash[array_index] = nil
	end
	output = []

	unique_counts.each do |k, v|
		output << k if v >= k3
	end
	output
end

p k_consensus([[1,2,2,3,45], [1,2,3,45], [1,2,6,7]], 2)
