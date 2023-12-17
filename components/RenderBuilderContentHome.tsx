"use client";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import DefaultErrorPage from "next/error";

interface BuilderPageProps {
  content: any;
}

export function RenderBuilderContentHome({ content }: BuilderPageProps) {
  const isPreviewing = useIsPreviewing();

  if (content || isPreviewing) {
    return <BuilderComponent content={content} model="homepage" />;
  }

  // If the "content" is falsy and the page is
  // not being previewed in Builder, render the
  // DefaultErrorPage with a 404.
  return null
}