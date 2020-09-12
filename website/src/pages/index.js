import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import HubspotForm from 'react-hubspot-form';
import styles from './styles.module.css';


const useStyles = makeStyles((theme) => ({
  root: {
    // textAlign: 'justify',
    // maxWidth: 800,
  },
  form: {
    // visibility: 'hidden'
  }

}));

function Home() {
  const classes = useStyles()
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Security and privacy for your digital life">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <HubspotForm
              portalId='5642830'
              formId='f8249771-fd3a-41d7-98c0-e6591b393dec'
              onSubmit={() => console.log('Submit!')}
              onReady={(form) => console.log('Form ready!')}
              loading={<div>Loading...</div>}
            />

          </div>
          <div className={classes.form}>

          </div>
        </div>
      </header>
      <main>

      </main>
    </Layout>
  );
}

export default Home;
