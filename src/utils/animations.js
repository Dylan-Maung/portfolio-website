import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const fadeInFromLeft = (target, animationProps, scrollProps) => {
    gsap.fromTo(target, 
        {x: -200, opacity: 0}, 
        {
            x: 0,
            opacity: 1,
            ...animationProps,
            scrollTrigger: {
                trigger: target,
                toggleActions: 'restart reverse restart reverse',
                ...scrollProps
            }
        }
    )
}

export const fadeInFromRight = (target, animationProps, scrollProps) => {
    gsap.fromTo(target, 
        {x: +200, opacity: 0}, 
        {
            x: 0,
            opacity: 1,
            ...animationProps,
            scrollTrigger: {
                trigger: target,
                toggleActions: 'restart reverse restart reverse',
                ...scrollProps
            }
        }
    )
}

export const fadeInFromBottom = (target, animationProps, scrollProps) => {
    gsap.fromTo(target, 
        {y: +200, opacity: 0}, 
        {
            y: 0,
            opacity: 1,
            ...animationProps,
            scrollTrigger: {
                trigger: target,
                toggleActions: 'restart reverse restart reverse',
                ...scrollProps
            }
        }
    )
}

// Timeline chain of distort entry, snap correction, settlein, and glitch flickers
export const glitchInAnimation = (target, animationProps = {}, scrollProps = {}) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: target,
        toggleActions: 'restart reverse restart reverse',
        ...scrollProps
      }
    })
    
    tl.fromTo(target,
      { 
        opacity: 0,
        skewX: -25,
        x: -100,
        filter: 'blur(10px)'
      },
      { 
        opacity: 0.3,
        skewX: 10,
        x: 50,
        filter: 'blur(5px)',
        duration: 0.15,
        ease: "power1.in",
        ...animationProps
      }
    )
    .to(target, {
      skewX: -15,
      x: -30,
      opacity: 0.5,
      duration: 0.1,
      ease: "none"
    })
    .to(target, {
      opacity: 1,
      skewX: 0,
      x: 0,
      filter: 'blur(0px)',
      duration: 0.4,
      ease: "power2.out"
    })
    .to(target, {
      opacity: 0.2,
      x: -15,
      skewX: 10,
      duration: 0.08,
    })
    .to(target, {
      opacity: 1,
      x: 10,
      skewX: -8,
      duration: 0.08,
    })
    .to(target, {
      opacity: 0.3,
      x: -8,
      skewX: 5,
      duration: 0.08,
    })
    .to(target, {
      opacity: 1,
      x: 5,
      skewX: -3,
      duration: 0.08,
    })
    .to(target, {
      opacity: 0.4,
      x: -5,
      duration: 0.08,
    })
    .to(target, {
      opacity: 1,
      x: 0,
      skewX: 0,
      duration: 0.3,
      ease: "power2.out"
    })
  
    return tl
  }

