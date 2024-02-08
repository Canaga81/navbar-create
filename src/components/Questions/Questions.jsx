import React from 'react';
import './Questions.css';
import SectionHead from '../SectionHead/SectionHead';
import { FaQuestion } from "react-icons/fa";
import faqs from '../QuestionsData';
import Question from '../Question/Question';

const Questions = () => {
    
  return (
    <div>
      <section className="faqs pl-8 pr-8">
      <div className="container faqs__container">
        <SectionHead title='Tez-Tez Verilen Suallar'/>
        <div className="faqs__wrapper">
          {
            faqs.map(({id,question,answer})=>{
              return <Question key={id} question={question} answer={answer}/>
            })
          }
        </div>
      </div>
    </section>
    </div>

  )
  
}

export default Questions;