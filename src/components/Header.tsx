import Genre from '../models/Genre'

type Props = {
  title: Genre["title"]
}

export function Header({ title }: Props) {
  return (
    <header>
      <span className="category">
        Categoria:
        <span> {title} </span>
      </span>
    </header>
  )
}