def recurs_ins_sort(array)
  return array if array.size == 1
  value = array.shift
  smallest_arr = recurs_ins_sort(array)
  smallest_arr << value if smallest_arr[0] < value
  smallest_arr.unshift(value) if smallest_arr[0] >= value
  smallest_arr
end

# (tn) = t(n-1) + n

p recurs_ins_sort([5,4,3,2,1])

#[3,2,1]
#[2,1]
#[1]

##[1,2]
