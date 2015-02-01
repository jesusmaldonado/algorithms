def merge_sort(array)
  return array if array.size <= 1

  length = array.length
  #ruby automatically floors stuff
  mid = length / 2
  left = merge_sort(array[(0...mid)])
  right = merge_sort(array[(mid...length)])

  merge_helper(left, right)

end

def merge_helper(array1, array2)
  arr = []
  until array1.empty? || array2.empty?
    if array1[0] <= array2[0]
      arr << array1.shift
    else
      arr << array2.shift
    end
  end
  arr + array1 + array2
end
