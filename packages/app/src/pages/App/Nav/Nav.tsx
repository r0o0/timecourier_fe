import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as Logo } from '~components/assets/icons/gnb_log.svg';
import { ReactComponent as MenuIcon } from '~components/assets/icons/sidebar_menu.svg';
import { Button } from '~components/index';

import SideBar from '../SideBar/SideBar';

import { navButtonStyle, navStyle, navWrapperStyle } from './Nav.css';

function Nav() {
  const [showSideBar, setShowSideBar] = useState(false);

  const handleMenuIconClick = () => setShowSideBar(!showSideBar);

  const navigate = useNavigate();
  return (
    <header className={navWrapperStyle}>
      <nav className={navStyle}>
        <Button variant="transparent" iconOnly onClick={() => navigate('/', { replace: true })}>
          <Logo />
        </Button>
        <Button
          className={navButtonStyle}
          variant="transparent"
          onClick={handleMenuIconClick}
          iconOnly
        >
          <MenuIcon />
        </Button>
      </nav>

      <SideBar open={showSideBar} onClose={handleMenuIconClick} />
    </header>
  );
}

export default Nav;
