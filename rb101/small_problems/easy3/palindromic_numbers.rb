def palindromic_number?(num)
  p num.to_s
  num.to_s == num.to_s.reverse
end

p palindromic_number?(00034543000) # == true
p palindromic_number?(123210) == false
p palindromic_number?(22) == true
p palindromic_number?(5) == true

count = 2
loop do
  p 00034543000.to_s(count)
  count += 1
  break if count == 32
end