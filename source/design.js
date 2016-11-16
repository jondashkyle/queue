const sf = require('sheetify')

const styles = sf`
  :root { font-size: 4vw }
  * { box-sizing: border-box }

  body {
    background: #fff; 
    color: #000;
    font-family: arial, sans-serif;
    padding: 0;
    margin: 0;
    letter-spacing: -0.03em;
    font-size: 1rem;
    line-height: 1.25;
    text-transform: lowercase;
  }

  .tac { text-align: center }
  .fwb { font-weight: bold }
  .ttu { text-transform: uppercase }
  .sans { font-family: arial, sans-serif }
  .serif { font-family: times, serif }

  main { padding: 1.5rem 2rem }

  ul {
    margin: .5rem 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: block;
    margin: 0;
    padding: 0;
    position: relative;
  }

  a {
    color: #00f;
    text-decoration: none;
  }

  a:visited {
    color: #ccc;
  }

  .indent {
    text-indent: -1rem;
    margin-left: 1rem;
  }

  .load {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .arrow {
    display: block;
    position: absolute;
    height: .5rem;
    width: .5rem;
    top: 0.1rem;
    right: 0.1rem;
  }

  .arrow svg {
    display: block;
  }
`

module.exports = () => document.querySelector('html').classList.add(styles)