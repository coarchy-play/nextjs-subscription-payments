'use client';
import { Builder } from '@builder.io/react';
import AuthUI from './app/signin/AuthUI';
import Counter from './components/Counter/Counter';

Builder.registerComponent(Counter, {
  name: 'Counter',
  inputs: [
    {
      name: 'initialCount',
      type: 'number'
    }
  ]
});

Builder.registerComponent(AuthUI, {
  name: 'AuthUI'
});
