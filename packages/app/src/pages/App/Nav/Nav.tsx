import { useState } from 'react';

import { ReactComponent as MenuIcon } from '@/assets/icons/sidebar_menu.svg';

import { Button, Heading } from '~components/index';

import SideBar from '../SideBar/SideBar';

import { navButtonStyle, navStyle, navWrapperStyle } from './Nav.css';

function Nav() {
  const [showSideBar, setShowSideBar] = useState(false);

  const handleMenuIconClick = () => setShowSideBar(!showSideBar);

  // TODO: Heading 부분 로고 이미지 교체 요청
  return (
    <header className={navWrapperStyle}>
      <nav className={navStyle}>
        <Heading size={3} color="white">
          타임레터
        </Heading>
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
