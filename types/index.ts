export interface ISquareProps {
  value?: number
}

export interface ISquareState {
  value?: string | null
}

export interface ISquare {
  props: ISquareProps
  state: ISquareState
}
