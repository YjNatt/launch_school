flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "BamBam"]
flintstones_hash = Hash.new
flintstones.each do |name|
  flintstones_hash[name] = flintstones.index(name)
end
p flintstones_hash

# Launch School Solution
flintstones_hash = {}
flintstones.each_with_index do |name, index|
  flintstones_hash[name] = index
end
