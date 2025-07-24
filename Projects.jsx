import React from 'react'
import Card from '../Card/Card'
import va from "../../assets/va.png"
import fw from "../../assets/cb.png"
import air from "../../assets/air.jpeg"
import food from "../../assets/food.jpg"
import dash from "../../assets/dash.png"
import music from "../../assets/music.png"
import "./Projects.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Projects = () => {

    useGSAP(()=>{
    gsap.from("#para",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:"#para",
        scroll:"body",
        scrub:2,
        
        start:"top 80%",
        end:"top 30%"
      }
    })
    gsap.from(".slider",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:"#para",
        scroll:"body",
        scrub:2,
    
        start:"top 80%",
        end:"top 30%"
      }
    })
})
  return (

    <div id='projects'>
        <h1 id='para'>2+ YEARS EXPERINCED IN PROJECTS</h1>
        <div className='slider'>
            <Card title="VIRTUAL ASSISTENT" image={va}/>
               <Card title="CHATBOT 2.0" image={fw}/>
                <Card title="AIRBNB" image={air}/>
                 <Card title="FOOD DELIVERY" image={food}/>
                 <Card title="EMPLOYEE AND ADMIN DASHBOARD" image={dash}/>
                <Card title="MUSIC APP" image={music}/>
                     
        </div>
    </div>
  )
}

export default Projects