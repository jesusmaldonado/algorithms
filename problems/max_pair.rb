##hash-look-up-in Ruby is O(1)
## the average cost of look-up in a hash is independent of n, so it's a constant
##in ruby and js, a hash table is very important because it's the data structure. object methods are stored as a key with a pointer to the object or memory.
##the hash rules

##a set is another way of saying, have we seen an item before
require 'set'

def duplicates(array) #O(n)
  hash = {}
  array.each do |element|
    if hash[element]
      hash[element] += 1
    else
      hash[element] = 1
    end
  end
  hash.select{|k,v| v > 1}.keys
end

def two_sum(numbers)
	set = Set.new
	numbers.each { |el| set.add(el)}
	numbers.any { |el| set.include?(el)}
end
p duplicates([3,3,1,5,5])


def duplicates_set(array) #O(n)
  unseen = Set.new
  seen = Set.new
  array.each do |el|
    if unseen.include?(el)
      seen << el
    else
      unseen << el
    end
  end
  seen
end

#any two numbers sum to zero, if el + -el exist in the area

def two_sum(arr) #o(ns)
  set = Set.new
  arr.each{|el| set << el}
  arr.select{|el| set.include?(-1 * el)}
end

def two_sum_k(arr, k) #O(n)
  set = Set.new
  arr.each{|el| set << el}
  potential_sums = arr.select{|el| set.include?(k - el)}
      #.map{|el| [el, k - el]}
      #now make sure they are unique pairs
  potential_sums.sort!
  seen = Set.new
  output = []
  potential_sums.each do |el|
    if seen.include?(el) || seen.include?(k - el)
    else
      output << [el, k - el]
      seen << el
      seen << k - el
    end
  end
  output
end

p duplicates_set([3,3,1,5,5])

p two_sum([-1,0,1,3])

p two_sum_k([3,4,9,0,6, 15, -6],9)
