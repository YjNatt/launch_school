items = ['apples', 'corn', 'cabbage', 'wheat']

def gather(items)
  puts "Let's start gathering food."
  yield(items)
  puts "We've finished gathering!"
end

puts "------ Question: 1 ------"
gather(items) do |*fresh_produce , wheat|
  puts fresh_produce.join(', ')
  puts wheat
end
puts ""

puts "------ Question: 2 ------"
gather(items) do |fruit, *vegitable, wheat|
  puts  fruit
  puts  vegitable.join(', ')
  puts  wheat
end
puts ""

puts "------ Question: 3 ------"
gather(items) do |fruit, *other|
  puts fruit
  puts other.join(', ')
end
puts ""

puts "------ Question: 4 ------"
gather(items) do |fruit, grain, vegitable, wheat|
  puts "#{fruit}, #{grain}, #{vegitable}, #{wheat}"
end