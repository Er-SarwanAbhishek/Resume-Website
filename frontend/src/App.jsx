import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BeigeTemplate } from './Templates/BeigeTemplate'
import SATSTemplate from './TemplateB/SATSTemplate'
import { GrayThemeTemplate } from './GrayThemeTemplate/GrayThemeTemplate'
import { FThemeTemplate } from './FThemeTemplate/FThemeTemplate'
import { BlueModernTemplate } from './BlueModernTemplate/BlueModernTemplate'
import { NebulaResumeTemplate } from './NebulaResumetemplate/NebulaResumeTemplate'
import { SalesAchieverResume } from './SalesResumeTemplate/SalesAchieverResume'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BeigeTemplate/>
   <br />
   <GrayThemeTemplate/>
   <br />
   <FThemeTemplate/>
   <br />
   <BlueModernTemplate/>
   <br />
   <NebulaResumeTemplate/>
   <br />
   <SalesAchieverResume/>
   <br />
   <SATSTemplate/>
   <br />
    </>
  )
}

export default App
