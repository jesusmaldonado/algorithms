def fib(n)
	return 0 if n == 0
	return 1 if n == 1
	fib(n - 1) + fib(n - 2)
end


##can memoize to remove exponential 2^n calls

def fibi(n)
	if n < 0
		raise "error, no negative series"
	end
	if n == 0 || n == 1
		return n
	end

	prev_prev = 0
	prev = 1
	current = 0

	(n - 1).times do
		current = prev + prev_prev
		prev_prev = prev
		prev = current
	end
	current
end

p fibi(4)
