def intersects(rect1, rect2)

	rect1rangex = (rect1[:x]..(rect1[:x] + rect1[:width]))
   rect2rangex = (rect2[:x]..(rect2[:x] + rect2[:width]))
   rect1rangey = (rect1[:y]..(rect1[:y] + rect1[:height]))
   rect2rangey = (rect2[:y]..(rect2[:y] + rect2[:height]))

##shapes must intersect in x and y
	xoverlap = rect1rangex.select{|i| rect2rangex.include?(i)}
	yoverlap = rect1rangey.select{|i| rect2rangey.include?(i)}

	##both must overlap for intersection to occur
	return [] if xoverlap.empty? || yoverlap.empty?

	intersectx = xoverlap.min
	intersecty = yoverlap.min
	widthx = xoverlap[-1] - xoverlap[0]
	widthy = yoverlap[-1] - yoverlap[0]

	return [intersectx, intersecty] if widthx == 0 && widthy == 0

	rect = [[intersectx, intersecty],
		[intersectx + widthx, intersecty],
		[intersectx, intersecty + widthy],
		[intersectx + widthx, intersecty + widthy]]
	rect
end

r1 = {x: 1, y:1, width: 5, height: 5}
r2 = {x: 0, y: 0, width: 7, height: 7}

p intersects(r1, r2)

## x: (1..6), (0..7) => xoverlap = [(1..6)]
## y: (1..6), (0..7) => yoverlap = [(1..6)]


##partial overlap, this works
##touch at a point? we would want to return just the point, this currently returns 4 copies
##dont touch, we shortcircuit
##rect1range > rect2range? this works. rect1range == rect2range? this works.  rect1range < ##rect2range? works. as long as the values are actually included
##should refactor to be O(1) time, ie only ask about max and minimum
