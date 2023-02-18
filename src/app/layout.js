import './globals.css'
import {Montserrat} from "@next/font/google"

const montserrat = Montserrat({
    weight: ["500","600","700"],
    subsets: ["latin", "latin-ext"],
    variable: "--font-montserrat",

})
export default function RootLayout({ children }) {
    // `${montserrat.className}`
  return (
    <html lang="en" >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={""}>
        {children}
      </body>
    </html>
  )
}
