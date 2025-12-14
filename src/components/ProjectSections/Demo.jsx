import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Demo = ({details}) => {
  const isImageFile = (url) => {
    // Only have these image extensions for now
    const imageExtensions = ['.png', '.jpg', '.jpeg']
    return imageExtensions.some(ext => url.toLowerCase().endsWith(ext))
  }

  return (
    <div className='w-full h-full flex flex-col'>
      <div className='w-full h-full p-6' 
        style={{
          '--swiper-theme-color': '#FFFFFF',
          '--swiper-pagination-bullet-inactive-color': '#4B5563',
          '--swiper-navigation-color': '#000000',
        }}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true, }}
          className='w-full h-full'
        >
          {details.demo.map((media, i) => (
            <SwiperSlide key={i}>
              {isImageFile(media.media) ? (
                <img src={media.media} alt={media.alt}className='w-full h-4/5 mb-8'/>
              ) : (
                <iframe 
                  className='w-full h-4/5 mb-8'
                  src={media.media} title="Demo Video" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerpolicy="strict-origin-when-cross-origin" 
                  allowfullscreen 
                />
              )}
              <p className='w-full h-1/5 flex justify-center'>{media.caption}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>     
    </div>
  )
}

export default Demo
