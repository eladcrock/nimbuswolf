import React, { useEffect } from 'react';
import AOS from 'aos';
import { Anchor, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';
import 'aos/dist/aos.css';


import 'aos/dist/aos.css';

export function Welcome() {
  return (
    <div data-aos="fade-in" data-aos-duration="2500"  style={{ marginLeft: '1em', marginRight: '1rem' }}>
      <Title className={classes.title} ta="center" mt={100}>
        Nimbus Wolf{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Studios
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl" >
      Whether it’s motion graphics, branding, or a cutting-edge website, we’ve got you covered. Our team is dedicated to crafting tailored solutions that elevate your brand and engage your audience at every touchpoint.     </Text>
    </div>
  );
}

