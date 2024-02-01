import beg1 from '../public/images/grammar/1_beginner.png'
import beg2 from '../public/images/grammar/2_beginner.png'
import int1 from '../public/images/grammar/1_intermediate.png'
import int2 from '../public/images/grammar/2_intermediate.png'
import adv1 from '../public/images/grammar/1_advanced.png'
import adv2 from '../public/images/grammar/2_advanced.png'
import { IGrammarLevel } from '@/types'

export const GRAMMAR_LEVELS: IGrammarLevel[] = [
  {
    level: 'Beginner',
    exercises: [
      {
        title: 'Present Simple',
        subtitle: 'Теперішній неозначений час',
        icon: beg1,
        slug: 'beginner_present_simple',
      },
      {
        title: 'Past Simple',
        subtitle: 'Минулий неозначений час',
        icon: beg2,
        slug: 'beginner_past_simple',
      },
    ],
  },
  {
    level: 'Intermediate',
    exercises: [
      {
        title: 'Past Continuous',
        subtitle: 'Минулий тривалий час',
        icon: int1,
        slug: 'intermediate_past_continuous',
      },
      {
        title: 'Present Perfect',
        subtitle: 'Теперішій доконаний час',
        icon: int2,
        slug: 'intermediate_present_perfect',
      },
    ],
  },
  {
    level: 'Advanced',
    exercises: [
      {
        title: 'Participles',
        subtitle: 'Дієприкметник',
        icon: adv1,
        slug: 'advanced_participles',
      },
      {
        title: 'Tenses with Present meaning',
        subtitle: 'Часи для вираження теперішнього',
        icon: adv2,
        slug: 'advanced_present_meaning',
      },
    ],
  },
]
