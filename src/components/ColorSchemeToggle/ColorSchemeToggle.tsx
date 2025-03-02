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
        style={{
          width: '8rem', // Adjust button width
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add drop shadow
          transition: 'transform 0.2s ease', // Add transition for transform
          color: '#333333', // Dark text for better contrast
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)'; // Scale up on hover
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)'; // Reset scale on leave
        }}
      >
        Light
      </Button>
      <Button
        variant="gradient"
        gradient={{
          from: '#4b0082', // Indigo for a deeper color
          to: '#8a2be2', // BlueViolet for a richer gradient
          deg: 155,
        }}
        onClick={() => setColorScheme('dark')}
        style={{
          width: '8rem', // Adjust button width
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add drop shadow
          transition: 'transform 0.2s ease', // Add transition for transform
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)'; // Scale up on hover
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)'; // Reset scale on leave
        }}
      >
        Dark
      </Button>
    </Group>
  );
}