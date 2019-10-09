=begin
  input: hsh
  output: array
  rules:  return colors of fruits. capitalized
          return size of vegetables. upcased
  ds / a
    iterate though each value
      if value type is fruit
        return colors.capitalized
      else
        rturn size.upcased
      

=end

hsh = {
  'grape' => {type: 'fruit', colors: ['red', 'green'], size: 'small'},
  'carrot' => {type: 'vegetable', colors: ['orange'], size: 'medium'},
  'apple' => {type: 'fruit', colors: ['red', 'green'], size: 'medium'},
  'apricot' => {type: 'fruit', colors: ['orange'], size: 'medium'},
  'marrow' => {type: 'vegetable', colors: ['green'], size: 'large'},
}

p (hsh.map do |_,details|
  if details[:type] == 'fruit'
    details[:colors].map { |color| color.capitalize }
  else
    details[:size].upcase
  end
end)