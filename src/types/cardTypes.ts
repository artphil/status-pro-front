export type CardSattusType = {
  label: string,
  value: number,
}

export type CardType = {
  type: string,
  serie: string,
  name: string,
  image: string,
  status: CardSattusType[],
}