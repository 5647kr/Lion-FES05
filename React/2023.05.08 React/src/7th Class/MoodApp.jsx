import React, { useState } from 'react'
import DisplayMood from './DisplayMood/DisplayMood'
import MenuList from './MenuList/MenuList'


export default function MoodApp() {
  const [currentMood, setCurrentMood] = useState("");

  return (
    <div>
      <MenuList mood={currentMood} onItemClick={setCurrentMood} />
      <DisplayMood mood={currentMood}/>
    </div>
  )
}
