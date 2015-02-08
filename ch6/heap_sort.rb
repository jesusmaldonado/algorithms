require 'pry'
##In Ruby, the key methods of a heap are
##left --> 2n+1
##right --> 2n + 2
##parent --> (n - 1)/2
##where n is the number of nodes
##unless we initialize a heap w nil, then we can just do 2n, 2n + 1, and n/2 respectively for these operations
##implementation taken from rubyquiz.com/quiz40.html
class Heap



  def initialize( *elements, &comp)
    @heap = [nil]
    @comp ||= lambda {|p, c| p <=> c}
    insert(*elements)
  end

  def insert(*elements)
    elements.each do |element|
      @heap << element
      sift_up
    end
  end

  def inspect
    @heap[1..-1]
  end

  def heapsize
    @heap.size - 1
  end

  def [](num)
    @heap[num]
  end

  def root
    @heap[1]
  end

  def left(num)
    return "this is the root of the tree" if num == 1
    @heap[2 * num]
  end

  def right(num)
    return "this is the root of the tree" if num == 1
    @heap[2 * num + 1]
  end

  def parent(num)
    return "this is the root of the tree" if num == 1
    @heap[num /2]
  end

  private
  def sift_up
    i = @heap.size - 1
    until i == 1
      j = i /2
      break if @comp[@heap[i], @heap[j]] <= 0

      @heap[j], @heap[i] = @heap[i], @heap[j]
      i = j
    end
  end




end
