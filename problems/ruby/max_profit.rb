def max_profit(stock)
	max = 0
	buy = stock[0]
	stock.each do |curr_price|
		max = curr_price - buy if curr_price - buy > max
		buy = curr_price if buy > curr_price
	end
	max
end
