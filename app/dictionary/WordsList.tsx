import EmptyState from '@/components/__features__/EmptyState/EmptyState'
import WordRow from './WordRow'
import styled from 'styled-components'

const WordsList = ({ words }) => {
  if (!words.length) {
    return <EmptyState title="У вас немає слів у словнику. Добавте їх для подальшого вивчення" />
  }
  return (
    <Wrapper>
      {words.map(word => (
        <WordRow key={word.id} word={word} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export default WordsList
