const ov = require('object.values')
const h = require('bel')

const elEntry = data => h`
  <li class="indent">
    <a href="${data.href}">${data.text}</a>
  </li>
`

const elGroup = data => h`
  <li>
    <div class="ttu sans fwb">${data.heading}</div>
    <ul class="sans">${ov(data.entries).map(entry => elEntry(entry))}</ul>
  </li>
`

const elList = data => h`
  <ul>
    ${ov(data).map(group => elGroup(group))}
  </ul>
`

module.exports = { elEntry, elList }
