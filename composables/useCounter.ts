export const useCounter = () => {
  const count = useState('count', () => 0)

  const increment = () => count.value++

  const decrement = () => count.value--

  return {
    count: readonly(count),
    increment,
    decrement
  }
}
