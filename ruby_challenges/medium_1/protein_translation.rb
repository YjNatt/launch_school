class Translation
  CODON_TO_AMINO = {
    'AUG' => 'Methionine',
    'UUA' => 'Leucine',
    'UUG' => 'Leucine',
    'UUU' => 'Phenylalanine',
    'UUC' => 'Phenylalanine',
    'UCU' => 'Serine',
    'UCC' => 'Serine',
    'UCA' => 'Serine',
    'UCG' => 'Serine',
    'UAU' => 'Tyrosine',
    'UAC' => 'Tyrosine',
    'UGU' => 'Cysteine',
    'UGC' => 'Cysteine',
    'UGG' => 'Tryptophan',
    'UAA' => 'STOP',
    'UAG' => 'STOP',
    'UGA' => 'STOP'
  }

  def self.of_codon(codon)
    CODON_TO_AMINO[codon]
  end

  def self.of_rna(strand)
    raise InvalidCodonError if /[^UAG]/.match?(strand)

    codons = strand.scan(/.../).take_while do |codon|
      of_codon(codon) != 'STOP'
    end

    codons.map { |codon| of_codon(codon) }
  end
end

class InvalidCodonError < StandardError; end
