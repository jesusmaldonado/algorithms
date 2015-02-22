class Object
  def try(method, *args)
    self && self.send(method, *args)
  end
end

class AVLTreeNode
  attr_accessor :value, :parent, :left, :right, :depth

  def initialize(value)
    self.value = value
    self.depth = 1
  end

  def balance
    (right.try(:depth) || 0) - (left.try(:depth) || 0)
  end

  def balanced?
    balance.abs < 2
  end

  def parent_side
    return nil if parent.nil?
    parent.left == self ? :left : :right
  end

  def recalculate_depth!
    self.depth = [
      left.try(:depth) || 0,
      right.try(:depth) || 0
    ].max + 1
  end
end

class AVLTree
	attr_reader :root
  def initialize
    @root = nil
  end

  def empty?
    @root.nil?
  end

  def include?(value)
    vertex, parent = find(value)
    !!vertex
  end

  def insert(value)
    if empty?
      @root = AVLTreeNode.new(value)
      return true
    end

    vertex, parent = find(value)

    # Don't re-insert if tree already contains the vertex
    return false if vertex

    # Insert a new AVLTreeNode if not in the tree yet.
    vertex = AVLTreeNode.new(value)
    if value < parent.value
      parent.left = vertex
    else
      parent.right = vertex
    end
    vertex.parent = parent

    # Walk back up, updating depths and maybe rebalancing.
    update(parent)

    true
  end

	def print_tree
		queue = [self.root]
		current_level, next_level = 1 , 0
		until queue.empty?
			node = queue.shift
			current_level -= 1
			print "#{node.value} "

			if node.left
				next_level.times {}
				queue << node.left
				next_level += 1
			end
			if node.right
				queue << node.right
				next_level += 1
			end
			if current_level == 0
				print "\n"
				current_level, next_level = next_level, current_level
			end
		end
	end

  def traverse(vertex = @root, &prc)
    return if vertex.nil?
    traverse(vertex.left, &prc)
    # I pass the vertex too for testing purposes later.
    prc.call(vertex.value, vertex)
    traverse(vertex.right, &prc)
  end

	def size
		queue = [self.root]
		count = 0
		until queue.empty?
			node = queue.shift
			count += 1
			if node.left
				queue << node.left
			end
			if node.right
				queue << node.right
			end
		end
		count
	end

	def to_s
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
			@curved[level] = node.right.left ? false : true
			result += recurse(node.right, level + 1)
			if node.left
				@curved[level] = true
				result += recurse(node.left, level +1)
			end
		end
		result
	end


  protected
  def find(value)
    vertex, parent = @root, nil

    until vertex.nil?
      break if vertex.value == value

      parent = vertex
      if value < vertex.value
        vertex = vertex.left
      else
        vertex = vertex.right
      end
    end

    [vertex, parent]
  end

  def update(vertex)
    return if vertex.nil?

    if vertex.balance == -2
      # We'll left rotate around vertex
      if vertex.left.balance == 1
        # We may need to right rotate around vertex.left first.
        left_rotate!(vertex.left)
      end

      right_rotate!(vertex)
    elsif vertex.balance == 2
      # We'll right rotate around vertex
      if vertex.right.balance == -1
        # We need to left rotate around vertex.right first.
        right_rotate!(vertex.right)
      end

      left_rotate!(vertex)
    elsif vertex.balance.abs < 2
      # already balanced
    else
      # This should never happen.
      raise "WTF?"
    end

    vertex.recalculate_depth!
    update(vertex.parent)
  end

  def left_rotate!(parent)
    parent_parent, parent_side = parent.parent, parent.parent_side
    r_child = parent.right
    rl_child = r_child.try(:left)

    if parent_parent && parent_side == :left
      parent_parent.left = r_child
    elsif parent_parent && parent_side == :right
      parent_parent.right = r_child
    else
      @root = r_child
    end
    r_child.parent = parent_parent

    r_child.left = parent
    parent.parent = r_child

    parent.right = rl_child
    rl_child.parent = parent if rl_child

    parent.recalculate_depth!
  end

  def right_rotate!(parent)
    parent_parent, parent_side = parent.parent, parent.parent_side
    l_child = parent.left
    lr_child = l_child.try(:right)

    if parent_parent && parent_side == :left
      parent_parent.left = l_child
    elsif parent_parent && parent_side == :right
      parent_parent.right = l_child
    else
      @root = l_child
    end
    l_child.parent = parent_parent

    l_child.right = parent
    parent.parent = l_child

    parent.left = lr_child
    lr_child.parent = parent if lr_child

    parent.recalculate_depth!
  end
end

tree = AVLTree.new
nums = (1...100).to_a.sample(50).shuffle!
nums.each { |num| tree.insert(num) }
# tree.traverse { |num| p num }
nums.each do |num|
  fail unless tree.include?(num)
end

puts tree.to_s
