import React, { useState, useMemo } from 'react'
import styles from './gallery.module.css'
import PopularCard from './PopularCard'
import useGetPopulars from '../../Hooks/useGetPopulars'
import LoadingBox from '../UI/Icons/LoadingBox'
//12 Popular Movie

export default function Gallery({ addMovie,addPopular }: any) {
  const [galleryFade, setGalleryFade] = useState(false)
  const { movies, loading } = useGetPopulars()
  let loadingsArray = useMemo(() => {
    return new Array(12).fill(undefined)
  }, [])
  const openFade = () => {
    setGalleryFade(true)
  }
  const closeFade = () => {
    setGalleryFade(false)
  }

  return (
    <div className={galleryFade ? `${styles.gallery} ${styles.faded}` : `${styles.gallery} `}>
      {loading
        ? loadingsArray.map((m) => <LoadingBox />)
        : movies.map((m, index) => (
            <PopularCard
              key={index}
              addMovie={addMovie}
              addPopular={addPopular}
              movie={m}
              movieHovered={openFade}
              movieLeaved={closeFade}

            />
          ))}
    </div>
  )
}
