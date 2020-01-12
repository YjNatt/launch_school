# def divisors(int)
#   divisors_arr = [1, int]
#   num = 2
#   loop do
#     break if num > (int / 2)
#     if int % num == 0
#       divisors_arr << num
#       divisors_arr << (int / num)
#     end
#     num += 1
#   end

#   divisors_arr.uniq.sort
# end

def divisors(num)
  results = []

  1.upto(Math.sqrt(num).to_i) do |num2|
    if num % num2 == 0
      results << num2
      results << (num / num2)
    end
  end

  results
end

p divisors(1)# == [1]
p divisors(7) #== [1, 7]
p divisors(12)# == [1, 2, 3, 4, 6, 12]
p divisors(98)# == [1, 2, 7, 14, 49, 98]
p divisors(99400891)# == [1, 9967, 9973, 99400891] 
p divisors(999962000357)
