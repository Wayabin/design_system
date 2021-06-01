<<<<<<< HEAD
import React, { useEffect } from 'react'
import BasicLayout from '../components/Templates/Layouts/BasicLayout/BasicLayout'
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()
  useEffect(() => {
    router.replace('/store')
  }, [])
  return <BasicLayout />
}

Home.getInitialProps = async ({ res }) => {
  if (res) {
    // On the server, we'll use an HTTP response to
    // redirect with the status code of our choice.
    // 307 is for temporary redirects.
    res.writeHead(307, { Location: '/store' })
    res.end()
  }
=======
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { CustomButton, CustomButtonProps } from '../components/Atoms/Button/Button'

export default function Home() {
  return (
    <CustomButton label='Mi pruebas de startup'/>
  )
>>>>>>> a14f0137553a7e53b97e0eba26ad327c46443d11
}

export default Home
