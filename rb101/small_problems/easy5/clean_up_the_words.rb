def cleanup(str)
  str.gsub(/\W+/, " ")
end

cleanup("---what's my +*& line?")

# further exploration

def cleanup(str)
  result = ""
  str.each_char do |char|
    if  ("a".."z").cover?(char) || ("A".."Z").cover?(char)
      result << char
    else
      result << " " unless result[-1] == " " 
    end
  end
  result
end