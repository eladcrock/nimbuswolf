import cx from 'clsx';
import { Button, Container, Overlay, Text, Title, Modal } from '@mantine/core';
import classes from './HeroImageBackground.module.css';
import '@mantine/core/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect, SetStateAction } from 'react';
import { GetInTouchSimple } from './GetInTouchSimple'; // Ensure the correct import path

export function HeroImageBackground() {
  const [opened, setOpened] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);

  const links = [
    { link: '#about', label: 'About' },
    { link: '#services', label: 'Services' },
    { link: '#projects', label: 'Projects' },
    { link: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const scrollToProjects = () => {
    const section = document.querySelector('#projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleModalClose = () => {
    setModalOpened(false); // Close the modal
    // Delay the scroll to top action after modal is closed
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top after a delay
    }, 500); // Delay in milliseconds
  };

  return (
    <div data-aos="fade-in" data-aos-duration="2000" className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Empowering Innovation. {'  '}
          <Text component="span" inherit className={classes.highlight}>
            One vision at a time
          </Text>
        </Title>
        <div style={{ marginBottom: '10em' }}></div>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Let us handle your web design, graphics, video animations, social media, and more, so
            you can focus on what makes your business exceptional.{' '}
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            className={classes.control}
            variant="white"
            size="lg"
            onClick={() => setModalOpened(true)} // Opens the modal
          >
            Let's talk
          </Button>
          <Button 
            className={cx(classes.control, classes.secondaryControl)} 
            size="lg"
            onClick={scrollToProjects} // Scrolls to the #projects section
          >
            See our work
          </Button>

          <Modal
            opened={modalOpened}
            onClose={handleModalClose} // Use the handleModalClose function
          >
            <GetInTouchSimple onClose={handleModalClose} setOpened={function (value: SetStateAction<boolean>): void {
              throw new Error('Function not implemented.');
            } } /> {/* Pass the onClose function */}
          </Modal>
        </div>
      </div>
    </div>
  );
}
