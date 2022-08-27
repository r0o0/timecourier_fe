import Sample from '@/assets/icons/letter-sample.svg';

import { MailBox, ProgressBar } from '~components/index';

import { letterBody } from './LetterBox.css';

function LetterBox() {
  return (
    <div>
      <div style={{ width: '100%', backgroundColor: 'var(--colors-black__15swe8nd)' }}>
        <ProgressBar activeStep={3} steps={5} />
      </div>
      <div className={letterBody}>
        <MailBox
          id=""
          img={Sample}
          sendDate="2022년 10월 16일 오후 11:25"
          sendName="우영우님"
          title="영우야 안녕 너는 봄날의 햇살이야"
          wrtieDate="2022년 10월 29일 오후 11:25"
        />
      </div>
    </div>
  );
}

export default LetterBox;
