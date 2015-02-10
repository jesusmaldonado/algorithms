##hash-look-up-in Ruby is O(1)
## the average cost of look-up in a hash is independent of n, so it's a constant
##in ruby and js, a hash table is very important because it's the data structure. object methods are stored as a key with a pointer to the object or memory.
##the hash rules

def duplicates(array)
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



p duplicates([3,3,1,5,5])
