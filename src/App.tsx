import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { HeaderSimple } from './components/HeaderSimple';
import '@mantine/core/styles.css';

import { HeroImageBackground } from "./components/hero.tsx";
import { FeaturesImages } from "./components/FeaturesImages.tsx";
import { StatsGroup } from "./components/StatsGroup.tsx";
import { CardsCarousel } from "./components/CardsCarousel.tsx";
import { FooterSimple } from "./components/FooterSimple.tsx";
import { ColorSchemeToggle } from './components/ColorSchemeToggle/ColorSchemeToggle';


export default function App() {
  return (

    <MantineProvider theme={theme}>
      <HeaderSimple />
      <Router />

        <FeaturesImages />
        <HeroImageBackground />
 
        <CardsCarousel />


        <StatsGroup />
        <FooterSimple />



    </MantineProvider>
  );
}
