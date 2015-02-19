#”abc” => “def”
def caesar_cipher(str, amount)
	shifted_alphabet = ("a".."z").to_a.rotate(amount)
	alphabet = ("a".."z").to_a
	letters = Hash[alphabet.zip(shifted_alphabet)]
	p shifted_alphabet
	(0...str.length).each do |j|
		char = str[j]
		str[j] = letters[char]
	end
	str
end
p caesar_cipher("abc", 3)
