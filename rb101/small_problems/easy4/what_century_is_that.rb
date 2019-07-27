def century(year)
  number = year / 100.0
  century = number.ceil(0.1)
  century_str_ends(century)
end

def century_str_ends(what_year)
  year = what_year.to_s

  case year.to_i % 100
  when 11
    return year += "th"
  when 12
    return year += "th"
  when 13
    return year += "th"
  end

  if year.end_with?('1')
    year += 'st'
  elsif year.end_with?('2')
    year += 'nd' 
  elsif year.end_with?('3')
    year += 'rd'
  else
    year += 'th'
  end
  year
end

p century(2000) == '20th'
p century(2001) == '21st'
p century(1965) == '20th'
p century(256) == '3rd'
p century(5) == '1st'
p century(10103) == '102nd'
p century(1052) == '11th'
p century(1127) == '12th'
p century(11201) == '113th'