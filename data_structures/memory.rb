##just a couple of expriments in ruby to determine the relative sizes of things

require 'objspace'

puts RUBY_VERSION

require 'objspace'

p ObjectSpace.memsize_of("a"*23)
p "string after me"
p ObjectSpace.memsize_of("abc"*20)
p "number after me "
p ObjectSpace.memsize_of(1111111**24)
p ObjectSpace.memsize_of("a".*1000)
p ObjectSpace.memsize_of("BLACK").to_f == ObjectSpace.memsize_of(false).to_f
