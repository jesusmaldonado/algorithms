#bfs finds shortest path but not necessarily the quickest time to go to a target
#dfs finds the target most quickly
##this is a dfs

def balanced(root)
	steps_right = 0
	steps_left = 0
	potential_min = root
	potential_max = root

	loop do
		if potential_min.left
			potential_min = potential_min.left
			steps_left += 1
		end
		if potential_max.right
			potential_max = potential_max.right
			steps_right += 1
		end

		return false if Math.abs(steps_left - steps_right) > 1
		return true if potential_min.left.nil? && potential_max.right.nil?
	end
end
