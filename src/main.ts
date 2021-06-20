import App from 'src/components/App'
import { APP } from 'src/utils/constants'
import { ElementType } from 'src/utils/types'
import 'src/styles/reset.css'
import 'src/styles/theme.css'

const init = () => {
  const app = new App(APP as ElementType)
  app.start()
}

window.onload = init
