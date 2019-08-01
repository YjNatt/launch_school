flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)
p flintstones.find_index{ |name| /Be/ =~ name }

# launch school solution

p flintstones.index { |name| name[0, 2] == "Be" }