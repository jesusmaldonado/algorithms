def digits(pos, number)
	places = []
	until number == 0
		digit = number % 10
		places << digit
		number /= 10
	end
	places[pos]
end

p digits(5, 0123456789)
