export interface ISquareProps {
  value?: string
  onClick: any
}

export interface IBoardProps {
  squares: string[],
  onClick: Function
}

export interface IBoardState {
  squares: string[],
  xIsNext?: boolean
}

export interface IBoardState {
  squares: string[]
  xIsNext: boolean
}