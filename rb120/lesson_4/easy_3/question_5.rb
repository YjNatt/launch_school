class Television
  def self.manufacturer
    # method logic
  end
  
  def model
    # method logic
  end
end

tv = Television.new
tv.manufacturer
# exception no method is found
tv.model
# executes model method

Television.manufacturer
# executes Class method self.manufacturer
Television.model
# exception no method found