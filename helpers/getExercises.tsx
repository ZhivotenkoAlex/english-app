import ConstructItemType from '@/components/features/PracticeTypeItem/ConstructItemType'
import CorrectItemType from '@/components/features/PracticeTypeItem/CorrectItemType'
import InputItemType from '@/components/features/PracticeTypeItem/InputItemType'
import SelectOneItemType from '@/components/features/PracticeTypeItem/SelectOneItemType'
import { LessonPractice, LessonType, PracticeTypes } from '@/types'
import { FieldInputProps } from 'react-final-form'

export const getExercises = (
  type: string,
  activeItem: LessonPractice,
  input: FieldInputProps<string, HTMLElement>,
  isChecked: boolean,
  isValidated: boolean | null,
) => {
  const exercises = {
    input: (
      <InputItemType
        activeItem={activeItem}
        input={input}
        isChecked={isChecked}
        isValidated={isValidated}
      />
    ),
    select_one: (
      <SelectOneItemType
        activeItem={activeItem}
        input={input}
        isChecked={isChecked}
        isValidated={isValidated}
      />
    ),
    correct: (
      <CorrectItemType
        activeItem={activeItem}
        input={input}
        isChecked={isChecked}
        isValidated={isValidated}
      />
    ),
    construct: (
      <ConstructItemType
        activeItem={activeItem}
        input={input}
        isChecked={isChecked}
        isValidated={isValidated}
      />
    ),
  }
  return exercises[type]
}
