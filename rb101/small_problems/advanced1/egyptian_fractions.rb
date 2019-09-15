# def egyptian(r_num)
#   result = []
#   fraction = r_num
#   n = fraction.numerator
#   d = fraction.denominator

#   loop do
#     result << Rational(d, n).ceil
#     fraction = Rational(n, d) - Rational(1, Rational(d, n).ceil)
#     n = fraction.numerator
#     d = fraction.denominator
#     break if n == 0
#   end
#   result
# end

def fibonacci(fraction)
  p n = fraction.numerator
  p d = fraction.denominator
  p top = -d % n
  p bot = d*((d/n.to_f).ceil)
   Rational(1, (d/n.to_f).ceil) + Rational(top, bot)
end

p fibonacci(Rational(2,1))


def egyptian(r_num)
  n = r_num.numerator
  d = r_num.denominator



end

# p egyptian(Rational(1,2))