import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainSection from '../components/MainSection';

// export const AppUrl = "https://essential.pythonanywhere.com";
export const AppUrl = "http://192.168.1.131:8000";
export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossorigin="anonymous"
    />
      </Head>
<MainSection/>
    </div>
  )
}
