def file_dictionary(files)
	output = []

	files.each do |file, item|
		if item.is_a?(Hash)
			folder = file
			nested_files = file_dictionary(item)
			nested_files.each { |nested_file| output << "#{folder}/#{nested_file}" }
		else
			output << file
		end
	end
	output
end
files = {
  'a' => {
    'b' => {
      'c' => {
        'd' => {
          'e' => true
        },

        'f' => true
      }
    }
  }
}
p file_dictionary(files)
