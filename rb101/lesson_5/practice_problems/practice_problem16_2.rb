=begin
output: string

ds / a
create array of hexideicimal numbers
create UUID foundation string
loop through each character in string
  if character is integer
    create an inner loop to push hexidecimal numbers integer times
  if character is '-' push '-'in string
=end

HEXIDECIMALS = (1..9).to_a + ('a'..'f').to_a
uuid = "8-4-4-4-12"
uuid.split("-").each_with_object([]) do |num, arr|
  section = []
  num.to_i.times { |_| section << HEXIDECIMALS.sample }
  arr << section.join
end.join'-'