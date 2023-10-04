

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <h2 style={{color: "white", fontSize: "30px", fontWeight:"bold"}}>Redux Flight Booking App</h2>
        <div className="flex items-center">
          <a className="text-white min-w-[50px] font-medium" href="#">
            Home
          </a>
          <button className="log-btn btn">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
