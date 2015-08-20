class Prime
  class << self
    def nth(nth_prime = 1)
      raise ArgumentError.new('Must provide an integer greater than 0') unless (nth_prime.is_a?(Fixnum) && nth_prime > 0)

      prime_test = 1
      iter = 1
      begin
        if prime_test < 3
          prime_test += 1
        else
          prime_test += 2
        end
        iter += 1 if prime_test.is_prime?
      end while iter <= nth_prime
      prime_test
    end
  end
end

class Fixnum
  def is_prime?
    return false if self < 2
    return true if self == 2

    prime_divisor = 2
    upper_bound = Math.sqrt(self).to_i
    while prime_divisor <= upper_bound do
      return false if self % prime_divisor == 0
      if prime_divisor < 3
        prime_divisor += 1
      else
        prime_divisor += 2
      end
    end

    return true
  end
end
