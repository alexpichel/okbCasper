import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import "./ContactForm.css";
import { Layout, Wrapper, Header, Button } from 'components';
import { media } from '../utils/media';

import config from '../../config/SiteConfig';

const Contact = () => (
  <Layout>
    <Wrapper>
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <Header>
        <Link to="/">{config.siteTitle}</Link>
      </Header>
      <Content>
        <h1>Contact</h1>
        <p>Super cool intro text to get people contacting me! It uses Netlify's form feature.</p>
        <form name="contact-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
          <p>
            <label htmlFor="contact-name">
              Name
              <input name="name" id="contact-name" type="text" required />
            </label>
          </p>
          <p>
            <label htmlFor="contact-email">
              E-Mail
              {' '}
              <input name="email" id="contact-email" type="email" required />
            </label>
          </p>
          <p>
            <label htmlFor="contact-message">
              Your Message
              {' '}
              <textarea name="message" id="contact-message" required />
            </label>
          </p>
          <p>
            <Button>Send</Button>
          </p>
          <input type="hidden" name="form-name" value="contact-form" />
        </form>
      </Content>
    </Wrapper>
  </Layout>
);
export default Contact;