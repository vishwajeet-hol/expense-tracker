import React from 'react';
import i18n from '../i18n'

const ExpenseList = ({expenseList=[]}) => {

    // render
    return (
    <div className='expense-list'>
        <div className="title">{i18n.EXPENSE_LIST_LABEL}</div>
        {expenseList.length > 0 && <div className="row">
                <div className="index">{i18n.SR_LABEL}</div>
                <div className="date">{i18n.DATE_LABEL}</div>
                <div className="category">{i18n.CATEGORY_LABEL}</div>
                <div className="sub-category">{i18n.SUB_CATEGORY_LABEL}</div>
                <div className="amount">{i18n.AMOUNT_LABEL}</div>
        </div>}
        {expenseList.map((item, index)=> {
            return (
            <div className="row">
                <div className="index">{index+1}</div>
                <div className="date">{item.date.toString()}</div>
                <div className="category">{item.category}</div>
                <div className="sub-category">{item.subCategory}</div>
                <div className="amount">{item.amount}</div>
            </div>)
        })}
        </div>
    );

}

export default ExpenseList;