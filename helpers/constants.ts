import { v4 as uuid } from 'uuid'
import ROUTES from './routes'

export enum LESSON_STATUS {
  DONE = 'done',
  IN_PROGRESS = 'in_progress',
  NOT_STARTED = 'not_started',
}

export const Lessons = [
  {
    id: 1,
    number: 1,
    slug: `The_best_job`,
    topic: `The best job`,
    lessonContent: {
      vocabulary: [
        {
          id: uuid(),
          en: 'accomplish',
          ua: 'виконувати',
          transcription: '[əˈkʌmplɪʃ]',
          definition: 'achieve or complete successfully',
          synonyms: ['make', 'commit', 'carry out'],
          example: 'Think of what you could accomplish with a real budget.',
        },
        {
          id: uuid(),
          en: 'accountant',
          ua: 'бухгалтер',
          transcription: '[əˈkaʊntənt]',
          definition: 'a person whose job is to keep or inspect financial accounts',
          synonyms: ['auditor', 'comptroller', 'controller'],
          example: `Hi, my name is Jae Park. I used to be a Computer Science major but now I'm an accountant.`,
        },
        {
          id: uuid(),
          en: 'ambition',
          ua: 'ціль',
          transcription: '[æmˈbɪʃən]',
          definition: 'a strong desire to do or achieve something',
          synonyms: ['goal', 'dream', 'vision'],
          example:
            'He lost his ambition and forgot everything but his love for this unworthy woman.',
        },
        {
          id: uuid(),
          en: 'apply for',
          ua: 'подавати заявку',
          transcription: '[əˈplaɪ fɔːr]',
          definition: 'to make a formal application or request',
          synonyms: ['ask', 'demand'],
          example: 'Any student could apply for a scholarship.',
        },
        {
          id: uuid(),
          en: 'break',
          ua: 'перерва',
          transcription: '[breɪk]',
          definition:
            'to interrupt or to stop something for a short period: a period of time when you stop working in order to rest, eat etc',
          synonyms: ['intermission', 'recess', 'part'],
          example:
            'She was taking back a library book when she tripped and fell to the ground breaking both her shoulder and part of her upper left arm .',
        },
        {
          id: uuid(),
          en: 'chairman',
          ua: 'голова',
          transcription: '[ˈtʃeəmən]',
          definition: 'a person chosen to preside over a meeting',
          synonyms: ['speaker', 'chairperson', 'chair'],
          example: 'Archibald is the chairman , president and chief executive of the company.',
        },
        {
          id: uuid(),
          en: 'deal with',
          ua: `впоратись з`,
          transcription: '[diːl wɪð]',
          definition:
            'if you deal with an unpleasant emotion or an emotionally difficult situation, you recognize it, and remain calm and in control of yourself in spite of it',
          synonyms: ['manage', 'handle', 'take on'],
          example: `He's a hard man to deal with.`,
        },
        {
          id: uuid(),
          en: 'fashion designer',
          ua: 'модельєр',
          transcription: '[ˈfæʃən dɪˈzaɪnər]',
          definition: 'a person who designs high-fashion clothing',
          synonyms: ['designer', 'Couturier'],
          example:
            'Like other artists, fashion designers are somewhat sensitive and can be competitive.',
        },
        {
          id: uuid(),
          en: 'fire',
          ua: 'звільняти',
          transcription: '[faɪər]',
          definition:
            'the state of burning that produces flames that send out heat and light, and might produce smoke; to remove someone from their job',
          synonyms: ['terminate', 'dismiss', 'can'],
          example: `You can't fire somebody because he follows his heart.`,
        },
        {
          id: uuid(),
          en: 'flexible hours',
          ua: 'гнучкий графік',
          transcription: '[ˈfleksɪbl̩ aʊərz]',
          definition: 'flexible hours allow workers to alter workday start and finish times',
          synonyms: ['Flextime'],
          example: 'Flexible hours benefit everyone.',
        },
        {
          id: uuid(),
          en: 'insurance agent',
          ua: 'страховий агент',
          transcription: '[ɪnˈʃɔːrənts ˈeɪdʒənt]',
          definition: 'a person employed to sell insurance policies',
          synonyms: ['underwriter'],
          example:
            'A well-designed succession plan will likely involve other professionals such as an attorney, appraiser and insurance agent .',
        },
        {
          id: uuid(),
          en: 'job interview',
          ua: 'співбесіда',
          transcription: '[dʒɒb ˈɪntəvjuː]',
          definition:
            'a formal meeting in which an applicant is asked questions to determine their suitability for a particular job',
          synonyms: ['job hunting'],
          example: `She talked constantly, wouldn't accept authority and had such a short span of attention that she'd probably wander off to make herself a coffee during the initial job interview`,
        },
        {
          id: uuid(),
          en: 'judge',
          ua: 'суддя',
          transcription: '[dʒʌdʒ]',
          definition:
            'a person who is in charge of a trial in a court and decides how a person who is guilty of a crime should be punished, or who makes decisions on legal matters',
          synonyms: ['justice', 'magistrate', 'try'],
          example: 'I just need to see a court order signed by a judge.',
        },
        {
          id: uuid(),
          en: 'knowledge',
          ua: 'знання',
          transcription: '[ˈnɒlɪdʒ]',
          definition:
            'facts, information, and skills acquired through experience or education; the theoretical or practical understanding of a subject',
          synonyms: ['education', 'information', 'command'],
          example: 'Knowledge is so cool he bought me a skateboard for my birthday!',
        },
        {
          id: uuid(),
          en: 'negotiate',
          ua: 'вести переговори',
          transcription: '[nəˈgəʊʃieɪt]',
          definition:
            'to have formal discussions with someone in order to reach an agreement with them',
          synonyms: ['deal', 'bargain', 'agree'],
          example: 'They have refused to negotiate on this issue.',
        },
      ],
    },
    status: LESSON_STATUS.NOT_STARTED,
    imageName: 'job',
  },
  {
    id: 2,
    number: 2,
    slug: 'Working',
    topic: 'Working',
    lessonContent: {
      vocabulary: [
        {
          id: uuid(),
          en: 'accomplish',
          ua: 'виконувати',
          transcription: '[əˈkʌmplɪʃ]',
          definition: 'achieve or complete successfully',
          synonyms: ['make', 'commit', 'carry out'],
          example: 'Think of what you could accomplish with a real budget.',
        },
        {
          id: uuid(),
          en: 'accountant',
          ua: 'бухгалтер',
          transcription: '[əˈkaʊntənt]',
          definition: 'a person whose job is to keep or inspect financial accounts',
          synonyms: ['auditor', 'comptroller', 'controller'],
          example: `Hi, my name is Jae Park. I used to be a Computer Science major but now I'm an accountant.`,
        },
        {
          id: uuid(),
          en: 'ambition',
          ua: 'ціль',
          transcription: '[æmˈbɪʃən]',
          definition: 'a strong desire to do or achieve something',
          synonyms: ['goal', 'dream', 'vision'],
          example:
            'He lost his ambition and forgot everything but his love for this unworthy woman.',
        },
        {
          id: uuid(),
          en: 'apply for',
          ua: 'подавати заявку',
          transcription: '[əˈplaɪ fɔːr]',
          definition: 'to make a formal application or request',
          synonyms: ['ask', 'demand'],
          example: 'Any student could apply for a scholarship.',
        },
        {
          id: uuid(),
          en: 'break',
          ua: 'перерва',
          transcription: '[breɪk]',
          definition:
            'to interrupt or to stop something for a short period: a period of time when you stop working in order to rest, eat etc',
          synonyms: ['intermission', 'recess', 'part'],
          example:
            'She was taking back a library book when she tripped and fell to the ground breaking both her shoulder and part of her upper left arm .',
        },
        {
          id: uuid(),
          en: 'chairman',
          ua: 'голова',
          transcription: '[ˈtʃeəmən]',
          definition: 'a person chosen to preside over a meeting',
          synonyms: ['speaker', 'chairperson', 'chair'],
          example: 'Archibald is the chairman , president and chief executive of the company.',
        },
        {
          id: uuid(),
          en: 'deal with',
          ua: `впоратись з`,
          transcription: '[diːl wɪð]',
          definition:
            'if you deal with an unpleasant emotion or an emotionally difficult situation, you recognize it, and remain calm and in control of yourself in spite of it',
          synonyms: ['manage', 'handle', 'take on'],
          example: `He's a hard man to deal with.`,
        },
        {
          id: uuid(),
          en: 'fashion designer',
          ua: 'модельєр',
          transcription: '[ˈfæʃən dɪˈzaɪnər]',
          definition: 'a person who designs high-fashion clothing',
          synonyms: ['designer', 'Couturier'],
          example:
            'Like other artists, fashion designers are somewhat sensitive and can be competitive.',
        },
        {
          id: uuid(),
          en: 'fire',
          ua: 'звільняти',
          transcription: '[faɪər]',
          definition:
            'the state of burning that produces flames that send out heat and light, and might produce smoke; to remove someone from their job',
          synonyms: ['terminate', 'dismiss', 'can'],
          example: `You can't fire somebody because he follows his heart.`,
        },
        {
          id: uuid(),
          en: 'flexible hours',
          ua: 'гнучкий графік',
          transcription: '[ˈfleksɪbl̩ aʊərz]',
          definition: 'flexible hours allow workers to alter workday start and finish times',
          synonyms: ['Flextime'],
          example: 'Flexible hours benefit everyone.',
        },
        {
          id: uuid(),
          en: 'insurance agent',
          ua: 'страховий агент',
          transcription: '[ɪnˈʃɔːrənts ˈeɪdʒənt]',
          definition: 'a person employed to sell insurance policies',
          synonyms: ['underwriter'],
          example:
            'A well-designed succession plan will likely involve other professionals such as an attorney, appraiser and insurance agent .',
        },
        {
          id: uuid(),
          en: 'job interview',
          ua: 'співбесіда',
          transcription: '[dʒɒb ˈɪntəvjuː]',
          definition:
            'a formal meeting in which an applicant is asked questions to determine their suitability for a particular job',
          synonyms: ['job hunting'],
          example: `She talked constantly, wouldn't accept authority and had such a short span of attention that she'd probably wander off to make herself a coffee during the initial job interview`,
        },
        {
          id: uuid(),
          en: 'judge',
          ua: 'суддя',
          transcription: '[dʒʌdʒ]',
          definition:
            'a person who is in charge of a trial in a court and decides how a person who is guilty of a crime should be punished, or who makes decisions on legal matters',
          synonyms: ['justice', 'magistrate', 'try'],
          example: 'I just need to see a court order signed by a judge.',
        },
        {
          id: uuid(),
          en: 'knowledge',
          ua: 'знання',
          transcription: '[ˈnɒlɪdʒ]',
          definition:
            'facts, information, and skills acquired through experience or education; the theoretical or practical understanding of a subject',
          synonyms: ['education', 'information', 'command'],
          example: 'Knowledge is so cool he bought me a skateboard for my birthday!',
        },
        {
          id: uuid(),
          en: 'negotiate',
          ua: 'вести переговори',
          transcription: '[nəˈgəʊʃieɪt]',
          definition:
            'to have formal discussions with someone in order to reach an agreement with them',
          synonyms: ['deal', 'bargain', 'agree'],
          example: 'They have refused to negotiate on this issue.',
        },
      ],
    },
    status: LESSON_STATUS.IN_PROGRESS,
    imageName: 'Working',
  },
  {
    id: 3,
    number: 3,
    slug: 'Work',
    topic: 'Work',
    lessonContent: {
      vocabulary: [
        {
          id: uuid(),
          en: 'accomplish',
          ua: 'виконувати',
          transcription: '[əˈkʌmplɪʃ]',
          definition: 'achieve or complete successfully',
          synonyms: ['make', 'commit', 'carry out'],
          example: 'Think of what you could accomplish with a real budget.',
        },
        {
          id: uuid(),
          en: 'accountant',
          ua: 'бухгалтер',
          transcription: '[əˈkaʊntənt]',
          definition: 'a person whose job is to keep or inspect financial accounts',
          synonyms: ['auditor', 'comptroller', 'controller'],
          example: `Hi, my name is Jae Park. I used to be a Computer Science major but now I'm an accountant.`,
        },
        {
          id: uuid(),
          en: 'ambition',
          ua: 'ціль',
          transcription: '[æmˈbɪʃən]',
          definition: 'a strong desire to do or achieve something',
          synonyms: ['goal', 'dream', 'vision'],
          example:
            'He lost his ambition and forgot everything but his love for this unworthy woman.',
        },
        {
          id: uuid(),
          en: 'apply for',
          ua: 'подавати заявку',
          transcription: '[əˈplaɪ fɔːr]',
          definition: 'to make a formal application or request',
          synonyms: ['ask', 'demand'],
          example: 'Any student could apply for a scholarship.',
        },
        {
          id: uuid(),
          en: 'break',
          ua: 'перерва',
          transcription: '[breɪk]',
          definition:
            'to interrupt or to stop something for a short period: a period of time when you stop working in order to rest, eat etc',
          synonyms: ['intermission', 'recess', 'part'],
          example:
            'She was taking back a library book when she tripped and fell to the ground breaking both her shoulder and part of her upper left arm .',
        },
        {
          id: uuid(),
          en: 'chairman',
          ua: 'голова',
          transcription: '[ˈtʃeəmən]',
          definition: 'a person chosen to preside over a meeting',
          synonyms: ['speaker', 'chairperson', 'chair'],
          example: 'Archibald is the chairman , president and chief executive of the company.',
        },
        {
          id: uuid(),
          en: 'deal with',
          ua: `впоратись з`,
          transcription: '[diːl wɪð]',
          definition:
            'if you deal with an unpleasant emotion or an emotionally difficult situation, you recognize it, and remain calm and in control of yourself in spite of it',
          synonyms: ['manage', 'handle', 'take on'],
          example: `He's a hard man to deal with.`,
        },
        {
          id: uuid(),
          en: 'fashion designer',
          ua: 'модельєр',
          transcription: '[ˈfæʃən dɪˈzaɪnər]',
          definition: 'a person who designs high-fashion clothing',
          synonyms: ['designer', 'Couturier'],
          example:
            'Like other artists, fashion designers are somewhat sensitive and can be competitive.',
        },
        {
          id: uuid(),
          en: 'fire',
          ua: 'звільняти',
          transcription: '[faɪər]',
          definition:
            'the state of burning that produces flames that send out heat and light, and might produce smoke; to remove someone from their job',
          synonyms: ['terminate', 'dismiss', 'can'],
          example: `You can't fire somebody because he follows his heart.`,
        },
        {
          id: uuid(),
          en: 'flexible hours',
          ua: 'гнучкий графік',
          transcription: '[ˈfleksɪbl̩ aʊərz]',
          definition: 'flexible hours allow workers to alter workday start and finish times',
          synonyms: ['Flextime'],
          example: 'Flexible hours benefit everyone.',
        },
        {
          id: uuid(),
          en: 'insurance agent',
          ua: 'страховий агент',
          transcription: '[ɪnˈʃɔːrənts ˈeɪdʒənt]',
          definition: 'a person employed to sell insurance policies',
          synonyms: ['underwriter'],
          example:
            'A well-designed succession plan will likely involve other professionals such as an attorney, appraiser and insurance agent .',
        },
        {
          id: uuid(),
          en: 'job interview',
          ua: 'співбесіда',
          transcription: '[dʒɒb ˈɪntəvjuː]',
          definition:
            'a formal meeting in which an applicant is asked questions to determine their suitability for a particular job',
          synonyms: ['job hunting'],
          example: `She talked constantly, wouldn't accept authority and had such a short span of attention that she'd probably wander off to make herself a coffee during the initial job interview`,
        },
        {
          id: uuid(),
          en: 'judge',
          ua: 'суддя',
          transcription: '[dʒʌdʒ]',
          definition:
            'a person who is in charge of a trial in a court and decides how a person who is guilty of a crime should be punished, or who makes decisions on legal matters',
          synonyms: ['justice', 'magistrate', 'try'],
          example: 'I just need to see a court order signed by a judge.',
        },
        {
          id: uuid(),
          en: 'knowledge',
          ua: 'знання',
          transcription: '[ˈnɒlɪdʒ]',
          definition:
            'facts, information, and skills acquired through experience or education; the theoretical or practical understanding of a subject',
          synonyms: ['education', 'information', 'command'],
          example: 'Knowledge is so cool he bought me a skateboard for my birthday!',
        },
        {
          id: uuid(),
          en: 'negotiate',
          ua: 'вести переговори',
          transcription: '[nəˈgəʊʃieɪt]',
          definition:
            'to have formal discussions with someone in order to reach an agreement with them',
          synonyms: ['deal', 'bargain', 'agree'],
          example: 'They have refused to negotiate on this issue.',
        },
      ],
    },
    status: LESSON_STATUS.DONE,
    imageName: 'Working',
  },
]

export const WelcomePagePreferences = [
  {
    id: '1',
    title: 'Тисячі слів',
    subtitle: 'Саме ті слова, що знадобляться у повсякденному спілкуванні.',
    imageName: 'words',
  },
  {
    id: '2',
    title: 'Безліч актуальних тем',
    subtitle: 'Ми підібрали саме ті теми які знадобляться як повсякденні так і на роботі.',
    imageName: 'topic',
  },
  {
    id: '3',
    title: 'Лише 15 хвилин щодня',
    subtitle: 'Щоденні заняття допоможуть вам швидше поповнити свій словниковий запас.',
    imageName: 'fifteen-minutes',
  },
  {
    id: '4',
    title: 'Різноманітні тренування',
    subtitle: 'Ми підготували цікаві і дієві тренування.',
    imageName: 'training',
  },
]

export const DashboardItems = [
  {
    id: '1',
    title: 'Уроки',
    subtitle: 'Тематичні уроки',
    imageName: 'lessons',
    path: ROUTES.LESSONS,
  },
  {
    id: '2',
    title: 'Нові слова',
    subtitle: 'Вивчити нові слова',
    imageName: 'vocabulary',
    path: ROUTES.VOCABULARY,
  },
  {
    id: '3',
    title: 'Граматика',
    subtitle: 'Без знань граматики нікуди',
    imageName: 'grammar',
    path: ROUTES.GRAMMAR,
  },
  {
    id: '4',
    title: 'Словник',
    subtitle: 'Список вивчених слів',
    imageName: 'dictionary',
    path: ROUTES.DICTIONARY,
  },
]

export const lessonsSubtitles = {
  0: `Для початку вивчимо кілька нових слів`,
  1: `А зараз перевіримо знання нових слів`,
  2: 'І на останок попрактикуймося',
}
