
def is_riffle?(shuffled_deck, half1, half2)

	half2_idx = 0
	half1_idx = 0
	half1_allowed = !half1.empty?
	half2_allowed = !half2.empty?
	shuffled_deck.each do |card|
		return false unless (half2[half2_idx] == card) || (half1[half1_idx] == card)
		p card
		if half2[half2_idx] == card
			return false if half2_allowed == false #no funny stuff
			if half2[half2_idx + 1]
				half2_idx += 1
			else
				half2_allowed = false
			end
		elsif half1[half1_idx] == card
			return false if half1_allowed == false
			if half1[half1_idx + 1]
					half1_idx += 1
			else
					half1_allowed = false
			end
		end
	end
	true
end

p is_riffle?([6,8,9,1,7,2,3,4,5], [6,8,7,9], [1,2,3,4,5])
