def sum_rec(arr)
  return arr[0] if arr.size == 1
  value = arr.shift
  value + sum_rec(arr)
end


#the disadvantage with this si that the array is destructively sorted

def sum_rec(arr)
  return arr[0] if arr.size == 1
  arr[0] + sum_rec(arr.drop(1))
end

#O(n) time, with O(n) memory
#initiation
#add the first element to a recursive call
#propagation
#keep recursing until the element is size 1
#termination
#once we hit 0, the recursive calls return values to subsequent calls, which are added together


#this is a little beter because the array is not destructively recursed through


def sum_recv2(nums)
  return nums[0] if nums.size == 1
  [nums[0] + sum_rec(nums.drop(1))]
end
