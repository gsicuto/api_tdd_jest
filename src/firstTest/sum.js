module.exports.sum = (num1, num2) => {
  if (isNaN(parseInt(num1) + parseInt(num2))) {
    throw new Error('invalid')
  }
  return parseInt(num1) + parseInt(num2)
}
