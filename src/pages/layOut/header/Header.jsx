import NavBar from "../navBar"

const Header = () => {
  return (
    <header className="d-flex flex-wrap justify-content-sm-center justify-content-md-start container py-4">
      <div className="logo mx-4 my-1">
        <img src="images/logo.svg" alt="COMPOUND" className="w-100" />
      </div>
      <NavBar />
    </header>
  )
}

export default Header