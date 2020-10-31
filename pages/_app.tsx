import '../styles/globals.css'
import '../styles/tailwind.css'

import { SideNav } from '../components'

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex">
        <SideNav/>
        <div className="w-full">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  )
}

export default MyApp
