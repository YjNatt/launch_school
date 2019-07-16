# Question: a method that takes an array of integers, and returns a new array with every other element

# Casual
# Given a collection of intergers
# Make an empty array
# Iterate through the collection of integers
#   - if the index of the integer is zero or an even number
#     - go to next value
#   - otherwise add the value to the empty array
# Return the array

# Formal
# START

# Given a collection of intergers called "numbers"

# SET result = []

# WHILE i=0, i <= length of numbers, i+=1
#   IF numbers[i] == 0 or numbers[i] % 2 == 0
#     go to next value
#   ELSE
#     add value to result

# PRINT result

# END