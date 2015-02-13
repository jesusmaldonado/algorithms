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

p products([1, 7, 0, 4])
