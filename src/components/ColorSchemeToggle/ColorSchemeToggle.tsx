import AOS from 'aos';
import { Button, Group, useMantineColorScheme } from '@mantine/core';

import 'aos/dist/aos.css';

import { useEffect } from 'react';

export function ColorSchemeToggle() {
  useEffect(() => {
    AOS.init();
  }, []);
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group justify="center" mt="xl" data-aos="fade-in" data-aos-duration="2500">
     <Button
        variant="gradient"
        gradient={{ from: '#ffffff', to: '#b0b0b0', deg: 45 }} // White to medium gray
        onClick={() => setColorScheme('light')}
        styles={{
          root: {
            width: '8rem', // Adjust button width
          },
          label: {
            color: '#333333', // Dark text for better contrast
          }
          ,
        }}
      >
        Light
      </Button>
      <Button
        variant="gradient" 
        gradient={{
            from: '#4b0082', // Indigo for a deeper color
            to: '#8a2be2', // BlueViolet for a richer gradient

         // Lighter purple for a smoother transition
          deg: 155,
        }}

        onClick={() => setColorScheme('dark')}
        styles={{
          root: {
            width: '8rem', // Adjust button width
          },
        }}
      >
        Dark
      </Button>
    </Group>
  );
}
