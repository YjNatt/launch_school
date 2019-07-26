def xor?(arg_1, arg_2)
  arg_1 && !arg_2 || !arg_1 && arg_2 ? true : false
end

p xor?(5.even?, 4.even?)
p xor?(5.odd?, 4.odd?)
p xor?(5.odd?, 4.even?)
p xor?(5.even?, 4.odd?)
