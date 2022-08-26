import { SidebarMenuItem } from './Sidebar.type';

export const sideBarMenuList: Record<string, SidebarMenuItem[]> = {
  main: [
    {
      title: '홈',
      path: '/main',
    },
    {
      title: '마이페이지',
      path: '/myPage',
    },
    {
      title: '타임레터 소개',
      path: '/letterAbout',
    },
  ],
  sub: [
    {
      title: '이용갹관',
      path: '/letterAbout',
    },
    {
      title: '개인정보 처리 방침',
      path: '/letterAbout',
    },
  ],
};
