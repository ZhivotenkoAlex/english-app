import React from 'react'
import DeleteBin7LineIcon from 'remixicon-react/DeleteBin7LineIcon'

interface IWordDeleteButton {
  handleDeleteWord: () => void
}
function WordDeleteButton({ handleDeleteWord }: IWordDeleteButton) {
  return (
    <span title="Delete word from dictionary">
      <DeleteBin7LineIcon size={30} onClick={handleDeleteWord} />
    </span>
  )
}

export default WordDeleteButton
