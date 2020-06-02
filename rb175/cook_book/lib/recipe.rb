class Recipe
  attr_reader :name, :ingredients, :steps

  def initialize(name)
    @name = name
    @ingredients = {}
    @steps = {}
  end

  def add_ingredient(id, ingredient)
    @ingredients[id] = ingredient
  end

  alias :edit_ingredient :add_ingredient

  def ingredients
    @ingredients.sort.to_h
  end

  def delete_ingredient(id)
    @ingredients.delete(id)
  end

  def add_step(id, step)
    @steps[id] = step
  end

  alias :edit_step :add_step

  def steps
    @steps.sort.to_h
  end

  def delete_step(id)
    @steps.delete(id)
  end
end
