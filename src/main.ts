import App from '@components/App'
import '@styles/reset.css'
import '@styles/theme.css'

const init = () => {
  const app = new App(document.querySelector('#app'))
  app.start()
}

window.onload = init
