import styles from './details.module.css';

import agenda from '@/utils/data/agenda';

function Agenda() {
  return (
    <ul className={`flex flex-col center ${styles.timeline}`}>
      {agenda.map((item) => (
        <li className={`flex`} key={item.id}>
          <span />

          <div className={styles.info}>
            <h4>{item.title}</h4>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Agenda;
