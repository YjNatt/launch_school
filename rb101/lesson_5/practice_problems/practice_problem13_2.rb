=begin
  input: [nested arrays]
  output: [sorted nested arrays]
  rules: sort by only odd digits
  ds / a
    iterate through array
      sort by
        select only odd numbers
         a <=>

=end

arr = [[1, 6, 7], [1, 4, 9], [1, 8, 3]]

p arr.sort_by { |arr| arr.select { |num| num.odd? } }