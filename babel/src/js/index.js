import '../css/index.css'

import text from './text'

text()


if (module.hot) {
  module.hot.accept('./text.js', function() {
    console.log('he recargado en caliente')
    text()
  })
}