# Question: a method that takes an array of strings, and returns a string that is all those strings concatenated together

# Casual
# Given an array of strings called "strings"
# Iterate through the array
#   - add a space at the end of each array except the last string in the array
#   - join the array into one string and save it to variable "result"
# Return result

# Formal
# START

# Given an array of strings called "strings"

# SET result = ""

# WHILE i = 0, i < strings.length, i + 1
#   IF i != strings.length - 1
#     result = result + strings[i] + " "
#   ELSE
#     result = result + strings[i]

# PRINT result

# END