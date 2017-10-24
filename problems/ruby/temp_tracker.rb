
class TempTracker

	attr_reader :max, :min, :mode, :mean

	def initialize(value)
		@store = Hash.new {|h, k| h[k] = 0}
		@max, @min, @mode, @mean= nil, nil, nil, nil
		@max_count = 0
		@counts = 0
		@mode = []
		@sum = 0

		insert(value) if value
	end

	def insert(value)
	@store[value] += 1
		@counts += 1
		@sum += value
		update_attributes!(value)
	end

	def delete(value)
		raise “value does not exist” if @store[value] == 0
		@store[value] -= 1
		@counts -= 1
		@sum -= value
	end

protected

attr_accessor :store, :max_count, :sum
attr_writer :max, :min, :mean, :mode

	def update_attributes!(value)
		@max = value if @max.nil? || @max < value
		@min = value if @min.nil? || @min > value
		@max_count = @store[value] if @max_count < @store[value]
		@mode = value if @max_count == @store[value]
		@mean = (@counts == 0 ? nil : @sum / @counts)
	end


end


##TempTracker.new(5,4,2,1)
