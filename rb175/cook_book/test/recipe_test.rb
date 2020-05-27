require "minitest/autorun"
require_relative "../lib/recipe.rb"

class RecipeTest < Minitest::Test
  def setup
    @recipe = Recipe.new("Soup")
  end

  def test_recipe_name
    assert_equal "Soup", @recipe.name
  end

  def test_add_ingredient
    @recipe.add_ingredient(1, "1 egg")
    assert_equal "1 egg", @recipe.ingredients[1]
  end

  def test_edit_ingredient
    @recipe.add_ingredient(1, "1 egg")
    @recipe.edit_ingredient(1, "2 eggs")
    assert_equal "2 eggs", @recipe.ingredients[1]
  end

  def test_delete_ingredient
    @recipe.add_ingredient(1, "1 egg")
    assert_equal 1, @recipe.ingredients.size

    @recipe.delete_ingredient(1)
    assert_equal 0, @recipe.ingredients.size
  end

  def test_add_step
    @recipe.add_step(1, "add salt")
    assert_equal "add salt", @recipe.steps[1]
  end

  def test_ingredients_getter_method
    @recipe.add_ingredient(2, "ingredient 2")
    @recipe.add_ingredient(1, "ingredient 1")
    ingredients = [[1, "ingredient 1"], [2, "ingredient 2"]]
    assert_equal ingredients, @recipe.ingredients.to_a
  end
end
