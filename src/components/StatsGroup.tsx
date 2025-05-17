import { Text } from '@mantine/core';
import classes from './StatsGroup.module.css';
import '@mantine/core/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef, useState } from 'react';

const data = [
  {
    title: 'Customer inquiries',
    stats: '+218%',
    description:
      'Inquiries increased by over 200%—including 115+ leads in 6 months and a 12-inquiry spike within the first month of launch.',
  },
  {
    title: 'YouTube engagement',
    stats: '+162%',
    description:
      'Watch time jumped by 150%, growing from 2 to 5 minutes per viewer thanks to a fresh intro and better storytelling.',
  },
  {
    title: 'Operational efficiency',
    stats: '+55%',
    description:
      'Saved the restaurant over 40% in manual admin time through custom tools that streamlined orders and kitchen coordination.',
  },
];

export function StatsGroup() {
  const [animatedValues, setAnimatedValues] = useState(data.map(() => 0));
  const rootRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    AOS.init({ once: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          data.forEach((item, index) => {
            const match = item.stats.match(/\+?(\d+)/);
            const target = match ? parseInt(match[1], 10) : 0;
            const delay = index * 800; // ← Staggered by 600ms now

            setTimeout(() => {
              let current = 0;
              const duration = 1000;
              const increment = target / (duration / 16);

              const interval = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(interval);
                }

                setAnimatedValues((prev) => {
                  const updated = [...prev];
                  updated[index] = Math.round(current);
                  return updated;
                });
              }, 16);
            }, delay);
          });
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (rootRef.current) {
      observer.observe(rootRef.current);
    }

    return () => {
      if (rootRef.current) observer.unobserve(rootRef.current);
    };
  }, []);

  const stats = data.map((stat, index) => (
    <div key={stat.title} className={classes.stat}>
      <Text className={classes.count}>+{animatedValues[index]}%</Text>
      <Text className={classes.title}>{stat.title}</Text>
      <Text className={classes.description}>{stat.description}</Text>
    </div>
  ));

  return (
    <div
      ref={rootRef}
      data-aos="fade-in"
      data-aos-duration="2250"
      className={classes.root}
    >
      {stats}
    </div>
  );
}
