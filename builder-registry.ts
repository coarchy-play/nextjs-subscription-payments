'use client';
import { Builder } from '@builder.io/react';
import AuthUI from './app/signin/AuthUI';
import Counter from './components/Counter/Counter';
import LogoCloud from './components/LogoCloud';
import Pricing from './components/Pricing';

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

Builder.registerComponent(Pricing, {
  name: 'Pricing Component',
  inputs: [
    {
      name: 'products',
      type: 'string',
      required: true
    },
    {
      name: 'session',
      type: 'string',
      required: true
    },
    {
      name: 'subscription',
      type: 'string',
      required: true
    },
    {
      name: 'user',
      type: 'string',
      required: true
    }
  ]
});

Builder.registerComponent(LogoCloud, {
  name: 'LogoCloud'
});
