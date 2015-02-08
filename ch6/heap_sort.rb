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
      sift_down
    end
  end

  def extract_max
    return "no elements in heap" if self.heapsize < 1
    extract = @heap[1]
    if self.heapsize > 1
      @heap[1] = @heap.pop
      sift_up
    else
      @heap.pop
    end
    extract
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
  def sift_down
    i = @heap.size - 1
    until i == 1
      j = i /2
      break if @comp[@heap[i], @heap[j]] <= 0

      @heap[j], @heap[i] = @heap[i], @heap[j]
      i = j
    end
  end

  def sift_up
    i = 1
      loop do
        c = 2 * i
        break if c >= @heap.size
        c += 1 if c + 1 < @heap.size && @heap[c + 1] > @heap[c]
        break if @comp[@heap[c], @heap[i]] <= 0
        @heap[c], @heap[i] = @heap[i], @heap[c]
        i = c
      end
  end




end
