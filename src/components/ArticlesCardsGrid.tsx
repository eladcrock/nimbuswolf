import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import {
  AspectRatio,
  Button,
  Card,
  Container,
  Image,
  Modal,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import app from './images/app.png';
import argo from './images/argo.png';
import bella from './images/bella.png';
import boxing from './images/boxing.png';
import celsius from './images/celsius.png';
import ddi from './images/ddi.png';
import sofi from './images/sofi.png';
import tip from './images/tip.png';
import classes from './ArticlesCardsGrid.module.css';

import 'aos/dist/aos.css';
import '@mantine/core/styles.css';

// Define the type for article data
interface Article {
  id: number;
  title: string;
  image: string;
  date: string;
  link: string;
  about: string; // Add an 'about' field for additional text
  studyLink?: string; // Add a study link for the case study
  alternateLink?: string; // Add an alternate link for the project,
}

const mockdata: Article[] = [
  {
    id: 1,
    title: 'Benicia Boxing & Martial Arts: Multipage Website',
    image: boxing,
    date: 'Web Design',
    link: 'https://beniciabma.com/',

    about: 'A professional website designed for a multidisciplinary martial arts and boxing gym. The client experienced immediate results with an increase in sign-up inquiries through the site’s contact form.',  },
  {
    id: 2,
    title: 'So-Fi  Animated Advertisement',
    image: sofi,
    date: 'Motion Graphics for Marketing',
    link: 'https://www.behance.net/embed/project/193094513?ilo0=1',
    alternateLink: 'https://www.behance.net/gallery/193094513/Sofi-Ad-concept-using-3d-animation',

    about:
      ' A high fidelity 3D animated ad, in alignment with Style Guide for So-Fi, a financial services company.',
  },
  {
    id: 3,
    title: 'Art you Him: Simple Landing Page',
    image: bella,
    date: 'Web design: Digital & Canvas Art',
    link: 'https://eladcrock.github.io/artyouhim/',
    about:
      'A minimalist and visually appealing landing page created to showcase works. All Art on page is proudly crafted by the Nimbus Wolf team.',
  },
  {
    id: 4,
    title: 'Win Win: Volunteer Social App',
    image: app,
    date: 'App Development with Case Study',
    alternateLink: 'https://eladcrock.github.io/winwin/about.html', // Add the full study link


    link: 'https://embed.figma.com/proto/PlCxSrPOuDxxc5qKAgyZzq/Win-Win-App?node-id=15-9062&embed-host=share',
    about:
      'A social app aimed at connecting volunteers with opportunities, with linked in depth case study including user personas, and compelling custom infographics..',
  },
  {
    id: 5,
    title: 'Check-out Calculator for Service Staff',
    image: tip,
    date: 'Custom Business Tools',
    link: 'https://eladcrock.github.io/Bottega/',

    about:
      'A custom-built tool for a famed Napa Valley restaurant, used to simplify tip calculations.  A one time implemenmtation that continues to save time and money.',
  },

  {
    id: 6,
    title: 'Data Driven Investing: Logo Animation',
    image: ddi,
    date: 'Motion Graphics',
    link: 'https://www.behance.net/embed/project/183370413?ilo0=1',
    alternateLink: 'https://www.behance.net/gallery/183370413/Logo-animation',

    about:
      'A dynamic logo animation created for a client in the finance industry with emerging podcast and youtube presence.',
  },

  {
    id: 7,
    title: 'Celsius: Content for Social Media',
    image: celsius,
    date: 'Vidoes and Reels',
    link: 'https://www.behance.net/embed/project/200090747?ilo0=1',
    about:
      'An engaging social media video created for Celsius, showcasing creative marketing strategies.',
    alternateLink: 'https://www.behance.net/gallery/200090747/%28unofficial%29-Celsius-ad-concept',
  },
  {
    id: 8,
    title: 'Argo: Animated Slide Deck',
    image: argo,
    date: 'Infographics & Data Visualization',
    link: 'https://www.behance.net/embed/project/177303999?ilo0=1',
    about: 'A custom animated presentation created for a client with focus on new product launch.',
    alternateLink: 'https://www.behance.net/gallery/177303999/Argo-company-product-reveal',
  },
];

export function ArticlesCardsGrid() {
  const [modalOpened, setModalOpened] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const handleCardClick = (article: Article) => {
    setSelectedArticle(article);
    setModalOpened(true);
  };

  const cards = mockdata.map((article) => (
    <Card
      key={article.id}
      className={classes.card}
      data-aos="fade-in"
      data-aos-duration="2000"
      onClick={() => handleCardClick(article)}
      style={{ cursor: 'pointer' }}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} alt={article.title} />
      </AspectRatio>
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <div>
      <Container py="xl" data-aos="fade-in" data-aos-duration="2000">
        <br />
        <br />
        <Title className={classes.heading}>Our Work {' '}
         <Text component="span" variant="gradient" gradient={{ from: 'red', to: 'violet' }} inherit>
            Speaks
          </Text>{' '}
           for Itself </Title>
        <Text c="dimmed" className={classes.description}>
          From web development, to advertisement and custom business tools, here are a few areas where we've made a difference.
        </Text>
        <br />
        <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
      </Container>
      <Modal
  opened={modalOpened}
  onClose={() => setModalOpened(false)}
  title={<Text fw={700}>{selectedArticle?.title}</Text>}
  styles={{
    body: {
      maxHeight: '80vh',
      overflowY: 'auto',
    },
  }}
>
  {selectedArticle && (
    <>
      {/* Embed project in an iframe */}
      <AspectRatio ratio={16 / 15} mb="md">
        <iframe
          src={selectedArticle.link}
          title={selectedArticle.title}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
        />
      </AspectRatio>

      {/* About text */}
      <Text>{selectedArticle.about}</Text>
      <br />

      {/* Visit Project button with alternateLink condition */}
      <Button
      
        fullWidth
        component="a"
        href={selectedArticle.alternateLink || selectedArticle.link}
        target="_blank"
        mt="md"
        variant="gradient" 
        gradient={{
          from: 'cyan', // Soft purple for visual appeal
          to: 'blue', // Lighter purple for a smoother transition
          deg: 155,
          

          
        }}

      >
        {selectedArticle.alternateLink ? 'Learn More' : 'Visit Project'}
      </Button>
    </>
  )}
</Modal>

    </div>
  );
}
