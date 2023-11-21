import React from 'react';
import { render } from '@testing-library/react';
import Navbar from "../src/layouts/navbar/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';

test('renders Navbar component without errors', () => {
    render(
    <Router>
        <Navbar />
    </Router>);
  });