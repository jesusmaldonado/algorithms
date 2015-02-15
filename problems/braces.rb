def closed_properly?(string)
	openers_to_closers_map = { "(" =>  ")", "{" => "}", "[" => "]"}

	openers = openers_to_closers_map.keys
	closers = openers_to_closers_map.values


	openers_stack = []
	(0...string.length).each do |index|
		char = string[index]
		p char
		if openers.include?(char)
			openers_stack << char
		elsif closers.include?(char)
			last_unclosed_opener = openers_stack.pop
			p last_unclosed_opener
			return false if char != openers_to_closers_map[last_unclosed_opener]
		end
	end
	openers_stack.empty?
end
