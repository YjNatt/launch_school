def leap_year?(year)
  leap = 0
  leap += 1 if year % 4 == 0
  leap -= 1 if year % 100 == 0
  leap += 1 if year % 400 == 0
  leap > 0
end

p leap_year?(2016) == true
p leap_year?(2015) == false
p leap_year?(2100) == false
p leap_year?(2400) == true
p leap_year?(240000) == true
p leap_year?(240001) == false
p leap_year?(2000) == true
p leap_year?(1900) == false
p leap_year?(1752) == true
p leap_year?(1700) == false
p leap_year?(1) == false
p leap_year?(100) == false
p leap_year?(400) == true
