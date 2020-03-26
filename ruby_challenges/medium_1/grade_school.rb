class School
  def initialize
    @grades = Hash.new { |grades, grade| grades[grade] = [] }
  end

  def add(name, grade)
    @grades[grade] << name
  end

  def grade(what_grade)
    @grades.fetch(what_grade, [])
  end

  def to_h
    @grades.sort.map { |grade, students| [grade, students.sort] }.to_h
  end
end
