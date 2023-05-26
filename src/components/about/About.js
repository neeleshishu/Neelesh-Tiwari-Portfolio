import './About.scss';
import main from '../../pics/side.png';

const About = () => {
    return(
        <>
        <h1>About</h1>
        <div className="about" id='about'>
        
        <div className="left">
            <img src={main} alt="main" />
        </div>
        <div className="right">
            

            <p className="heading">Here is a little more about me</p>
            <p className="breif">I'm <span>Neelesh</span>. I am Software intern at Xtreme Media PVT. LTD. And I am a Fullstack Developer who specializes in in frontend development using ReactJs as well as backend development. Apart from development, I am a competitive programmer and I have a comprehensive understanding of C++ and Javascript and I am skilled in DSA and Core subjects like DBMS, OS and CN.</p>

            </div>
            </div>
        </>
    )
}

export default About;