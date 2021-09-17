export interface ISquareProps {
  value?: string
  onClick?: Function
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