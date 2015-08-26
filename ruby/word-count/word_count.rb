class Phrase
  VERSION = 3

  def initialize(phrase)
    @phrase = phrase
  end

  def word_count
    @phrase
      .downcase
      .scan(/(\w+'?\w+|\d+)/)
      .each_with_object(Hash.new(0)) { |word, acc| acc[word[0]] += 1 }
  end
end
