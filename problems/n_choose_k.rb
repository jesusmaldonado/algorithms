#SORT IS ASCENDING IN RUBY

def max_value(cakes, capacity)
	cakes = cakes.sort_by{|el1| el1[1]/el1[0]}.reverse
	profit = 0
	current_capacity = capacity
	cakes.each do |cake|
		cake_weight = cake[0]
		cake_price = cake[1]
		max_cake = cake if cake_weight <= current_capacity
		if max_cake
			until cake_weight > current_capacity
				profit += cake_price
				current_capacity -= cake_weight
			end
		end
	end
	 profit
end


##assuming no sort

def max_value_no_sort(cakes, capacity)
	profit = 0
	current_capacity = capacity

	last_cake = nil
	last_capacity = nil
	last_ratio = nil
	cakes.each do |cake|
		next if cake[0] == 0 || cake[1] == 0
		cake_weight = cake[0]
		cake_price = cake[1]
		cake_ratio = cake_price/cake_weight
		if (last_cake.nil? && current_capacity >= cake_weight)
			last_cake = cake
			last_capacity = current_capacity
			last_ratio = cake_ratio
			until current_capacity < cake_weight
				current_capacity -= cake_weight
				profit += cake_price
			end
		elsif (last_ratio && cake_ratio > last_ratio && capacity >= cake_weight)
			until current_capacity == last_capacity
				current_capacity += last_cake[0]
				profit -= last_cake[1]
			end
			last_cake = cake
			last_capacity = current_capacity
			last_ratio = cake_ratio
			until current_capacity < cake_weight
				current_capacity -= cake_weight
				profit += cake_price
			end
		end
	end
	last_cake = cakes[-1]
	last_cake_weight = last_cake[0]
	last_cake_price = last_cake[1]
	if (capacity - current_capacity) > last_cake_weight && last_cake_weight != 0 && last_cake_price != 0
		until current_capacity < last_cake_weight
			current_capacity -= last_cake_weight
			profit += last_cake_price
		end
	end
	profit
end


p max_value_no_sort([[7,60], [3, 90], [2, 15]], 20)
