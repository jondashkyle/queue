const h = require('bel')
const choo = require('choo')

const components = require('./components')
const design = require('./design')
const parser = require('./parser')

const app = choo()
design()

app.model({
  state: {
    loaded: false,
    entries: { }
  },
  subscriptions: [
    (send, done) => {
      parser({
        src: 'https://dl.dropboxusercontent.com/u/193780/queue.txt'
      })
      .catch(err => console.log(err))
      .then(data => send('entries', data, done))
    }
  ],
  reducers: {
    entries: (state, data) => ({
      loaded: true,
      entries: data
    }),
    update: (state, data) => ({ title: data })
  }
})

const view = (state, prev, send) => state.loaded
  ? h`<main>${components.elList(state.entries, send)}</main>`
  : h`<div class="load">loading</div>`

app.router(['/', view])

const tree = app.start()
module.exports = () => document.body.appendChild(tree)