import { IForestItem, IWord } from '@/types'

export const RESULT_STATUSES = [
  {
    id: 0,
    title: 'Цього разу не вийшло, але продовжуйте працювати!',
  },
  {
    id: 1,
    title: 'Не погано, але спробуйте покращити. У вас все вийде!',
  },
  {
    id: 2,
    title: 'Відмінно! Ви на правильному шляху!',
  },
]

export const getExerciseResultStatus = (
  learned: IWord[] | IForestItem[],
  wrong: IWord[] | IForestItem[],
) => {
  const totalWords = learned.length + wrong.length
  const accuracy = totalWords === 0 ? 0 : (learned.length / totalWords) * 100

  if (accuracy < 50) {
    return RESULT_STATUSES[0]
  } else if (accuracy < 75) {
    return RESULT_STATUSES[1]
  } else {
    return RESULT_STATUSES[2]
  }
}
