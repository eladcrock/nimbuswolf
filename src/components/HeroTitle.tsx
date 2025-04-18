import { useState, useEffect, SetStateAction } from 'react';
import AOS from 'aos';
import { Button, Container, Group, Text, Modal } from '@mantine/core';
import classes from './HeroTitle.module.css';
import 'aos/dist/aos.css';
import { GetInTouchSimple } from './GetInTouchSimple'; // Ensure the correct import path

export function HeroTitle() {
  const [modalOpened, setModalOpened] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const handleModalClose = () => {
    setModalOpened(false); // Close the modal
    // Delay the scroll to top action after modal is closed
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top after a delay
    }, 500); // Delay in milliseconds
  };

  return (
    <div data-aos="fade-in" data-aos-duration="2000" className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title} >
          Nice to{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            meet
          </Text>{' '}
          you
        </h1>

        <Text className={classes.description} color="dimmed"  >
          <p>
            We are a family-owned business driven by creativity and innovation, specializing in
            motion graphics, branding, website/app development, and creative solutions.
          </p>
          Proudly based in the Bay Area, but our expertise knows no bounds. We're fully
          equipped to collaborate with clients from any region, bringing creative visions to life
          wherever you're located.
          <p></p>
        </Text>
        <br></br>

        <Group className={classes.controls}>
          <Button
            fullWidth
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'cyan', to: 'blue' }}
            onClick={() => setModalOpened(true)} // Opens the modal
          >
            Contact us
          </Button>
        </Group>
      </Container>

      <Modal
        opened={modalOpened}
        onClose={handleModalClose} // Close the modal and handle delayed scroll to top
        classNames={{
          inner: classes.modalInner, // Add a custom class for the modal's inner container
        }}
      >
        <GetInTouchSimple onClose={handleModalClose} setOpened={function (value: SetStateAction<boolean>): void {
          throw new Error('Function not implemented.');
        } } /> {/* Pass the onClose function */}
      </Modal>
    </div>
  );
}
