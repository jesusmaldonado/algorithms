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
#fn => comparisons are in the worst form as form (n)(n - 1) + c, so O(n^2) at worst

def inc_insertion_sort(array)
  #go through the array
  array.each_with_index do |el, i| #n steps
    #the elements starting from [0..i - 1] will always be sorted (initialization loop invariant)
    # run 1: el: 5, i: 1
    j = i - 1 #1 step
    while j >= 0 && array[j] < el #at worst, we will do n-1 comparisons
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
#fn => comparisons are in the worst form as form (n)(n - 1) + c, so O(n^2) at worst
p inc_insertion_sort([5,4,3,2,1])
p inc_insertion_sort([1,2,3,4,5,6,7,7])
