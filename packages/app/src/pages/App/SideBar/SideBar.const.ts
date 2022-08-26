import { SidebarMenuItem } from './Sidebar.type';

export const sideBarMenuList: SidebarMenuItem[] = [
  {
    title: '홈',
    path: '/main',
    type: 'main',
  },
  {
    title: '마이페이지',
    path: '/myPage',
    type: 'main',
  },
  {
    title: '타임레터 소개',
    path: '/letterAbout',
    type: 'main',
  },
  {
    title: '이용갹관',
    path: '/letterAbout',
    type: 'sub',
  },
  {
    title: '개인정보 처리 방침',
    path: '/letterAbout',
    type: 'sub',
  },
];
