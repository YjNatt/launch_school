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
    protein = CODON_TO_AMINO[codon]
    protein.nil? ? (raise InvalidCodonError) : protein
  end

  def self.of_rna(strand)
    codons = strand.scan(/.../).take_while do |codon|
      of_codon(codon) != 'STOP'
    end

    codons.map { |codon| of_codon(codon) }
  end
end

class InvalidCodonError < StandardError; end
