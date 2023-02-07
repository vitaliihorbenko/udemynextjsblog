import Image from "next/image";

import classes from "../../assets/styles/components/home-page/hero.module.css"

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/img/site/Vitalii.jpeg" alt="An image showing Vitalii" width={300} height={300}/>
            </div>
            <h1>Hi, I#39;m Vitalii</h1>
            <p>I blog about web development - especially frontend frameworks like React.js</p>
        </section>
    )
}

export default Hero