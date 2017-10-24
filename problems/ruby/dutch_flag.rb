def dutch_flag(arr)
	output = []
	counts = Hash.new {|k, v| k[v] = 0}
	array.each {|val| counts[val] += 1}
	numbers = counts.keys.sort!
	numbers.each{|num| counts[num].times { output << num } }
	output
end

def sort_balls(balls)
	red_idx = balls.length - 1
	blue_idx = 0
	green_idx = 0
	while blue_idx <= red_idx
		if balls[blue_idx] == "R"
			balls[blue_idx], balls[red_idx] = balls[red_idx], balls[blue_idx]
			red_idx -= 1
		elsif balls[blue_idx] == "B"
			balls[blue_idx], balls[green_idx] = balls[green_idx], balls[blue_idx]
			green_idx += 1
			blue_idx += 1
		elsif balls[blue_idx] == "G"
			blue_idx += 1
		end
	end
	balls
end

p sort_balls(["R", "G", "B", "R", "G", "B", "G", "G"])
