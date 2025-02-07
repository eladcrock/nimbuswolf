import { useState } from 'react';
import { Container, Group, Anchor, Modal } from '@mantine/core';
import classes from './FooterSimple.module.css';
import '@mantine/core/styles.css';
import { GetInTouchSimple } from './GetInTouchSimple'; // Ensure the correct import path

interface GetInTouchSimpleProps {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
}

const links = [
  { link: '#about', label: 'About' },
  { link: '#services', label: 'Services' },
  { link: '#projects', label: 'Projects' },
  { link: '#contact', label: 'Contact' },
];

export function FooterSimple() {
  const [modalOpened, setModalOpened] = useState(false);
  const [active, setActive] = useState(links[0].link);

  // Handle the link click, open modal if link is #contact
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    event.preventDefault();
    setActive(link);

    if (link === '#contact') {
      setModalOpened(true);
    } else {
      // Smooth scroll to the section
      const section = document.querySelector(link);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Modal closing function
  const handleModalClose = () => {
    setModalOpened(false);  // Close the modal by setting the state to false
  };

  const items = links.map((link) => (
    <Anchor
      key={link.label}
      href={link.link}
      className={classes.link}
      c="dimmed"
      size="sm"
      onClick={(event) => handleClick(event, link.link)}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group className={classes.links}>{items}</Group>
      </Container>

      <Modal
        opened={modalOpened}
        onClose={handleModalClose}  // Use the correct close function here
      >
        {/* Pass the handleModalClose function as onClose */}
        <GetInTouchSimple setOpened={setModalOpened} onClose={handleModalClose} />
      </Modal>
    </div>
  );
}
