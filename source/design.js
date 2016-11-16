const sf = require('sheetify')

const styles = sf`
  :root {
    font-size: 4vw;    
  }

  * {
    box-sizing: border-box;
  }

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

  .p1 { padding: 1rem }

  main {
    padding: .25rem 1rem;
  }

  ul {
    margin: .5rem 0;
    padding: 0;
    list-style: none;
  }

  li {
    margin: 0;
    padding: .25rem 0;
    position: relative;
  }

  a {
    display: block;
    color: #00f;
    text-decoration: none;
  }

  a:visited {
    color: #800080;
  }

  .indent {
    text-indent: -2rem;
    margin-left: 2rem;
  }

  .load {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

module.exports = () => document.querySelector('html').classList.add(styles)