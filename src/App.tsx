import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { HeaderSimple } from './components/HeaderSimple';

import { HeroImageBackground } from "./components/hero";
import { FeaturesImages } from "./components/FeaturesImages";
import { StatsGroup } from "./components/StatsGroup";
import { FooterSimple } from "./components/FooterSimple";
import { ColorSchemeToggle } from './components/ColorSchemeToggle/ColorSchemeToggle';
import { EmailBanner } from './components/EmailBanner';
import { ArticlesCardsGrid } from './components/ArticlesCardsGrid';
import { HeroTitle } from './components/HeroTitle';


export default function App() {
  return (
    <MantineProvider theme={theme}>
      <HeaderSimple />

      <Router />
      <br />

      <HeroImageBackground />
      <div id="services">
        <FeaturesImages />
      </div>
      <br />
      <div id="projects">
        <ArticlesCardsGrid />
      </div>
      <div id="about">
        <HeroTitle />
      </div>
      <StatsGroup />

      <EmailBanner />

      <FooterSimple />
    </MantineProvider>
  );
}
