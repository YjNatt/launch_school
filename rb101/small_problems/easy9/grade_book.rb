=begin
input: 3 integers (score values)
output: string (letter grade)
rules: determine the average of the three integers
       return a letter grade based on the average
data structure / algorithm:
  create const of grade letter as keys and array of integers as values
  add the three integers and divide by 3
    save result to varaiable 'average'
  use the average as the value and return the key of that value
=end

GRADES_SCORE = [90, 80, 70, 60]
GRADE_LETTER = ['A', 'B', 'C', 'D', 'F']

# def get_grade(score1, score2, score3)
#   average = (score1 + score2 + score3) / 3
#   num = 0
#   GRADES_SCORE.each_with_index do |score, index|
#     if score < average
#       num = index
#       break
#     else
#       num = 4
#     end
#   end
#   p num
#   p GRADE_LETTER[num]
# end

def get_grade(score1, score2, score3)
  average = (score1 + score2 + score3) / 3
  return 'A+' if average > 100
  case average
  when 90..100 then 'A'
  when 80..89  then 'B'
  when 70..79  then 'C'
  when 60..69  then 'D'
  else              'F'
  end
end

p get_grade(95, 90, 150)# == "A"
p get_grade(50, 50, 95) == "D"
