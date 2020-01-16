class TextAnalyzer
  def process
    file = File.open("sample.txt", 'r')
    yield(file.read)
    file.close
  end
end

analyzer = TextAnalyzer.new

analyzer.process do |text| 
  paragrahs = text.split("\n\n").count
  puts "#{paragrahs} paragrahs"
end

analyzer.process do |text| 
  lines = text.split("\n").count
  puts "#{lines} lines"
end

analyzer.process do |text| 
  words = text.split(" ").count
  puts "#{words} words"
end

