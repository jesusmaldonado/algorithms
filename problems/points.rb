#[[2,2], [3,3], [0,0]]

def find_points(arr, n)
	raise "n is greater than array size #{arr.size}" if n > arr.size

	distances = []
	arr.each_with_index do |point, index|
		xcoord = point[0]
		ycoord = point[0]
		distance = Math.sqrt(xcoord**2 + ycoord**2)
		distances << [distance, index]
	end
	#wow did you know sort by wont take floats
	distances.sort_by!{ |x1, x2| x1 <=> x2 }
	distances[(0...n)].map{|point| point = arr[point[1]] }
end

#distances = [[sqrt(8), 0], [sqrt(18), 1], [0, 2]]
#O(N log N) / O(N)

def find_points_optimized(arr, n)
	raise "n is greater than array size #{arr.size}" if n > arr.size
	arr.sort_by!{ |point1, point2| Math.sqrt(point1[0]**2 + point1[1]**2) <=> Math.sqrt(point2[0]**2 + point2[1]**2) }
	arr[(0...n)]
end

#O(N log N) / O(n)

##O(N * n ) << O(N log N) for large N

require 'set'
def find_points_time(arr, n)
	raise "n is greater than array size #{arr.size}" if n > arr.size
	output = Set.new
	n.times do
		min = nil
		min_dist = nil
		arr.each do |val|
			dist= Math.sqrt(val[0] ** 2 + val[1] ** 2)
			if min.nil? && !output.include?(val)
				min = val
				min_dist = dist
			elsif min && dist < min_dist && !output.include?(val)
				min_dist = dist
				min = val
			end
		end
		output << min
	end
	output
end

#O (n * N) / O(n)

p find_points_time([[1,2], [3,4]], 2)
