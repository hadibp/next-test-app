"use client";


import { Inter } from 'next/font/google'
import './globals.css'

import { Provider } from 'react-redux';
import store from "./store/store";
const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>

    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
    </Provider>

  )
}
