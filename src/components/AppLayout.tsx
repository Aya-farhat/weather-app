import type { ReactNode } from "react"
import Footer from "./Footer"

const AppLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className="h-screen w-full bg-blue-200 flex items-center justify-center">
        <div className="w-full max-w-4xl bg-blue-100 rounded-2xl shadow-xl overflow-hidden">
            <main className="p-12 ">
                {children}
            </main>
            <Footer/>

        </div>
        
      
    </div>
  )
}

export default AppLayout
