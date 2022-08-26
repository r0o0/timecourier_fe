import { Link } from 'react-router-dom';

import { ReactComponent as CancelIcon } from '~components/assets/icons/cancel.svg';
import { Button } from '~components/index';

import { sideBarMenuList } from './SideBar.const';
import {
  backGroundRecipe,
  cancelIconStyle,
  logoutStyle,
  mainliStyle,
  sideBarRecipe,
  subliStyle,
  ulStyle,
} from './Sidebar.css';
import { SideBarProps } from './Sidebar.type';

function SideBar(props: SideBarProps) {
  const { open, onClose } = props;

  if (!onClose) {
    return null;
  }

  return (
    <div className={backGroundRecipe({ visible: open })}>
      <div className={sideBarRecipe({ visible: open })}>
        <Button className={cancelIconStyle} onClick={onClose} variant="transparent">
          <CancelIcon />
        </Button>
        <ul className={ulStyle}>
          {sideBarMenuList.main.map((item) => (
            <li className={mainliStyle} key={item.title}>
              <Link to={item.path} style={{ fontWeight: 700 }}>
                {item.title}
              </Link>
            </li>
          ))}
          <li style={{ margin: '2% auto' }} />
          {sideBarMenuList.sub.map((item) => (
            <li className={subliStyle} key={item.title}>
              <Link to={item.path} style={{ fontWeight: 700 }}>
                {item.title}
              </Link>
            </li>
          ))}
          <li style={{ margin: '2% auto' }} />
          <li className={logoutStyle}>
            <Link to="/" style={{ fontWeight: 400 }}>
              로그아웃
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
