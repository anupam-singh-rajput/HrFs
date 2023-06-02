import './Help.css'
import react,{useState} from 'react';
import {Link} from "react-router-dom";
import LeftSignup from '../Signup/LeftSignup';
import QueryComponent from './QueryComponent'


const helpquery = [
    {
      id: '1',
      question:'How I can host my house ?',
      answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga amet placeat perferendis aut facilis ipsum voluptates commodi iusto ratione quod?'
    },
    {
      id: '2',
      question:'How to rent house ?',
      answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga amet placeat perferendis aut facilis ipsum voluptates commodi iusto ratione quod?'
    },
    {
      id: '3',
      question:'What about privacy and security ?',
      answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga amet placeat perferendis aut facilis ipsum voluptates commodi iusto ratione quod?'
    },
    {
      id: '4',
      question:'Do we have mobile app ?',
      answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga amet placeat perferendis aut facilis ipsum voluptates commodi iusto ratione quod?'
    }
  ]

function Help(props) {

  const question = helpquery[0].question;
  const answer = helpquery[0].answer;


  return (
    <div className="HelpMainContainer">
        
        <div className="RightHelpMainContainer">
            <div className="welcomesection">
                <h2>Frequently Asked Questios</h2>
            </div>
              <div>
            {
                props.item.map(
                    expense => (
                        <QueryComponent     
                        question={expense.question} 
                        answer={expense.answer}/>
                    )
                )
            }
        </div>
          </div>
        <LeftSignup></LeftSignup>
    </div>
  )
}

export default Help;