##quicksort is a divide and conquer algorithm, with o(1) memory
##we divide the array by a "pivot" and sort relative to the pivot..
##the left and right hand side is in an order, and those are called into subsequent calls of quicksort (divide)
##these two new calls to quicksort subsequently sort about a new pivot. (conquer)
##as the array gets smaller(from n < 3) then we know definitively that the array is sorted and we return the sorted array to preceding calls (combine)
##the left and right sides are combined as sorted arrays into one array, and these combined arrays are returned to previous calls of quicksort
##quicksort sorts in place

##cormen implementation

##this implementation is subject to the choice of the initial pivot. if the last element is the largest or smallest, then we have an unbalanced partition.

def quicksort(arr, p, r)
	if p < r
		q = partition(arr, p, r)
		quicksort(arr,p, q - 1)
		quicksort(arr, q + 1, r)
	end
	arr
end


def partition(arr, p, r)
	x = arr[r] ##we will watch the end of the array this is hte pivot
	i = p - 1 ##start at zero
	(p..r - 1).each do |j|
		if arr[j] <= x #if the value we are looking at, is less than x
			i += 1
			arr[i], arr[j] = arr[j], arr[i] ##swap it with the ith place, move it down the line
		end
	end
	arr[i + 1], arr[r] = arr[r], arr[i + 1]
	##so i represents a dividing point, after i all values are greater than x, before i all values are less than or equal
	##i + 1 represents the first element (not the next greatest, necessarily...) that is greater than a[r], so we will return this element
	i + 1 ##so what we are reutnring is the index of the PIVOT
end

##ruby has a partition function
def quicksort_r(arr)
	return arr if arr.size <= 1
	pivot = arr.shift
	left, right = arr.partition{|el| el <= pivot}
	quicksort_r(left) + [pivot] + quicksort_r(right)
end

p quicksort_r([5,4,5,5,523,537])
