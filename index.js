function greet(name = "world") {
  return `hello ${name}`;
}

if (require.main === module) {
  console.log(greet());
}

module.exports = { greet };
