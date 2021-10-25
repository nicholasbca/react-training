export const Child = (props) => {
  const {notes} = props

  return(
    <ul>
      {notes.map(note => 
        <li>{note.content}</li>
        )}
    </ul>
  )
}