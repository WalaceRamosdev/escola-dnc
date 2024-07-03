'use client'

import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

import style from './css/Presentation.module.css'
import { Button } from '../components/buttons/Button'

export const Presentation = () => {

    const tl = gsap.timeline({ defaults: { duration: 0.75 } })

    const titleRef =  useRef(null)
    const descriptionRef = useRef(null)

    useEffect(() => {
        const title = titleRef.current
        const description = descriptionRef.current

    tl.fromTo(title, {
            opacity:0, x: 100},
        {   opacity: 1, x: 0 },)

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

                <Button text='Saber mais' link="https://www.instagram.com/walacedev.contato/"/>

        </main>
    )
}