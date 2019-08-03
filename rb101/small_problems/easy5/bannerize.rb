=begin
input: string
output: take string and print it within a box
rules: -string will be a short line of text (how short is short?)
       -the input will alwas fit in your teminal
       -empty string will produce an empty box

datastructue / algorithm
create variable top border and bottom border 

=end

def print_in_box(str)
  
  length = str.length + 2
  
  top_bottom = "+#{ '-' * length}+"
  border_padding = "|#{ ' '*length}|"
  content = "| #{str} |"
  
  puts top_bottom
  puts border_padding
  puts content
  puts border_padding
  puts top_bottom
  
  end
  
  print_in_box('To boldly go where no one has gone before.')