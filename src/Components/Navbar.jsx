import "./Navbar.css"

function Navbar() {
  return (
    <>
      <nav className="nav">
        <li><a href="#">GeekFoods</a></li>
        <div>
            <ul className="ul">
                <li><a href="#">Home</a></li>
                <li><a href="#">Quote</a></li>
                <li><a href="#">Restaurants</a></li>
                <li><a href="#">Foods</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <button>Get started</button>
      </nav>
      
    </>
  );
}

export default Navbar;
