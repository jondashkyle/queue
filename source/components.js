const ov = require('object.values')
const sf = require('sheetify')
const h = require('bel')

const iconArrow = () => h`<a href="https://github.com/jondashkyle/queue" class="arrow" target="_blank"><svg width=".5rem" height=".5rem" viewBox="0 0 41 41"> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <polygon fill="#000000" points="40.7415143 0.596170562 40.7067015 31.7536988 32.6997389 31.7536988 32.7693647 14.2776327 6.45082682 40.5961706 0.741514372 34.8868581 27.0600522 8.56832024 9.58398604 8.49869452 9.61879897 0.526544777"></polygon> </g> </svg></a>`

const elEntry = data => h`
  <li>
    <div class="indent">
      <a href="${data.href}">${data.text}</a>
    </div>
  </li>
`

const elGroup = data => h`
  <li>
    <div class="ttu sans">${data.heading}</div>
    <ul class="sans">${ov(data.entries).map(entry => elEntry(entry))}</ul>
  </li>
`

const elList = data => h`
  <ul>
    ${ov(data).map(group => elGroup(group))}
  </ul>
`

module.exports = { iconArrow, elEntry, elList }
