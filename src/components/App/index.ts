import Nav from '@components/Nav'
import Form from '@components/Form'
import { NAV, FORM } from '@utils/constants'
import './index.css'

class App {
  readonly appRoot: HTMLDivElement

  readonly navEl: HTMLElement | null

  readonly formEl: HTMLDivElement | null

  constructor(appRoot: HTMLDivElement) {
    this.appRoot = appRoot
    this.navEl = appRoot.querySelector(NAV)
    this.formEl = appRoot.querySelector(FORM)
  }

  start = () => {
    const nav = new Nav(this.navEl)
    nav.init()

    const form = new Form(this.formEl)
    form.init()
  }
}

export default App
