const uuid = require('uuid')
const r = require('reqwest')
const x = require('xtend')

const isBreak = str => (str === '')
const isHeading = str => (str.charAt(0) === '#')
const getHeading = str => str.slice(2)

const split = data => {
  return data.split('\n')
}

const format = data => {
  const result = { }
  let lastHeading = {
    pos: -1,
    str: ''
  }

  const isNextEntry = pos => !isHeading(data[pos + 1])

  const setHeading = (str, pos) => {
    const heading = getHeading(str)
    lastHeading = {
      str: heading,
      pos: pos
    }
    result[getHeading(str)] = {
      heading: heading,
      entries: { }
    }
  }

  const setEntry = (str, pos) => {
    const text = data[pos + 1]
    const href = data[pos + 2]
    result[lastHeading.str].entries[uuid.v4()] = { text, href }
  }

  data.forEach((str, pos) => {
    isHeading(str) ? setHeading(str, pos) : false
    isBreak(str) && isNextEntry(pos) ? setEntry(str, pos) : false
  })

  return result
}

const parse = opts => {
  const options = x({
    src: ''
  }, opts)

  return r({
    url: options.src,
    type: 'html'
  })
  .then(split)
  .then(format)
}

module.exports = opts => parse(opts)