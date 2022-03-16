
const Footer = () => {
  return (
      <footer className='container'>
          <div className="header-footer">
            <div className="email" id="email"  >
                <form method="post" >
                <div className="inputContainer" >
                    <input type="text" name="email" placeholder="ENTER EMAIL"  />
                <button type="submit" >SIGN UP</button>
                </div>
                </form>
            </div>
          </div>
          <div className="customerService" >
            <p>Customer Service</p>
            <ul>
                <li><a href="/" >FAQ's</a></li>
                <li><a href="/" >Returns & Exchange Policy</a></li>
                <li><a href="/" >Privacy Policy </a></li>
                <li><a href="/" >Terms & Conditions</a></li>
            </ul>
        </div>
        <p>Lil skiggy Store &copy; 2020 | All Rights Reserved </p>
     </footer>
  );
};

export default Footer;