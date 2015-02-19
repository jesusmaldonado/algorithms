def caesar_cipher(str, amount)
	letters = ("a".."z").to_a
	shift = ("a".."z").to_a.shift(amount)
	caesar = ("a".."z").to_a.slice(amount, 25) + shift
	p caesar
	hash = Hash[letters.zip(caesar)]
	(0...str.length).each do |j|
		char = str[j]
		if hash[char]
			str[j] = hash[char]
		end
	end
	str
end

##O(n)/O(1)
p caesar_cipher("this is a cute little string", 3)
