export type Content = {
  id: number
  title: string
  url: string
  image: string
}

export default (): Content[] => {
  const list: Content[] = []
  list.push({
    id: 1,
    title: 'Summation',
    url: '/summation',
    image: '/static/image/summation.png',
  })
  return list
}
