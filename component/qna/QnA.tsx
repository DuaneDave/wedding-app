import React from 'react';

import styles from './qna.module.css';

import qna from '@/utils/data/qna';

function QnA() {
  return (
    <section>
      <div className={`container ${styles.qnaContainer}`}>
        <h1>Question and Answer</h1>

        <p>
          Welcome to our Q&A section! Here, we've gathered frequently asked
          questions to provide all the information you need for an enjoyable
          wedding experience.
        </p>

        {qna.map((qna) => (
          <div key={qna.id} className={styles.question}>
            <h2>{qna.question}</h2>
            <p>{qna.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default QnA;
