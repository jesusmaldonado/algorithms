require 'pry-byebug'

class Object
	include ObjectSpace
	def sexy_memory
		binding.pry
		memsize_of(self)
	end
end

class BSTNode
	attr_accessor :left, :right, :parent
	attr_reader :value
	def initialize(value)
		self.value = value
	end

	def inspect
		self.value
	end
	protected
	attr_writer :value
end


class BST
	attr_reader :root
	def initialize
		self.root = nil
	end

	def empty?
		@root.nil?
	end

	def include?(value)
		node, parent = find(value)
		!!node
	end

	def insert(value)
		if empty?
			@root = BSTNode.new(value)
			return true
		end
		node, parent = find(value)
		return false if include?(value)

		new_node = BSTNode.new(value)
		new_node.parent = parent
		if new_node.value < parent.value
			parent.left = new_node
		else
			parent.right = new_node
		end
	end

	def print_flipped
		@curved = []
		recurse
	end

	def recurse(node=@root, level=0)
		result = ''
		return result unless node
		(0...level).each do |j|
			if @curved[j]
				result += ( j == level - 1 ? '`---'  : ' ' * 4 )
			else
				result +=  ( j  == level - 1 ? '+---' : '|   ' )
			end
		end
		result += "#{node.value}\n"
		if node.right
			@curved[level] = false
			result += recurse(node.right, level + 1)
		end
		if node.left
			@curved[level] = true
			result += recurse(node.left, level + 1)
		end


		result
	end

	def inspect
		self.to_s
	end

	def to_s
		if empty?
			"[empty bst]"
		else
			res , = to_s_rec(root)
			res.shift
			res.join "\n"
		end
		puts res
	end

	def to_s_rec(node)
		str = "#{node.value}"
		str = "  " if str.empty?

		if node.left
			l, wl = to_s_rec(node.left)
		else
			return [["|".center(str.size) , str], str.size]
		end
		if node.right
			r, wr = to_s_rec(node.right)
		else
			r, wr = [], -1
		end

		sumw = wl + wr + 1
		w = [sumw, str.size].max
		indent = (w - sumw) / 2
		res = merge_rows(l, r, indent, indent + wl + 1)

		vert = "|".center(w)

		con = res[0].gsub("|", "+")
		con[vert.index("|")] = ?+
		con.sub!(/\+(.+)\+/) {|s| s.gsub(" ", "-")}
		[[vert, str.center(w), vert, con] + res, w]
	end

	def merge_rows(rows1, rows2, p1, p2)
		i = 0
		res = []
		while i < rows1.size || i < rows2.size
			res << " " * p1
			res.last << rows1[i] if i < rows1.size
			if i < rows2.size
				res.last << " " * [0, p2 - res.last.size].max
				res.last << rows2[i]
			end
			i += 1
		end
		res
	end

	def in_order_traversal(node = @root)
		return if node.nil?
		in_order_traversal(node.left)
		puts node.value.to_s
		in_order_traversal(node.right)
	end

	def post_order_traversal(node = @root)
		return if node.nil?
		puts node.value.to_s
		post_order_traversal(node.left)
		post_order_traversal(node.right)
	end

	def pre_order_traversal(node = @root)
		return if node.nil?
		pre_order_traversal(node.left)
		pre_order_traversal(node.right)
		puts node.value.to_s
	end

	protected
	attr_writer :root
	def find(value)
		parent = nil
		node = self.root
		until node.nil?
			break if node.value == value
			parent = node
			if value < node.value
				node = node.left
			else
				node = node.right
			end
		end
		[node, parent]
	end

end
