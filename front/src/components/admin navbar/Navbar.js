import React from 'react'

const Navbar = () => { // navbar(onclick , onchange)

  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/admin">Admin</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page"  href="/admin/products">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/admin/addproducts">Add Product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/admin/onrent">On Rental</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> &nbsp; &nbsp;
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar