class Queue

	def initialize(value)
		in = Stack.new
		out = Stack.new
		enqueue(value) if value
	end

	def emqueue(value)
		in.push(queue)
	end

	def dequeue
		if (out.empty?)
			out.push(in.pop) until in.empty?
			out.pop
		else
			out.pop
		end
	end

end
