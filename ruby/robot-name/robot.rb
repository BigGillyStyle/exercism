require 'securerandom'

class Robot
  attr_reader :name

  def initialize
    generate_random_name
  end

  def reset
    generate_random_name
  end

  private

  def generate_random_name
    @name = random_letter + random_letter + random_digit + random_digit + random_digit
  end

  def random_letter
    ('A'..'Z').to_a.sample
  end

  def random_digit
    SecureRandom.random_number(10).to_s
  end
end
