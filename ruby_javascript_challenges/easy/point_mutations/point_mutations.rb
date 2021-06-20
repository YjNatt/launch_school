class DNA
  def initialize(strand)
    @strand = strand
  end

  def hamming_distance(other_strand)
    size = [@strand.size, other_strand.size].min
    count = 0

    (0...size).each do |index|
      original_nucleotide = @strand[index]
      other_nucleotide = other_strand[index]

      count += 1 if original_nucleotide != other_nucleotide
    end

    count
  end
end
