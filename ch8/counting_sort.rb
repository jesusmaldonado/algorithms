##counting sort is dependent on the number of elements, plus how big your guess is of what's inside / the maximum

def counting_sort(arr, k)
	sorted_array = []
	##first we construct a temporary array, this will hold our comparisons
	tmp = Array.new(k) {0} #code runs k times
	arr.each do |element| #code runs n times
		tmp[element - 1] += 1
	end
	p tmp
	##array 0 represents the first, so we go through element and count how many of each element there is
	tmp.each_with_index do |element, index| #n times
		prior_index = (index - 1 < 0) ? nil : (index - 1)
		tmp[index] = tmp[index] + tmp[prior_index] if prior_index
	end
	#now since we know how many elements there of an element, you can count how many are less than by successively adding the previous sum (if there is one)
	##this part right here is super important, it makes counting_sort STABLE. that means the order that the elements appear int he final sorted_array is the same as they appear in the input array
	(0...arr.length).each do |j| #n times
		sorted_array[tmp[arr[j] - 1] - 1] = arr[j]
		tmp[arr[j] - 1] -= 1
	 	sorted_array
	end
	sorted_array
end

##radix sort taken from
##https://medium.com/@tyguyo/all-sorts-of-sorts-5da9873aa046
def radix_sort(list)
  passes = (list.max == 0) ? 1 : Math.log10(list.max).to_i + 1
  new_list = []
  passes.times do |i|
    buckets = make_buckets
    list.each do |n|
			p get_digit(n, i)
      digit = get_digit(n, i)
      buckets[digit] += [n]
    end
		p buckets
    new_list, buckets = buckets.flatten, make_buckets
  end
  new_list
end
def make_buckets
  Array.new(10,[])
end
def get_digit(n, i)
  n % (10 ** (i + 1)) / (10 ** i)
end

p radix_sort([5,6,4,3,27,0,9])
