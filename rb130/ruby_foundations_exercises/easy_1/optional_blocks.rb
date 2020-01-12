def compute
  block_given? ? yield : "Does not compute."
end

p compute { 5 + 3 } == 8
p compute { 'a' + 'b' } == "ab"
p compute == 'Does not compute.'

def compute_v2(item)
  return 'Does not compute.' unless block_given?
  yield(item)
end

p compute_v2(5) { |num| num + 5 }
p compute_v2('c') { |char| 'a' + 'b' + char }
p compute_v2(true)