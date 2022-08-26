import { Link } from 'react-router-dom';

import { ReactComponent as CancelIcon } from '~components/assets/icons/cancel.svg';
import { Button } from '~components/index';

import { sideBarMenuList } from './SideBar.const';
import { sideBarStyle } from './Sidebar.css';
import { SideBarProps } from './Sidebar.type';

function SideBar(props: SideBarProps) {
  const { onClose } = props;

  return (
    <div className={sideBarStyle}>
      <Button onClick={onClose} variant="transparent">
        <CancelIcon />
      </Button>
      <ul>
        {sideBarMenuList.main.map((item) => (
          <li key={item.title}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
