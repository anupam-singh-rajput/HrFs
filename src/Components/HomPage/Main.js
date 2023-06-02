import React,{useState} from 'react'
import './Main.css'
import Left from './Left'
import Right from './Right'
import Help from './Help'
import { Outlet } from 'react-router-dom'

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

const Main = (props) => {

    const [expenses, setExpenses] = useState(helpquery)

    const AddExpenseHandler = () => {
      setExpenses(expenses);
    }

    return(
        <div className="MainPageMainContainer">
            <div className="main">
            <Left/>
            <Right/>
            </div>
            <hr />
            <Help item={expenses}/>
        </div>
    )
}
export default Main;