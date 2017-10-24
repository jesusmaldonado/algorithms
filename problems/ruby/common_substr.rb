#naive approach

def naive_common_substrings(str1, str2)
  str1sub = []
  (0...str1.length).each do |index|
    (index + 1...str1.length).each do |j|
      str1sub << str1[(index..j)]
    end
  end
  str2sub = []
  (0...str2.length).each do |index|
    (index + 1...str2.length).each do |j|
      str2sub << str2[(index..j)]
    end
  end
  common = str2sub.select{|sub| str1sub.include?(sub)}.max_by{ |word| word.length }
  common
end
#O(n) with O(2) memory, of form 2n^2;
#we must remove the additional strings here too, so a better solution is to skip some of the iterations by asking when we build a string whether that substr is in str2


def efficient_common_substrings(str1, str2)
  max = ""
  (0...str1.length).each do |index|
    (index + 1...str1.length).each do |j|
      substr = str1[(index..j)]
      if (max.length <= substr.length) && str2.include?(substr)
        max = substr
      end
    end
  end
  max
end
#this is a bit better, but we are explicitly considering all substrings, what if we wrote it a different way?
#let's say that once we have a substring, we only want potential substrings that are at least n+1 greater, and only these do we build

def best_substrings(str1, str2)
#keep track of the starting index, initialize
	longest = ""
	start_idx = 0
while start_idx < str1.length
	#doesn’t matter what we pick here
	#now, we will only consider at least n+1 greater than the longest string length
	len = longest.length + 1
	#make sure still in scope of str, right?
	#this inner while loop is a lot like insertion sort, in that it only checks for substrings if there exists the possibility that there is a bigger one
while (start_idx + len) <= str1.length
		end_idx  = start_idx + len
		substr = str1[(start_idx..end_idx)]
		longest = substr if str2.include?(substr)
		#let’s check the rest of them that begin at the current index
		len += 1
end
#let’s say we left the loop, and we haven’t found anyone, then we need to move to the next idx
start_idx += 1
end
longest
end

#let’s see if this works
#at the beginning, the longest str is an empty string
#propagation, we build substrings of a given length...going through all substrings of a given start_idx. and replacing them by longest. the loop will find the biggest substring but does it terminate
#termination
	#start_idx < str1.length this condition will happen once we have either built the longest substring possible for a given start index
	#if we fail, then what will happen is that the start_index will be the last digit (i.e. str1.length - 1




p efficient_common_substrings("cats", "catsarecool")
p naive_common_substrings("cats", "catsarecool")
p best_substrings("cats", "catsok")
