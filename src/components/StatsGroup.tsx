import { Text } from '@mantine/core';
import classes from './StatsGroup.module.css';
import '@mantine/core/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const data = [
  {
    title: 'Customer inquiries',
    stats: '+200%',
    description: 'Inquiries increased by over 200%—including 115+ leads in 6 months and a 12-inquiry spike within the first month of launch.',
  },
  {
    title: 'YouTube engagement',
    stats: '+150%',
    description: 'Watch time jumped by 150%, growing from 2 to 5 minutes per viewer thanks to a fresh intro and better storytelling.',
  },
  {
    title: 'Operational efficiency',
    stats: '+40%',
    description: 'Saved the restaurant over 40% in manual admin time through custom tools that streamlined orders and kitchen coordination.',
  },
];

export function StatsGroup() {

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const stats = data.map((stat) => (
    <div key={stat.title} className={classes.stat}>
      <Text className={classes.count}>{stat.stats}</Text>
      <Text className={classes.title}>{stat.title}</Text>
      <Text className={classes.description}>{stat.description}</Text>
    </div>
  ));
  return <div data-aos="fade-in" data-aos-duration="2250" className={classes.root}>{stats}</div>;
}