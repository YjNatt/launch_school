def reduce(array, default_value=nil)
  counter = 0 
  acc     =  if default_value == nil
                  counter += 1
                  array[0]
             else 
              default_value
             end

  while counter < array.size
    acc = yield(acc, array[counter])
    counter += 1
  end

  acc
end