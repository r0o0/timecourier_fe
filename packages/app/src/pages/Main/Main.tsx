import mainSend from '@/assets/icons/main_mailbox.svg';
import mainWrite from '@/assets/icons/main_writeLetter.svg';

import MainBox from './Components/MainBox';
import { mainBody } from './Main.css';

function Main() {
  return (
    <div className={mainBody}>
      <MainBox value="편지쓰기" img={mainWrite} path="/" />
      <MainBox value="보낸편지함" img={mainSend} path="/letterBox" />
    </div>
  );
}

export default Main;
