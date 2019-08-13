=begin
input: integer (number of lights and repetitions)
result: array (which lights are left on)
rules: toggle the lights from 1 to n
        -on each pass only toggle the lights multiples of the current iteration
        must return an array
data structure / algorithm:
create lights hash == {}
from 1 to n create a key value pair in the lights hash
  key == num
  value == false
create iteration count = 1
create loop
  if num is % iteration == 0
    flip the switch
  increase iteration count
change lights hash into an array with only keys
=end

def sentence_convert(arr)
  if arr.length > 2
    "#{arr[0..-2].join ', '} and #{arr[-1]} are "
  elsif arr.length == 2
    "#{arr.join ' and '} are "
  else
    "#{arr} is "
  end
end

def lights_on(num)
  lights = {}
  1.upto(num) { |i| lights[i] = false }

  1.upto(num) do |i|
    lights.each_key do |num|
      lights[num] = !lights[num] if num % i == 0
    end
  end

  lights_on = lights.select{ |k,v| v == true }.keys
  lights_off = lights.select{ |k,v| v == false }.keys
  
  "lights #{sentence_convert(lights_off)}off; #{sentence_convert(lights_on)}on"

end

p lights_on(1000)