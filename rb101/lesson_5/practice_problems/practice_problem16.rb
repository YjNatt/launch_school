HEXIDECIMAL = ('0'..'9').to_a + ('a'..'f').to_a

def uuid()
  uuid_str = ''
  sections = [8,4,4,4,12]
  sections.each do |num|
    num.times { uuid_str << HEXIDECIMAL.sample }
    uuid_str += '-' unless num == sections.last
  end
  uuid_str
end

p uuid()
p uuid()
p uuid()
p uuid()