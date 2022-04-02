import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/img/koollogo.svg';
import { useGlobalContext } from '../hooks/Context';

const Icon = styled.span`
  font-size: 18px;
  color: #797979;
`;

const Digit = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #e02050;
  position: absolute;
  top: -9px;
  right: -9px;
  color: #fff;
  font-size: 13px;
  line-height: 19px;
  font-weight: bold;
  text-align: center;
`;

const Navbar = () => {
  const { total, amount } = useGlobalContext();
  return (
    <nav className='container'>
      <Link to="/details">
        {/* Listen Music */}
        {/* <span><i class="fas fa-music" ></i></span> */}
        <Icon>
          <i className="fas fa-bars" ></i>
        </Icon>
      </Link>
      <Link to="/">
        <img src={logo} alt="logo" className='navbar-brand' style={{width: '150px', height: '40px'}}/>
      </Link>
      {/* <div class="search" >
          <a href="#" ><i class="fas fa-search" ></i></a>
      </div> */}
      <Link to="/cart" className='cart'>
        <Icon>
          <i className="fas fa-shopping-basket" ></i>
        </Icon>
        <Digit>{amount}</Digit>
      </Link>
   
    </nav>
  );
};



export default Navbar;
