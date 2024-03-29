import { colors } from '@/utils/colors'
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
  [key: string]: unknown
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
  translation: string
  title: string
  transcription: string
  definition: string
  synonyms: string[]
  example: string
}

export type LessonPractice = {
  id: string
  type: PracticeTypes
  missed?: string
  translation: string
  title: string
  variants: string[]
  multiselect: LessonMultiselect[] | []
  correctVariant: string
  hint: string
  placeholder?: string
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
  slug?: string
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

export interface IArticle {
  id: string
  status: EXERCISE_STATUS
  image: string
  slug: string
  data: IArticleData
}

export interface IArticleData {
  title: string
  parsedSentences: IParsedContent[]
  parsedTitle: Omit<IParsedContent, 't'>[]
}

export interface IParsedContent {
  id: string | number
  items?: IParsedItem[]
  text?: string
  t?: string
}

export interface IParsedItem {
  id: string
  w: string
}

export interface IForestItem {
  id: string
  translation: string
  title: string
  variants: IForestVariant[]
}

export interface IForestVariant {
  id: string
  answerText: string
}

export enum AnswerStatus {
  PENDING = 'pending',
  FAIL = 'fail',
  SUCCESS = 'success',
}

export const ContainerColors = {
  [AnswerStatus.PENDING]: colors.lightGreen,
  [AnswerStatus.SUCCESS]: colors.green,
  [AnswerStatus.FAIL]: colors.lightWarning,
}

export interface ITranslationWord {
  id: string
  title: string
  translation: string
  transcription: string
  variants: ITranslationVariants[]
}

export interface ITranslationVariants {
  id: string
  title: string
}

export interface IRule {
  code: string
  slug: string
  data: IRuleData[]
}

export interface ITenseData {
  id: number
  items: ITenseItem[]
  title: string
  translation: string
}

export interface ITenseItem {
  isPunctuation: boolean
  title: string
  variants: string[]
}

export interface IRuleData {
  code: string
  description: string
  id: number
  tagId: number
  title: string
  examples: IRuleExamples[]
}

export interface IRuleExamples {
  id: number
  spelling: string
  translation: string
}
