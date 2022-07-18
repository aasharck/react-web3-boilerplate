import './App.css';
import logo from './logo.png'
 
import React from 'react'

const App = () => {
  return (
    <div>
      <nav className="navbar bg-light shadow">
  <div className="container">
    <a className="navbar-brand" href="/">
      <img src={logo} alt="Brand-name" width="40" height="40" className="d-inline-block align-text-top"/>
    </a>
  </div>
</nav>
<div class="px-4 py-5 my-5 text-center">
    <img class="d-block mx-auto mb-4" src={logo} alt="Brand-hero" width="72" height="77" />
    <h1 class="display-5 fw-bold">React Web3 BoilerPlate</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Quickly design and develop smart contracts and frontend with this BoilerPlate</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Connect Wallet</button>
      </div>
    </div>
  </div>
  <div class="container">
  <footer class="py-3 my-4">
    <p class="text-center text-muted">Forked from Dapp University!</p>
  </footer>
</div>
    </div>
  )
}

export default App