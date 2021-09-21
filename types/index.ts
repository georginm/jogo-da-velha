export interface ISquareProps {
  value?: string
  onClick: any
}

export interface ISquareState {
  value?: string | null
}

export interface IBoardProps {
  value?: string
}

export interface IBoardState {
  squares: string[]
  xIsNext: boolean
}