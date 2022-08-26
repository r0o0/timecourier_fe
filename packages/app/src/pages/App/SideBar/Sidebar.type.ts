export type MenuType = 'main' | 'sub';

export type SidebarMenuItem = {
  title: string;
  path: string;
  type: MenuType;
};

export interface SideBarProps {
  open: boolean;
  onClose: () => void;
}
