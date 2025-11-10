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