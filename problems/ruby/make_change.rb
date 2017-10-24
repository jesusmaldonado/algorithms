def make_best_change(target, coins = [25, 10, 5, 1])
  return [] if target == 0
  # Can't make change if all the coins are too big. This is in case
  # the coins are so weird that there isn't a 1 cent piece.
  return nil if coins.none? { |coin| coin <= target }

  # Optimization: make sure coins are always sorted descending in
  # size. We'll see why later.
  coins = coins.sort.reverse

  best_change = nil

	##begin the recursion
  coins.each_with_index do |coin, index|
    # can't use this coin, it's too big
    next if coin > target

    # use this coin
    remainder = target - coin

    # Find the best way to make change with the remainder (recursive
    # call). Why `coins.drop(index)`? This is an optimization. Because
    # we want to avoid double counting; imagine two ways to make
    # change for 6 cents:
    #   (1) first use a nickle, then a penny
    #   (2) first use a penny, then a nickle
    # To avoid double counting, we should require that we use *larger
    # coins first*. This is what `coins.drop(index)` enforces; if we
    # use a smaller coin, we can never go back to using larger coins
    # later.

		##this makes it so that we attempt to make change with the best amount of times.
    best_remainder = make_change(remainder, coins.drop(index))

    # We may not be able to make the remaining amount of change (e.g.,
    # if coins doesn't have a 1cent piece), in which case we shouldn't
    # use this coin.
    next if best_remainder.nil?

    # Otherwise, the best way to make the change **using this coin**,
    # is the best way to make the remainder, plus this one coin.
    this_change = [coin] + best_remainder

    # Is this better than anything we've seen so far?
    if (best_change.nil? || (this_change.count < best_change.count))
      best_change = this_change
    end
  end

  best_change
end


def make_best_change(amount, coins = [25,10,5,1])
	return [] if amount == 0
	##can't make change with this coin. this could happen if we don't have a 1 or something
	return nil if coins.none? { |coin| coin <= target}
	coins.sort!.reverse!
	best_change = nil

	coins.each_with_index do |coin, index|
		#attempt to make change with a coin
		next if coin > target
		remainder = target - coin
		best_combination = make_change(remainder, coins.drop(index))
		next if best_combination.nil?
		this_change = [coin] + best_remainder
		if (best_change.nil? || (this_change.count < best_change.count))
			best_change = this_change
		end
	end

	best_change
end



def make_efficient_change(amount, coins)
	return [] if amount == 0
	return nil if coins.none? {|coin| coin <= amount}
	#this will represent our potential combinations of change combinations
	coins.sort!.reverse! ##we want the coins in descending order, because we want to make change with the next biggest coin at a time.
	best_change = nil
	coins.each_with_index do |coin, index|
		next if coin > amount
		remainder = amount - coin
		best_remainder = make_efficient_change(remainder, coins.drop(index))
		next if best_remainder.nil?
		this_combination = [coin] + best_remainder
