'use client';

import * as React from 'react';
import { Navbar } from './Navbar';
import { Footernew } from './Footernew';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export const ClientLayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return React.createElement(
    'div',
    { className: 'min-h-screen flex flex-col justify-between' },
    React.createElement(Navbar),
    React.createElement('main', { className: 'flex-1' }, children),
    React.createElement(Footernew)
  );
};