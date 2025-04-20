import { Container, Image, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import IMAGES from './images';
import classes from './FeaturesImages.module.css';

import '@mantine/core/styles.css';

import { useEffect } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';

const data = [


  {
    image: 'palette',
    title: 'Logos and Branding',
    description:
      'Create a memorable identity that resonates with your audience and reflects your values.',
  },
  {
    image: 'magnify',
    title: 'Website Design & SEO ',
    description:
      'Designing user-friendly, visually striking websites that drive engagement and conversions.',
  },

  {
    image: 'photo',
    title: 'Motion Graphics & 3D Animation',
    description:
      "Breathtaking animations that captivate and communicate your story in a way static designs can't.",
  },
  {
    image: 'chart',
    title: 'Social Media Content',
    description:
      'Enhance your brand’s online presence with tailored strategies and compelling content that engages your audience.',
  },


];

export function FeaturesImages() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const items = data.map((item) => (
    <div
      data-aos="fade-right"
      data-aos-offset="400"
      data-aos-easing="linear"
      className={classes.item}
      key={item.image}
    >
      <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="md">
        <Image src={IMAGES[item.image]} />
      </ThemeIcon>

      <div>
        <Text fw={700} fz="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text c="dimmed">{item.description}</Text>
      </div>
    </div>
  ));

  return (
    <Container
      size={700}
      className={classes.wrapper}
      data-aos="fade-in"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <Text className={classes.supTitle}>our Services</Text>

      <Title className={classes.title} order={2}>
        Delivering
        <span
          className={classes.highlight}
          data-aos="zoom-in"
          data-aos-offset="360"
          data-aos-easing="linear"
        >
          IMPACT
        </span>
      </Title>

      <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
          Nimbus Wolf Studios crafts creative solutions that resonate, engage, to deliver results.
          Explore our services to see how we can bring your goals into focus.
        </Text>
      </Container>

      <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30}>
        {items}
      </SimpleGrid>
    </Container>
  );
}