def max_profit(stock)
	max = 0
	buy = stock[0]
	stock.each do |curr_price|
		max = curr_price - buy if curr_price - buy > max
		buy = curr_price if buy > curr_price
	end
	max
end


def products(int_array)
	arr = []
	(0...int_array.length).each do |index|
		clone = int_array.dup
		clone.delete_at(index)
		arr << clone.inject(&:*)
	end
	arr
end


def prods(arr)
	output = []
	left = 1
	arr.each do |val|
		output << left
		left *= val
	end
	p output

	right = 1
	(arr.length - 1).downto(0) do |j|
		p j
		arr[j]
		output[j] *= right
		right *= arr[j]
	end

	p output
end


def high_three(arr)
	d3,d2h,d2l,arrmax,arrmin = arr[0],arr[0],arr[0],arr[0],arr[0]

	arr.each do |value|
		arrmax = value if value > arrmax
		arrmin = value if value < arrmin
		pdl, pdh = [arrmax * value, arrmin * value].minmax
		d2h = pdh if pdh > d2h
		d2l = pdl if pdl < d2l
		pth = [d2h * value, d2l * value].max
		d3 = pth if pth > d3
	end
	d3

end
p high_three([-10,-10,1,3,2])



def tuple(arr)
	arr.sort!{|x,y| x[0] <=> y[0]}

	arr.each_with_index do |tuple, index|
		p index
		prev_tuple = arr[index - 1] if index - 1 > 0
		next_tuple = arr[index + 1] if index + 1 < arr.length

		if prev_tuple
			if tuple[0].between?(next_tuple[0], next_tuple[1])
				tuple = [prev_tuple[0], tuple[1]]
			end
		end
		if next_tuple
			if tuple[1].between?(next_tuple[0], next_tuple[1])
				tuple = [tuple[0], next_tuple[1]]
			end
		end
		p arr
	end
	p arr
end


tuple([[0,1],[3,5],[4,8], [10,12], [9, 10]])
