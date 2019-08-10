=begin
input: array (a persons full name 2 or more arguements)
       hash (two keys :title and :occupation)
output: a string greeting using the full name and mention the person's title
rules:  name can be 2 or more arguements
        what if the person has no title or occupation?
data structure / algorithm
  save variable full name to each element in the array
    join the array with ' '
  save title variable to hash key :title
  save occupation variable to hash key :occupation
  string interpolation hello, (name)! Nice to have a (title) (occupation) around.
=end
def greetings(name_arr, job_details)
  name = name_arr.join ' '
  title = job_details[:title]
  occupation = job_details[:occupation]

  "Hello, #{name}! Nice to have a #{title} #{occupation} around."
end

puts greetings( %w(John Q Doe), { title: 'Master', occupation: 'Plumber' })
