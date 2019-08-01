ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 402, "Eddie" => 10 }
p ages.select! { |name, age| age <= 100 }

# Launch school solution
ages.keep_if { |_, age| age < 100 }
