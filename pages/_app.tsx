import '../styles/globals.css'
import '../styles/tailwind.css'

import { SideNav } from '../components'

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex">
        <div className="z-50 lg:w-84">
          <SideNav/>
        </div>
        <div className="w-full lg:w-body">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  )
}

export default MyApp
