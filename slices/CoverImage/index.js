import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Image from 'next/image'
import styles from "../../src/styles/Home.module.css";

/**
 * @typedef {import("@prismicio/client").Content.CoverImageSlice} CoverImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CoverImageSlice>} CoverImageProps
 * @param { CoverImageProps }
 */

const CoverImage = ({ slice }) => (
  <div className={styles.coverImgContainer}>
   
    {slice.primary.image?<img src={slice.primary.image.url} alt={slice.primary.title ?slice.primary.title[0].text:'cover image'} 
    className={styles.coverImg}/>:null}
   
    {
      slice.primary.description ?
      <PrismicRichText field={slice.primary.description}/>
      : <p>start by editing this slice from inside Slice Machine!</p>
    }
  
  </div>
)

export default CoverImage