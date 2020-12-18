import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
 import { GifGridItem } from './GifGridItem';

export default function GifGrid({ category }) {

    const {data, loading} =  useFetchGifs(category);

    return (

        <>
        <h3>{category} </h3>
        { loading && <p>loafing</p> }
        <div className="card-grid">

                  { 
                      data.map( (img) => (
                             <GifGridItem 
                             key={ img.id }
                             {...img}/>
                      ))
                }

        </div>
        </>
        
    )
}
