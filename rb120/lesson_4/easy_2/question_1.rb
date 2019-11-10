class Oracle
  def predict_the_future
    "You will " + choices.sample
  end

  def choices
    ["eat a nice lunch", "take a nap soon", "stay at work late"]
  end
end

oracle = Oracle.new
# create an instance of the Oracle class

p oracle.predict_the_future
# invoke the #predict_the_future method on the instance which will return
# "You will " the pick a random choice in the method choices