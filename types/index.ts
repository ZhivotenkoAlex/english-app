import { StaticImageData } from 'next/image'
import { RemixiconReactIconComponentType } from 'remixicon-react'

export enum PracticeTypes {
  SELECT_ONE = 'select_one',
  CONSTRUCT = 'construct',
  CORRECT = 'correct',
  INPUT = 'input',
  TRANSLATE = 'translate',
}

export enum EXERCISE_STATUS {
  DONE = 'done',
  IN_PROGRESS = 'in_progress',
  NOT_STARTED = 'not_started',
}
export interface IMenuItem {
  id: number
  label: string
  path: string
}

export type AnyObject = {
  [key: string]: any
}

export interface IPopupMenuItem extends Omit<IMenuItem, 'subItems'> {
  icon: React.ReactNode
}

type LessonMultiselect = {
  variants: string[]
  correctVariant: string
}

export type LessonVocabulary = {
  id: string
  en: string
  ua: string
  transcription: string
  definition: string
  synonyms: string[]
  example: string
}

export type LessonPractice = {
  id: string
  type: PracticeTypes
  missed: string
  en: string
  ua: string
  variants: string[]
  placeholder: 'string'
  multiselect: LessonMultiselect[] | []
  correctVariant: string
  hint: string
}

export type LessonContent = {
  vocabulary: LessonVocabulary[]
  practice: LessonPractice[]
}

export type LessonType = {
  id: string
  number: number
  slug: string
  topic: string
  status: EXERCISE_STATUS
  imageName: string
  lessonContent: LessonContent
}

export type CardItem = {
  title: string
  subtitle: string
  icon: RemixiconReactIconComponentType
}

export interface ITraining {
  title: string
  titleColor: string
  subtitle: string
  gridArea: string
  background: StaticImageData
  path: string
}

export interface IGrammarLevel {
  level: string
  exercises: IGrammarExercise[]
}
export type IGrammarExercise = Omit<CardItem, 'icon'> & {
  icon: StaticImageData
}

export interface IWord {
  id: number
  title: string
  translation: string
  picture: string
  state: string
}
