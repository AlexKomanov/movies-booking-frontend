"use client"
import Image from 'next/image'
import styles from './page.module.css'
import HomeSlider from '@/components/HomeSlider/HomeSlider'
import MoviesCarousel from '@/components/MoviesCarousel/MoviesCarousel'

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeSlider />
      <MoviesCarousel />

    </main>
  )
}
