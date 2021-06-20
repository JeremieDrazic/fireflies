import { gsap } from 'gsap'
import { RoughEase } from 'gsap/EasePack'
import Nav from 'src/components/Nav'
import Form from 'src/components/Form'
import './index.css'

gsap.registerPlugin(RoughEase)

class App {
  start = () => {
    const nav = new Nav()
    nav.init()

    const form = new Form()
    form.init()
  }
}

export default App
