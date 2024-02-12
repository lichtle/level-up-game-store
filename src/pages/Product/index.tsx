import { useParams } from 'react-router-dom'

import { useGetGameQuery } from '../../services/api'

import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import Loader from '../../components/Loader'

type GameParams = {
  id: string
}

const Product = () => {
  const { id } = useParams() as GameParams
  const { data: game } = useGetGameQuery(id)

  if (!game) {
    return <Loader />
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="mainBackground">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="secondaryBackground">
        <p>
          <span>Plataforma:</span> {game.details.system} <br />
          <span>Desenvolvedor:</span> {game.details.developer} <br />
          <span>Editora:</span> {game.details.publisher} <br />
          <span>Idiomas:</span> oferece suporte a diversos idiomas, incluindo
          {game.details.languages.join(', ').toLowerCase()}
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
