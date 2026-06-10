'use client'
import { Header } from '@/components/Header/page';
import styles from '@/app/page.module.css';
import { Main } from '@/components/Main/page';
import { Section } from '@/components/Section/page';
import { SectionMake } from '@/components/SectionMake/page';
import { SectionAbout } from '@/components/SectionAbout/page';
import { SectionCall } from '@/components/SectionCall/page';
import { Footer } from '@/components/Footer/page';

export default function Home() {

  return (

    <div className={styles.container}>

      <Header />
      <Main />
      <Section />
      <SectionMake />
      <SectionAbout />
      <SectionCall />
      <Footer />

      <footer >&copy; 2026 Maycon Kabitschke. Todos os direitos reservados. </footer>




    </div>
  )
}