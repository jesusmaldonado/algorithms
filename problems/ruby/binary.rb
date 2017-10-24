def binary(num)
  arr = []
  until num == 0
     arr << num % 2
     num /= 2
  end
  arr.push(0).reverse!.join("")
end
#2n + 2 form

def fac_rec(num)
  return nil if num < 1
  return num if num == 1
  num * fac_rec(num - 1)
end
#O(n) memory time because the stack frame, the execution stack contains multiple calls to fac_rec
#O(n execution time)



def factorial(num)
  return nil if num < 1
  return num if num == 1
  result = 1
  (1..num).each do |fac|
    result *= fac
  end
  result
end

#tail-recursion, is where the stack routine contains only calls to current active functions.
#some ruby implementations like YARV support sub-routine-optimization
#you can turn it on manually by going into Ruby MRI...

def fac_tail(num, prod = 1)
  return prod if num == 1
  return fac_tail(num - 1, num * prod)
end

#this has O(n) implementation but still O(n) memory because the call stack

#find the maximum pstrings of an array

def max_psub(str)
  hash = {}
  #find substrings
  (0...str.length).each do |i|
    (i...str.length).each do |j|
      substr = str[(i..j)]
      hash[substr] = substr.length
    end
  end
  max = hash.values.max
  max_arr = hash.select{|k,v| v == max}.keys
  arr = []
  max_arr.each do |maxsub|
    (1...maxsub.length).each do |k|
      dup = maxsub.dup
      dup.slice!(k)
      arr << dup
    end
  end
  #initialize
  max_psub = arr[0]
  (0...max_psub.length).each do |l|
    arr.each do |psub|
      if psub[l] > max_psub[l]
        max_psub = psub
      end
      return max_psub if max_psub != arr[0]
    end
  end
  max_psub
end

##(O(n)) solutoon
def simple_psub_max(str)
  dup = str.dup
  dup.slice!(1)
  max = dup
  (2...str.length - 1).each do |j|
    dup = str.dup
    dup.slice!(j)
    pstring = dup
    if pstring[j] > max[j] && pstring.length == max.length
      max = pstring
    end
  end
  max
end

p max_psub("hello")
p simple_psub_max("hello")


def max_unique_psub(str)
  psub_arr = [str[str.length - 1]]

  (str.length - 2).downto(0) do |i|
    next if str[i] < psub_arr.last
    # this is amortized O(1) time.
    psub_arr << str[i]
  end

  psub = psub_arr.reverse.join("")
  psub
end

p max_unique_psub("hello")
