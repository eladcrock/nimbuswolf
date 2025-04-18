import AOS from 'aos';
import { ActionIcon, Group, useMantineColorScheme, rem } from '@mantine/core';
import { Sun, Moon } from 'lucide-react';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export function ColorSchemeToggle() {
  useEffect(() => {
    AOS.init();
  }, []);

  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Group justify="center" mt="xl" data-aos="fade-in" data-aos-duration="2500">
      <ActionIcon
        variant="gradient"
        gradient={
          isDark
            ? { from: '#ffffff', to: '#b0b0b0', deg: 45 }
            : { from: '#4b0082', to: '#8a2be2', deg: 155 }
        }
        onClick={() => setColorScheme(isDark ? 'light' : 'dark')}
        size={rem(48)}
        radius="xl"
        style={{
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        {isDark ? <Sun size={24} color="#333" /> : <Moon size={24} color="#fff" />}
      </ActionIcon>
    </Group>
  );
}
