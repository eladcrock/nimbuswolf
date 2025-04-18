import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import { Button, Image, Modal, Text, Title } from '@mantine/core';
import { GetInTouchSimple } from './GetInTouchSimple';
import image from './images/image.svg';
import classes from './EmailBanner.module.css';

import 'aos/dist/aos.css';

export function EmailBanner() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)} // Close the modal when the close button is clicked
        classNames={{
          inner: classes.modalInner, // Add a custom class for the modal's inner container
        }}
      >
        <GetInTouchSimple
          onClose={() => setOpened(false)}
          setOpened={function (value: React.SetStateAction<boolean>): void {
            throw new Error('Function not implemented.');
          }}
        />
      </Modal>

      <div data-aos="fade-in" data-aos-duration="2000" className={classes.wrapper}>
        <div className={classes.body}>
          <Title className={classes.title}>Wait a minute...</Title>
          <Text fw={500} fz="lg" mb={5}>
            Can we help your business grow?
          </Text>
          <Text fz="sm" c="dimmed">
            Lets sync to discuss how we can help you achieve your goals.
          </Text>

          <div className={classes.controls}>
            <Button
              fullWidth
              variant="gradient"
              gradient={{ from: 'yellow', to: 'pink', deg: 135 }}
              className={classes.control}
              onClick={() => setOpened(true)}
            >
              LETS GO!
            </Button>
          </div>
        </div>
        <Image
          data-aos="flip-right"
          data-aos-duration="2500"
          src={image}
          className={classes.image}
        />
      </div>
    </>
  );
}