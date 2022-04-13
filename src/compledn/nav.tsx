import React from 'react'

type Props = {}

const Nav = (props: Props) => {
  return (
<div>
  <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
    <li className="nav-item">
      <a className="nav-link " href="/">Shop</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Hot</a>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link " href="#">
        Sản phẩm 
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link">Liên hệ</a>
    </li>
  </ul>
 
</div>

  )
}
export default Nav