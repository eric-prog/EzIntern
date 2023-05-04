import FolderImg from '../assets/folder.png'



export default function Resume() {
    return (
        <div className='intro-wrapper resume'>
            <div className='intro-box right-box'>
                <img className='intro-img' src={FolderImg.src} alt="" />
            </div>
            <div className='intro-box'>
                <h1 className='ezintern resume-title'>Resume ✏️</h1>
                <p className='tagline resume-title'>Let me know if you want resume tips!</p>
            </div>
        </div>
    )
  }
  