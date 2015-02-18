def angry_sort(scores, high_score)
	sorted_array = []

#the index corresponds to the score, and the value corresponds to the count
	scores_count = Array.new(high_score + 1) {0}
	scores.each { |score| scores_count[score] += 1 }

	scores_count.each_with_index do |count, score|
			next if count == 0
			count.times do
				sorted_array << score
			end
	end

	sorted_array
end

p angry_sort([2,32,32434,4324,234,35,323543,532,52335,12,12,3,4,4,123,42,3232], 323543)
