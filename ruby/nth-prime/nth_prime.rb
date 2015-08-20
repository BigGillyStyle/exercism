class Prime
  class << self
    def nth(nth_prime = 1)
      raise ArgumentError.new('Must provide an integer greater than 0') unless (nth_prime.is_a?(Fixnum) && nth_prime > 0)
      @primes = []
      num = (2..Float::INFINITY).lazy.select {|x| prime?(x)}
      @primes << num.next until @primes.size == nth_prime
      @primes.last
    end

    def prime?(x)
      @primes.take_while {|prime| prime ** 2 <= x}
             .none? {|prime| x % prime == 0}
    end
  end
end
