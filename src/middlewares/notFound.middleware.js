const notFound = (req, res, next) => {
  res.status(404).json({ msg: 'Sorry can\'t find that' })
}

module.exports = notFound
