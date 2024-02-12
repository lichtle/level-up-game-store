import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { RootReducer } from '../../store'

import { open } from '../../store/reducers/cart'

import * as S from './styles'

import logo from '../../assets/images/logo.png'
import cartIcon from '../../assets/images/carrinho.svg'

const Header = () => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburger>
          <Link to="/">
            <h1>
              <img src={logo} alt="Eplay" />
            </h1>
          </Link>
          <nav>
            <S.Links>
              <S.LinkItem>
                <Link to="/categories">Categorias</Link>
              </S.LinkItem>
              <S.LinkItem>
                <a href="#coming-soon">Em breve</a>
              </S.LinkItem>
              <S.LinkItem>
                <a href="#on-sale">Promoções</a>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>
        {/* Abaixo adicionamos um papel (role) para o styled component "CartButton", que é um span, mas funcionará como um botão. Isso é importante tanto para acessibilidade quanto para SEO */}
        <S.CartButton role="button" onClick={openCart}>
          {items.length}
          <span>&nbsp;produto(s)</span>
          <img src={cartIcon} alt="Carrinho" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItem>
            <Link to="/categories">Categorias</Link>
          </S.LinkItem>
          <S.LinkItem>
            <a href="#coming-soon">Em breve</a>
          </S.LinkItem>
          <S.LinkItem>
            <a href="#on-sale">Promoções</a>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
