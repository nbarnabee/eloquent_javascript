function fizzbuzz() {
  for (let i = 1; i <= 15; i++) {
    output = !(i % 3)
      ? !(i % 5)
        ? "Fizzbuzz"
        : "Fizz"
      : !(i % 5)
      ? "Buzz"
      : i;
    console.log(output);
  }
}

// I fully admit that this is ridiculous and unreadable.
