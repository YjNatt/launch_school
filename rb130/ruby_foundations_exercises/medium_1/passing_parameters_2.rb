def splat(arr)
  yield(arr)
end

birds = %w(raven finch hawk eagle)

splat(birds) do |_, _, *raptors|
  puts "Raptors: #{raptors.join(', ')}"
end