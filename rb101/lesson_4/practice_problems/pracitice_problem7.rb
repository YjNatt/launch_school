statement = "The Flintstones Rock"

hash = Hash.new
statement.each_char { |c| hash[c] = statement.count(c) if c != ' ' }
p hash.sort