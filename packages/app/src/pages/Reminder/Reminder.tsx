import { reminderTimer, textSpan, textTimer } from './Reminder.css';

function Reminder() {
  return (
    <div className={reminderTimer}>
      <div className={textSpan}>
        <span style={{ left: '30px' }} className={textTimer}>
          {/* <HeHeading as="h1" heading={runningTime} size={3} /> */}
        </span>
        :
        <span style={{ left: '100px' }} className={textTimer}>
          {/* <HeHeading as="h1" heading={runningTime} size={3} /> */}
        </span>
        :
        <span style={{ left: '170px' }} className={textTimer}>
          {/* <HeHeading as="h1" heading={runningTime} size={3} /> */}
        </span>
        :
        <span style={{ left: '240px' }} className={textTimer}>
          {/* <HeHeading as="h1" heading={runningTime} size={3} /> */}
        </span>
      </div>
    </div>
  );
}

export default Reminder;
