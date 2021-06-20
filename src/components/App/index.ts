import { gsap } from 'gsap'
import { RoughEase } from 'gsap/EasePack'
import Nav from 'src/components/Nav'
import Form from 'src/components/Form'
import { NAV, FORM } from 'src/utils/constants'
import { ElementType } from 'src/utils/types'
import './index.css'

gsap.registerPlugin(RoughEase)

class App {
  readonly appRoot: ElementType

  readonly navEl: ElementType

  readonly formEl: ElementType

  constructor(appRoot: ElementType) {
    this.appRoot = appRoot
    this.navEl = appRoot?.querySelector(NAV)
    this.formEl = appRoot?.querySelector(FORM)
  }

  start = () => {
    const nav = new Nav(this.navEl)
    nav.init()

    const form = new Form(this.formEl)
    form.init()
  }
}

export default App
