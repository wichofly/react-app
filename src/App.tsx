import ListGroup from "./components/ListGroup"

function App() {
  let items = [
    'New York',
    'San Francisco',
    'Apopa',
    'Tokio',
    'Munich'
  ]

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  )
}

export default App
