import { Footer } from './layout/Footer/Footer'
import { RetosGrid } from './Retos/RetosGrid'
import Search from './Search/Search'
import retos from './Retos/retos'
import Header from './layout/Header/Header'

function App() {
  return (
    <div>
      <Header />
      <Search placeholder="Introduce el nombre de un reto..." data={retos} />
      <RetosGrid />
      <Footer />
    </div>
  )
}

export default App
