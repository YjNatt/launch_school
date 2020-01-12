def step(start_point, end_point, step)
  count = start_point
  until count > end_point do
    yield(count)
    count += step
  end
end

step(1, 10, 3) { |value| puts "value = #{value}" }