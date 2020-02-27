class DNA
  def initialize(strand)
    @original_strand = strand
  end

  def hamming_distance(new_strand)
    sml_strand, lrg_strand = [@original_strand, new_strand].min(2) do |str1, str2|
      str1.length <=> str2.length
    end

    count = 0

    sml_strand.chars.each_with_index do |letter, idx|
      count += 1 if letter != lrg_strand[idx]
    end

    count
  end
end

DNA.new('ACT').hamming_distance('GGA')
