class AngryCat
  def initialize(age, name)
    @age = age
    @name = name
  end

  def age
    puts @age
  end

  def name
    puts @name
  end

  def hiss
    puts "Hissssss!!!"
  end
end

george = AngryCat.new(2, "George")
sam    = AngryCat.new(4, "Sam")