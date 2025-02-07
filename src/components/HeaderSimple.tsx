import { useState, useEffect, SetStateAction } from 'react';
import { Burger, Container, Group, Anchor, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GetInTouchSimple } from './GetInTouchSimple'; // Ensure the correct import path

const links = [
  { link: '#about', label: 'About' },
  { link: '#services', label: 'Services' },
  { link: '#projects', label: 'Projects' },
  { link: '#contact', label: 'Connect' },
];

export function HeaderSimple() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const [modalOpened, setModalOpened] = useState(false);

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

    // Close the menu if opened (mobile view)
    if (opened) {
      toggle();
    }
  };

  const handleModalClose = () => {
    setModalOpened(false);  // Close the modal by setting the state to false

    // Delay the scroll to top action after modal is closed
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });  // Scroll to top after a delay
    }, 500);  // Delay in milliseconds
  };

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => handleClick(event, link.link)}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header} data-aos="fade-in" data-aos-duration="2250">
      <Container size="md" className={classes.inner}>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>

      {opened && (
        <div className={classes.mobileMenu}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.link}
              className={classes.link}
              data-active={active === link.link || undefined}
              onClick={(event) => handleClick(event, link.link)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <Modal
        opened={modalOpened}
        onClose={handleModalClose}  // Use the handleModalClose function to handle closing the modal and scroll
      >
        <GetInTouchSimple onClose={handleModalClose} setOpened={function (value: SetStateAction<boolean>): void {
          throw new Error('Function not implemented.');
        } } />
      </Modal>
    </header>
  );
}
