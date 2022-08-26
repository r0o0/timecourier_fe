export type MenuType = 'main' | 'sub';

export type SidebarMenuItem = {
  title: string;
  path: string;
};

export interface SideBarProps {
  open: boolean;
  onClose: () => void;
}
