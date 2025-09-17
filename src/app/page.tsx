import { About } from './_components/about';
import { Hero } from './_components/hero';
import { Services } from './_components/services';
import { Reviews } from './_components/reviews';
import { Footer } from './_components/footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Footer />
    </main>
  )
}