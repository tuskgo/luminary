import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Developer First',
    emoji: '\u{1F6E0}\u{FE0F}',
    description: (
      <>
        Built with developers in mind. Clean APIs, comprehensive SDKs,
        and first-class CLI tooling to integrate seamlessly into your workflow.
      </>
    ),
  },
  {
    title: 'Production Ready',
    emoji: '\u{1F680}',
    description: (
      <>
        Battle-tested at scale. Enterprise-grade reliability with built-in
        observability, security controls, and high-availability architecture.
      </>
    ),
  },
  {
    title: 'Open Source',
    emoji: '\u{1F4A1}',
    description: (
      <>
        Apache 2.0 licensed. Fully transparent, community-driven development.
        Self-host or use our managed offering — your choice.
      </>
    ),
  },
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <span className={styles.featureEmoji}>{emoji}</span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
