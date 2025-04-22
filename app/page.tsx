import Hero from './sections/hero';
import Skills from './sections/skills';
import Projects from './sections/projects';
import About from './sections/about';

export default function Home() {
  return (
    <main className='scroll-smooth overflow-hidden'>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
