import { Text } from '@mantine/core';
import classes from './StatsGroup.module.css';
import '@mantine/core/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const data = [
  {
    title: 'Membership inquiries',
    stats: '+25%',
    description: "Boosted website traffic by 40% and generated a 25% increase in new membership inquiries within the first month of launch.",
  },
  {

    title: 'Watch time',
    stats: '+150%',
    description: 'After implementing a compelling intro, increased channel viewership by 50% and extended the average watch time per viewer from 2 minutes to 5 minutes.',
  },
  {
    title: 'Completed orders',
    stats: '+35%',
    description: 'Optimized the checkout process and increased the number of completed orders within the first month of launch.',
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