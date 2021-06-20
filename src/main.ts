import App from 'src/components/App'
import 'src/styles/reset.css'
import 'src/styles/theme.css'

const init = () => {
  const app = new App()
  app.start()
}

window.onload = init
