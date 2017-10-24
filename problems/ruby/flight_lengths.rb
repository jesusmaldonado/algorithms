require 'set'
##the condition here is movie1 + movie2 = flight_length, aka flight_length - movie(seen)
def find_movies(flight_length, movie_lengths)
	checked_movies = Set.new
	movie_lengths.each{|movie| movie << checked_movies}
	movie_lengths.each do |movie1|
		if checked_movies.include?(flight_length - movie1)
			return true
		end
	end
	false
end


def find_movies_hash(flight_length, movie_lengths)
		checked_movies = {}
		movie_lengths.each do |movie|
			if checked_movies[movie]
				return true
			else
				checked_movies[flight_length - movie] = movie
			end
		end
		false
end
