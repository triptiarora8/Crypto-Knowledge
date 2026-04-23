
import './App.css'
import Certificate from './components/Certificate/Index'
import CryptoIntro from './components/CryptoIntro/CryptoIntro'
import Feedback from './components/Feedback/Index'
import Hero from './components/Hero/Hero'
import Money from './components/Money/Money'
import Package from './components/Package/Package'

function App() {

  return (
    <div className=" bg-[#FFFBF6] min-h-screen">
      <Hero/>
      <Money/>
      <Package/>
      <CryptoIntro/>
      <div style={{backgroundImage:"url(https://lwfiles.mycourse.app/686f7ba4ddeafe981e783e8d-public/fda5787ef0fbe2033067bf6c27ac4d96.png)", backgroundSize: 'fit', backgroundPosition: 'center'}} className='w-full h-[25rem] flex items-center justify-center py-[5rem]'>
      </div>
      <Certificate/>
      <Feedback/>
    </div>
  )
}

export default App
