def bubble_sort(arr)
  sorted = false
    until sorted
      sorted = true
      (0...arr.length - 1).each do |index|
        if arr[index] > arr[index + 1]
          sorted = false
          arr[index], arr[index + 1] = arr[index + 1], arr[index]
        end
      end
    end
    arr
end

p bubble_sort([6,4,3,6,2,3,1])
