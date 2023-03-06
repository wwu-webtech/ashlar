import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Inclusive Design',
    description: (
      <>
        We developed this design system and our <a href="https://brand.wwu.edu/">Brand and Communication Guide</a> with inclusive, accessible design and practices as our number one priority. 
        We are working hard to prevent and remove barriers across all our web platforms and communication efforts. 
      </>
    ),
  },
  {
    title: 'Accessibility',
    description: (
      <>
        Anyone carrying out recruitment or marketing work at Western should be well-versed in accessibility.
        Check out the main <a href="https://brand.wwu.edu/accessibility">Western Digital Accessibility</a> site for an overview and training. 
        For a deeper look, check out the guides for <a href="https://brand.wwu.edu/node/22">building accessible websites</a> and <a href="https://brand.wwu.edu/creating-accessible-documents">creating accessible documents.</a>
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
