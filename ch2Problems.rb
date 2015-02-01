#cormen algorithms book ch. 2


#[5,2,4,6,1,3]
def insertion_sort(array)
  #go through the array
  array.each_with_index do |el, i| #n steps
    #the elements starting from [0..i - 1] will always be sorted (initialization loop invariant)
    # run 1: el: 5, i: 1
    j = i - 1 #1 step
    while j >= 0 && array[j] > el #at worst, we will do n-1 comparisons
      # run 1: true
      array[j+1] = array[j]
      # run1: [5,5,4,6,1,3]
      j -= 1
      # run1: 0
    end
    array[j+1] = el #1 step
    # run1: [2,5,4,6,1,3]
    #the array is still sorted (propagation)
  end
  array #1 step (then here at termination, the algorithm is correct)
end
#fn => comparisons are in the worst form as form (n)(n - 1) + c, so O(n^2) at worst,
#but actually not that bad because it skips a bunch of iterations if the array is semi-sorted

def inc_insertion_sort(array)
  array.each_with_index do |el, i|
    j = i - 1
    while j >= 0 && array[j] < el
      array[j+1] = array[j]
      j -= 1
    end
    array[j+1] = el
  end
  array
end


def linear_search(array, v)
  array.each do |item|
    #loop invariant: initialization (item v does exist)
    #propagation (if item != v) propagates the loop, yielding more items (propagation)
    return v if item == v
    #termination, two conditions (if item == v), we return from the method, avoiding the nil
  end
  #if the item does not exist in the array, then we return nil
  nil
end
#O(n) runtime, possibly O(1) memory.

def add_bits(array1, array2)
  #return if the array is not the same size
  return nil if array1.size != array2.size
  destination_array = []
  array1.each_with_index do |item, index|
    destination_array[index] ||= 0
    if (item + array2[index] + destination_array[index] > 1)
      destination_array[index + 1] = 1
    elsif (item + array2[index] + destination_array[index] == 1)
      destination_array[index] = 1
    end
  end
  destination_array.push(0).reverse
end
#worst case scenario is O(n)


def selection_sort(array)
#assume array has a size and has numbers in it and is an array

  (0..array.length - 1).each do |i|
    small = array[i]
    smallidx = i
    #for propagation, we know that the n-1 smallest element will be found
    #because the element is not within the scope of the next outer loop
    (i..array.length - 1).each do |j|
      small, smallidx = array[j], j if array[j] < small
    end
    # we find the n-th smallest element of the array initialization
    # replace the n-th smallest elements index with the not nth-smallest element
    array[smallidx] = array[i]
    array[i] = small
  end
  #the loop terminates when all portions of the loop have been reached
  array
end

#this algorithm is really, really bad. it has O(n^2) running time always.
