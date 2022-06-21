import { HiOutlineMicrophone } from 'react-icons/hi';
import { IoIosArrowBack, IoIosSettings } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const currentYear = new Date().getFullYear();

  return (
    <header className="header">
      <div className="back">
        <Link to="/" className="back-btn" onClick={() => navigate(-1)}>
          <IoIosArrowBack
            className="chevron-left"
          />
        </Link>
        <span className="year">{currentYear}</span>
      </div>
      <h1 className="app-caption">Cripto Coins Statistics</h1>
      <div>
        <HiOutlineMicrophone
          className="microphone"
        />
        <IoIosSettings
          className="cog"
        />
      </div>
    </header>
  );
};

export default NavBar;
