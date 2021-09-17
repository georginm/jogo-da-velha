export interface ISquareProps {
  value?: string
}

export interface ISquareState {
  value?: string | null
}

export interface ISquare {
  props: ISquareProps
  state: ISquareState
}

export interface IBoardProps { }

export interface IBoardState {
  square: ISquare[]
}