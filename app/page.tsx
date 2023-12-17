import Pricing from '@/components/Pricing';
import {
  getSession,
  getSubscription,
  getActiveProductsWithPrices
} from '@/app/supabase-server';
// import { builder } from '@builder.io/sdk';
// import Head from 'next/head';
import { RenderBuilderContentHome } from '../components/RenderBuilderContentHome';
import { builder } from '@builder.io/sdk';

interface PageProps {
  params: {
    page: string[];
  };
}

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function PricingPage(props: PageProps) {
  const homepageContent = await builder
    .get('homepage', {
      prerender: false,
    })
    .toPromise();
  const [session, products, subscription] = await Promise.all([
    getSession(),
    getActiveProductsWithPrices(),
    getSubscription()
  ]);

  return (
    <>
      <Pricing
        session={session}
        user={session?.user}
        products={products}
        subscription={subscription}
      />
      {/* Render the Builder page */}
      <RenderBuilderContentHome content={homepageContent} />
    </>

  );
}