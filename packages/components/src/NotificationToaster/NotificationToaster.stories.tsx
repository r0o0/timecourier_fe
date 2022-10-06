import Button from '../Button/Button';

import NotificationToaster from './NotificationToaster';

export default {
  title: 'Feedback/NotificationToaster',
  component: NotificationToaster,
};

const Templates = () => NotificationToaster.show('편지가 임시저장 되었습니다.');
export const Base = Templates.bind({});

const UsageTemplates = () => {
  const handleClick = () => {
    NotificationToaster.show('편지가 임시저장 되었습니다.');
  };
  return <Button label="보내기" onClick={handleClick} />;
};
export const Usage = UsageTemplates.bind({});
