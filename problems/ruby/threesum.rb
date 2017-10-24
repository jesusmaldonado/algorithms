def high_three(arr)
	d3,d2h,d2l,arrmax,arrmin = arr[0],arr[0],arr[0],arr[0],arr[0]

	arr.each do |value|
		arrmax = value if value > arrmax
		arrmin = value if value < arrmin
		pdl, pdh = [arrmax * value, arrmin * value].minmax
		d2h = pdh if pdh > d2h
		d2l = pdl if pdl < d2l
		pth = [d2h * value, d2l * value].max
		d3 = pth if pth > d3
	end
	d3

end
p high_three([-10,-10,1,3,2])
