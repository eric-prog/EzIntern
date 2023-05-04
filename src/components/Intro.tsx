import BagImg from '../assets/3Dbag.png'



export default function Intro() {
    return (
        <div className='intro-wrapper'>
            <div className='intro-box'>
                <h1 className='ezintern'>Easy Intern 👨🏻‍💻</h1>
                <p className='tagline'>Helping fellow students find and succeed in internships!</p>
            </div>
            <div className='intro-box right-box'>
                <img className='intro-img' src={BagImg.src} alt="" />
            </div>
        </div>
    )
  }
  