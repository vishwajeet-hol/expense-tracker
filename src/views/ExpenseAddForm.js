import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import i18n from '../i18n';
import {ExpenseInputForm} from '../components/styledComponent'
import {CATEGORIES, SUB_CATEGORIES} from '../consts';

const ExpenseAddForm = ({expenseList, setExpenseList}) => {

    // consts
    const defaultForm = {
        date: new Date(),
        category: 'Food',
        subCategory: '',
        amount: 0
    }

    // state variable
    const [form, setForm] = useState(defaultForm);

    // useEffect
    useEffect(() => {
        setForm(prevForm=> {
            return {...prevForm, subCategory: SUB_CATEGORIES[form.category][0]}
        });
    }, [form.category])

    // event handlers
    const handleDateChange = (date) => {
        console.log("date", date, new Date());
        setForm(prevForm=> {
            return {...prevForm, date}
        });
    }

    const handleFormChange = (e) => {
        const value = e.target.name === 'amount' ? Math.floor(e.target.value) : e.target.value
        setForm(prevForm=> {
            return {...prevForm, [e.target.name]: value}
        });
        e.persist();
    }

    const handleSubmit = () => {
        console.log("form", form)
        const expenseListCopy = [...expenseList];
        expenseListCopy.push(form);
        setExpenseList(expenseListCopy);
        setForm(defaultForm);
    }
    
    // render
    return (
    <div className="expense-container">
        <ExpenseInputForm>
            <div className="title">{i18n.ADD_EXPENSE_LABEL}</div>
            <div className="field">
                <div className="label">{i18n.DATE_LABEL}</div>
                <div className="value">
                    <DatePicker selected={form.date} onChange={handleDateChange}/>
                </div>
            </div>
            <div className="field">
                <div className="label">{i18n.CATEGORY_LABEL}</div>
                <div className="value">
                    <select value={form.category} name='category' onChange={handleFormChange}>
                        {CATEGORIES.map((category, id)=> {
                            return <option key={id} value={category}>{category}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="field">
                <div className="label">{i18n.SUB_CATEGORY_LABEL}</div>
                <div className="value">
                    <select value={form.category} name='subCategory' onChange={handleFormChange}>
                        {SUB_CATEGORIES[form.category].map((subCategory, id)=> {
                            return <option key={id} value={subCategory}>{subCategory}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="field">
                <div className="label">{i18n.AMOUNT_LABEL}</div>
                <div className="value">
                   <input type="number" min='0' name='amount' value={form.amount} onChange={handleFormChange}/>
                </div>
            </div>
            
            <div className='submit-button' onClick={handleSubmit}>{i18n.SUBMIT_LABEL}</div>
        </ExpenseInputForm>
    </div>)
};

export default ExpenseAddForm;