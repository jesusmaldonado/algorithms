def binary_search(array, value)
  return true if array[0] == value
  return false if array.size == 1 && array[0] != value
  length = array.length
  mid = length/2
  left = array[(0...mid)]
  right = array[(mid...length)]

  if left[-1] < value
    value = binary_search(right, value)
  else right[-1] < value
    value = binary_search(left, value)
  end
  return value
end

p binary_search([1,2,3,4,5,6],1)
p binary_search([2,3,4,6],5)
