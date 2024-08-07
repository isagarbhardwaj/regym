import { motion } from "framer-motion"
import heroImage from "../assets/heroImage.jpg"

const Hero = () => {
    return (
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start px-3 mx-4">
                    <motion.h1 
                        className="text-8xl"
                        initial={{x: -100, opacity: 0}} 
                        animate={{x: 0, opacity: 1}} 
                        transition={{duration: 0.5, delay: 1.2}} >
                            Ready to break your body?
                    </motion.h1>
                    <motion.p 
                        initial={{x: -100, opacity: 0}} 
                        animate={{x: 0, opacity: 1}} 
                        transition={{duration: 1, delay: 1.2}} 
                        className="bg-gradient-to-r mt-4 from-blue-300 via-orange-500 to-sky-500 bg-clip-text text-6xl tracking-tight text-transparent">
                            Your body can stand almost anything.
                    </motion.p>
                    <motion.p 
                        initial={{x: -100, opacity: 0}} 
                        animate={{x: 0, opacity: 1}} 
                        transition={{duration: 1.5, delay: 1.2}} 
                        className="bg-gradient-to-r mt-4 from-blue-300 via-orange-500 to-sky-500 bg-clip-text text-6xl tracking-tight text-transparent">
                            It’s your mind that you have to convince.
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start px-3">
                    <motion.div 
                        initial={{x: 100, opacity: 0}} 
                        animate={{x: 0, opacity: 1}} 
                        transition={{duration: 1, delay: 1.2}} 
                        className="my-5 px-3">
                            <img src={heroImage} width={800} alt="Go To GYM" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero;