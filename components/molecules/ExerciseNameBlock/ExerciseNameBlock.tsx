import React from 'react'
import TitleSubtitleComponent from '../TitleSubtitleComponent/TitleSubtitleComponent'

interface IExerciseNameBlock {
  title: string
  subtitle: string
}
function ExerciseNameBlock({ title, subtitle }: IExerciseNameBlock) {
  return (
    <div style={{ flex: 4, textWrap: 'nowrap' }}>
      <TitleSubtitleComponent title={title} subtitle={subtitle} reverse />
    </div>
  )
}

export default ExerciseNameBlock
