import React from 'react';
import { createRoot } from 'react-dom/client';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

import './style/styles.css'

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <Wrapper />
    <Footer />
  </>
);
