import '../App.css'

import heroimg1 from '../assets/images/desktop-image-hero-1.jpg'
import heroimg2 from '../assets/images/desktop-image-hero-2.jpg'
import heroimg3 from '../assets/images/desktop-image-hero-3.jpg'
import aboutimg from '../assets/images/image-about-dark.jpg'
import aboutimg2 from '../assets/images/image-about-light.jpg'
import arrow from '../assets/images/icon-arrow.svg'
import angleright from '../assets/images/icon-angle-right.svg'
import angleleft from '../assets/images/icon-angle-left.svg'

import { useState } from 'react'

function Main(){
const backarrow = '<'
const frontarrow = '>'
const [hero, setHero] = useState(0)


const handleContent = () => {
    const previndex =  hero === 0
    const currentIndex = previndex ? HeroComponents.length - 1 : hero - 1;

    setHero(currentIndex)
}
const handlePreviousContent = () => {
    const nextIndex = hero === HeroComponents.length - 1
    const currentIndex = nextIndex ? 0 : hero + 1;

    setHero(currentIndex)

    // const handleButtonClick2 = (index: any) => {
    //     setHero(index)
    // }
}
const SetContent = (index: any) => {
    setHero(index)
}
const Hero1 = () => {
    return(
        <section>
            <article>
                <img className='hero_img' src={heroimg1} alt="" />
            </article>
            <article>
                <div className='text_box'>
                    <h1 style={{fontWeight:'900'}}>Discover innovative ways to decorate</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sunt magnam amet id nam quibusdam, 
                        eum nostrum veniam mollitia expedita hic blanditiis voluptate vero error dignissimos debitis adipisci. Esse, sit.
                    </p>
                    <h4 className='action_btn'>Shop Now <img src={arrow} alt="" /></h4>
                </div>
                <div>
                    <button onClick={handlePreviousContent}>
                        <img src={angleleft} alt="" />
                    </button>
                    <button onClick={handleContent}>
                        <img src={angleright} alt="" />
                    </button>
                </div>
            </article>
        </section>
    )
}
const Hero2 = () => {
    return(
        <section>
            <article>
                <img className='hero_img' src={heroimg2} alt="" />
            </article>
            <article>
                <div className='text_box'>
                    <h1 style={{fontWeight:'900'}}>We are available all across the globe</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sunt magnam amet id nam quibusdam, 
                        eum nostrum veniam mollitia expedita hic blanditiis voluptate vero error dignissimos debitis adipisci. Esse, sit.
                    </p>
                    <h4 className='action_btn'>Shop Now <img src={arrow} alt="" /></h4>
                </div>
                <div>
                    <button onClick={handlePreviousContent}>
                        <img src={angleleft} alt="" />
                    </button>
                    <button onClick={handleContent}>
                        <img src={angleright} alt="" />
                    </button>
                </div>
            </article>
        </section>
    )
}
const Hero3 = () => {
    return(
        <section>
            <article>
                <img className='hero_img' src={heroimg3} alt="" />
            </article>
            <article>
                <div className='text_box'>
                    <h1 style={{fontWeight:'900'}}>Manufactured with the best materials</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sunt magnam amet id nam quibusdam, 
                        eum nostrum veniam mollitia expedita hic blanditiis voluptate vero error dignissimos debitis adipisci. Esse, sit.
                    </p>
                    <h4 className='action_btn'>Shop Now <img src={arrow} alt="" /></h4>
                </div>
                <div>
                    <button onClick={handlePreviousContent}>
                        <img src={angleleft} alt="" />
                    </button>
                    <button onClick={handleContent}>
                        <img src={angleright} alt="" />
                    </button>
                </div>
            </article>
        </section>
    )
}
const HeroComponents = [
    <Hero1 />,
    <Hero2 />,
    <Hero3 />
]
    return(
        <main>
            <>
                {HeroComponents[hero]}
            </>
            <section>
                <article>
                    <img src={aboutimg} alt="" />
                </article>
                <article>
                    <h4>
                        ABOUT OUR FURNITURE
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam laborum,
                        eos quisquam sint quas magni at ducimus facere, molestias ipsa ullam nemo amet libero 
                        dignissimos modi blanditiis, eius totam ratione
                    </p>
                </article>
                <article>
                    <img src={aboutimg2} alt="" />
                </article>
            </section>
        </main>
    )
}

export default Main