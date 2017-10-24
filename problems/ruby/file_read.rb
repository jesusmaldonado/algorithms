
##File.open, File.directory?, File.file?, Dir.new


##search on size, because all files may have different extensions and the contents may be long
def search_files(dir = Dir.home, count = 3)
	return [] if count == 0
	files_size = {}
	p dir
	directory = Dir.new(dir)
	duplicates = []
	directory.each do |file|
		file_not_readable = !File.readable?(File.join(dir, file))
		next if file_not_readable
		a = File.open(File.join(dir, file))
		next if a.nil?
		if File.directory?(a) &&
			duplicates += search_files(a, count - 1)
		elsif File.file?(a) && File.readable?(a)
			next if a.nil?
			if files_size[a.size]
				file1 = files_size[a.size]
				file2 = a
				if File.ctime(file1) < File.ctime(file2)
					duplicates << [file1.path, file2.path]
				else
					duplicates << [file2.path, file1.path]
				end
			else
				files_size[a.size] = a
			end
		end
	end
	duplicates
end

p search_files
