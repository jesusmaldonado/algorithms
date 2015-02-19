def powers_of_two
	while true
		n = rand(1..10)
		puts "Hey what's two to the #{n}"
		output = gets.chomp.to_i
		if 2 ** n == output
			puts "that's right"
		else
			puts "nope it's #{2 ** n}"
		end
	end
end

powers_of_two
