# flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "BamBam"]

# flintstones.each_with_object({}) do |name, hsh| 
#   hsh[name] = flintstones.index(name)
# end

# ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10, "Marilyn" => 22, "Spot" => 237 }
# ages.reduce(0) { |sum, pair| sum + pair[1] }

# ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 402, "Eddie" => 10 }
# p ages.reject { |name, age| age > 100 }

# ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10, "Marilyn" => 22, "Spot" => 237 }
# ages.values.min

# flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)
# flintstones.index { |name| name.start_with?("Be") }

# flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)
# flintstones.map! { |name| name[0,3] }

# statement = "The Flintstones Rock"

# alphabet = ('a'..'z').to_a

# characters = statement.chars.keep_if do |char|
#   alphabet.include?(char.downcase) 
# end.sort

# hsh = characters.each_with_object({}) do |char, hsh|
#         hsh.key?(char) ? hsh[char] += 1 : hsh[char] = 1
#       end 
# hsh

# words = "the flintstones rock"
# words_array = words.split.map do |word|
#               word.capitalize
#             end

# p words_array.join(' ')

munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}

munsters.each do |name, info|
  if info['age'] < 18
    info['age_group'] = 'kid'
  elsif info['age'] < 65
    info['age_group'] = 'adult'
  else
    info['age_group'] = 'senior'
  end
end
puts munsters
