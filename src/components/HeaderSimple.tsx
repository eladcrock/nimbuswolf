import { useState, useEffect, SetStateAction } from 'react';
import { Burger, Container, Group, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GetInTouchSimple } from './GetInTouchSimple';
import { ColorSchemeToggle } from './ColorSchemeToggle/ColorSchemeToggle'; // Import the theme toggle

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
      const section = document.querySelector(link);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (opened) {
      toggle(); // close mobile menu
    }
  };

  const handleModalClose = () => {
    setModalOpened(false);

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500);
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

        <div className={classes.colorSchemeWrapper}>
          <ColorSchemeToggle /> {/* Move the toggle to the right corner */}
        </div>

        <Group className={classes.rightControls}>
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Group>
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
        onClose={handleModalClose}
        overlayProps={{
          blur: 2,
        }}
        classNames={{
          inner: classes.modalInner, // Add a custom class for the modal's inner container
        }}
        styles={{
          inner: {
            marginTop: 'rem(120x)', // Offset for the sticky navbar
          },
        }}
      >
        <GetInTouchSimple
          onClose={handleModalClose}
          setOpened={function (value: SetStateAction<boolean>): void {
            throw new Error('Function not implemented.');
          }}
        />
      </Modal>
    </header>
  );
}