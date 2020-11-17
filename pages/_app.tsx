import '../styles/globals.css'
import '../styles/tailwind.css'

import { SideNav } from '../components'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  
  return (
    <div id="root-page-elem" className="flex flex-col justify-center">
      <div className="flex">
        <div className="z-50 md:w-84">
          <SideNav/>
        </div>
        <div className="w-full md:w-body">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  )
}

export default MyApp
