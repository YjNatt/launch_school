def include_non_letters(str)
  up_down = false
  result = str.chars.map! do |char|
    up_down = !up_down
    if char =~ /[a-z]/i
      up_down ? char.upcase! : char.downcase!
      char
    else
      char
    end
  end
  p result.join
end

def dont_include_non_letters(str)
  up_down = true
  result = str.chars.map! do |char|
    if char =~ /[a-z]/i
      up_down ? char.upcase! : char.downcase!
      up_down = !up_down
      char
    else
      char
    end
  end
  p result.join
end

def staggered_case(str, include_letters)
  include_letters ?  include_non_letters(str) : dont_include_non_letters(str)
end

p staggered_case('I Love Launch School!', false) == 'I lOvE lAuNcH sChOoL!'
p staggered_case('ALL CAPS', false) == 'AlL cApS'
p staggered_case('ignore 77 the 444 numbers', false) == 'IgNoRe 77 ThE 444 nUmBeRs'

