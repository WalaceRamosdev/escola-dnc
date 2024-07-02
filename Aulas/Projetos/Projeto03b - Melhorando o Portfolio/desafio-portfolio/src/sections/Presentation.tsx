'use client'

import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

import style from './Presentation.module.css'

export const Presentation = () => {

    const tl = gsap.timeline({ defaults: { duration: 1 } })

    const titleRef =  useRef(null)
    const descriptionRef = useRef(null)

    useEffect(() => {
        const title = titleRef.current
        const description = descriptionRef.current

    tl.fromTo(title, {
            opacity:0, y: 100},
        {   opacity: 1, y: 0 },
    "-=0.75")

    .fromTo(description, {
            opacity:0, y: 100},
        {  opacity: 1, y: 0,}
    )
    }, [])

    return (
        <main className={style.main}>
            
            <h1 ref={titleRef}>Olá! Sou Walace Ramos</h1>

            <p ref={descriptionRef}>
                Com uma longa experiência no desenvolvimento de websites e aplicações web, estou aqui 
                para transformar suas ideias em realidade digital. Especializado em tecnologias modernas 
                como HTML5, CSS3, JavaScript, ReactJs, e Node.js, ofereço soluções sob medida que 
                atendem às necessidades específicas do seu negócio.</p>
        </main>
    )
}