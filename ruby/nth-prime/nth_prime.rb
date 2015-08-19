class Prime
  class << self
    def nth(n = 1)
      raise ArgumentError.new('Must provide an integer greater than 0') unless (n.is_a?(Fixnum) && n > 0)

      num = 1
      i = 1
      begin
        if num < 3
          num += 1
        else
          num += 2
        end
        i += 1 if num.is_prime?
      end while i <= n
      num
    end

  end
end

class Fixnum
  def is_prime?
    return false if self < 2
    return true if self == 2

    i = 2
    upper_bound = Math.sqrt(self).to_i
    while i <= upper_bound do
      return false if self % i == 0
      i += 1
    end

    return true
  end
end
