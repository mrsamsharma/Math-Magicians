import React from 'react';
import Navbar from '../components/Navbar';
import '../styles.css';

export default function Quote() {
  return (
    <>
      <Navbar />
      <p className="quote">
        Pure mathematics is, in its way, the poetry of logical ideas.
        <br />
        <strong>— Albert Einstein, German theoretical physicist</strong>
      </p>
    </>
  );
}
