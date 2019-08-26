# BLOCKS = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'],
#           ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'],
#           ['V', 'I'], ['L', 'Y'], ['Z', 'M']]

# def block_word?(str)
#   used_blocks = []
#   str.upcase.each_char do |c|
#     BLOCKS.each do |pair| 
#       used_blocks << pair if pair.include?(c)
#     end
#   end
#   used_blocks == used_blocks.uniq
# end

BLOCKS = %w( BO XK DQ CP NA GT RE FS JW HU VI LY ZM )

def block_word?(str)
  up_string = str.upcase
  BLOCKS.none? { |arr| up_string.count(arr) >= 2 }
end

p block_word?('BATCH')
p block_word?('BUTCH')
p block_word?('jest')