import { notFound } from "next/navigation";
import { allDocs } from "contentlayer/generated";

import { cn } from "@/lib/utils";

import "@/styles/mdx.css";

import { Mdx } from "@/components/mdx-components";

interface DocPageProps {
  params: {
    name: string;
  };
}

async function getDocFromParams({ params }: DocPageProps) {
  const slug = "blocks/" + params.name;
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    return null;
  }

  return doc;
}

export default async function BlockPage({ params }: any) {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    notFound();
  }

  return (
    <>
      <div className={cn("themes-wrapper bg-background")}>
        <Mdx code={doc.body.code} />
      </div>
    </>
  );
}
