import App from 'src/components/App'
import { ElementType } from 'src/utils/types'
import 'src/styles/reset.css'
import 'src/styles/theme.css'

const init = () => {
  const app = new App(document.querySelector('#app') as ElementType)
  app.start()
}

window.onload = init
