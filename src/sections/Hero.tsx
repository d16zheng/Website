import { FaGithub, FaLinkedin} from "react-icons/fa";

function Hero() {
    return (
        <section className="hero">
            <h1>David Zheng</h1>

            <p> 
                Math • Finance • Software Engineering  
            </p>

            <div className="hero-links">
                <a href='#'>
                    <FaGithub size={20} />
                    GitHub
                </a>
                
                <a href='#'>
                    <FaLinkedin size={20} />
                    Linkedin
                </a>
            </div>
        </section>
    );
}

export default Hero;