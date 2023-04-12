import Head from 'next/head'
import Image from 'next/image'
import {createClient} from '../../prismicio'
import styles from '@/styles/Home.module.css'
import { PrismicText, PrismicRichText, SliceZone } from "@prismicio/react";
import { components } from "../../slices";
import {Navigation} from "../components/Navigation"


export default function Home({ page, menu }) {
  console.log(page, ' home')
  console.log(menu, ' menu')


  return (
    <>
      {/* <Image src={url} width={100} height={100} alt="image" /> */}
     
      <h1>
        <PrismicText field={page.data.title} />
      </h1>
      <div>
        <PrismicRichText field={page.data.description} />
        <SliceZone slices={page.data.slices} components={components} />
      </div>
      <Navigation navigation={menu}/>
    </>
  );
}


export async function getStaticProps({ params }) {
  // Client used to fetch CMS content.
  const client = createClient();

  // Page document from the CMS.
  const uid = params.uid?.[params.uid?.length - 1] || "home";

  // const page = await client.getByUID("page", uid);
  // const menu = await client.getSingle('navigation')

  const [menu, page] = await Promise.all([
   // client.getSingle('navigation'),
    client.getByUID('navigation', 'nav'),
    client.getByUID('page', uid),
  ])
  return {
    props: { page, menu },
  };
}


export async function getStaticPaths() {
  // Client used to fetch CMS content.
  const client = createClient();

  // Page documents from the CMS.
  const pages = await client.getAllByType("page");

  // URL paths for each Page document from the CMS.
  return {
    paths: pages.map((page) => ({
      params: {
        uid: page.uid === "home" ? [] : [page.uid],
      },
    })),
    fallback: false,
  };
}
