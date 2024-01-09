//  ------ DICTIONARY PAGE DATA------

import { CardItem } from '@/types'
import CheckboxBlankCircleLineIcon from 'remixicon-react/CheckboxBlankCircleLineIcon'
import CheckboxCircleLineIcon from 'remixicon-react/CheckboxCircleLineIcon'
import FileWord2LineIcon from 'remixicon-react/FileWord2LineIcon'
import TimeLineIcon from 'remixicon-react/TimeLineIcon'

export const WORDS = [
  {
    id: 1,
    title: 'apple',
    translation: 'яблуко',
    picture: 'https://usapple.org/wp-content/uploads/2019/10/apple-pink-lady.png',
    state: 'in progress',
  },
  {
    id: 1,
    title: 'Hello world',
    translation: 'Привіт світ',
    picture: 'https://usapple.org/wp-content/uploads/2019/10/apple-pink-lady.png',
    state: 'unlearned',
  },
  {
    id: 1,
    title: 'apple',
    translation: 'яблуко',
    picture: 'https://usapple.org/wp-content/uploads/2019/10/apple-pink-lady.png',
    state: 'learned',
  },
]

export const DICTIONARY_SELECT_OPTIONS = [
  {
    id: 1,
    value: 'all',
    label: 'All',
  },
  {
    id: 2,
    value: 'word',
    label: 'Word',
  },
  {
    id: 3,
    value: 'phrase',
    label: 'Phrase',
  },
]

export const DICTIONARY_STATISTICS: CardItem[] = [
  {
    title: '1500 words',
    subtitle: 'My dictionary',
    icon: FileWord2LineIcon,
  },
  {
    title: '12 words',
    subtitle: 'New words',
    icon: CheckboxBlankCircleLineIcon,
  },
  {
    title: '3600 words',
    subtitle: 'Learning',
    icon: TimeLineIcon,
  },
  {
    title: '3600 words',
    subtitle: 'Learned',
    icon: CheckboxCircleLineIcon,
  },
]
