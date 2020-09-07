import React, {useState} from 'react';
import ExpenseAddForm from './ExpenseAddForm';
import ExpenseList from './ExpenseList';
import {Container} from '../components/styledComponent';
import i18n from '../i18n';

const ExpenseTracker = () => {

    // state variable
    const [view, setView] = useState('addExpense');
    const [expenseList, setExpenseList] = useState([]);

    // method
    const renderView = () => {
        if (view === 'addExpense') {
            return <ExpenseAddForm expenseList={expenseList} setExpenseList={setExpenseList}/>
        }
        return <ExpenseList expenseList={expenseList}/>
    }

    return (
        <div>
            <Container>
                <div className='title'>{i18n.EXPENSE_TRACKER_LABEL}</div>
                <div className="toggle">
                    <div className={view==='addExpense' ? 'selected': ''} onClick={()=> setView('addExpense')}> 
                        {i18n.ADD_EXPENSE_LABEL}
                    </div>
                    <div className={view==='expenseList' ? 'selected': ''} onClick={()=> setView('expenseList')}> 
                        {i18n.EXPENSE_LIST_LABEL}
                    </div>
                </div>
                <div>
                    {renderView()}
                </div>
            </Container>
        </div>
    );

}

export default ExpenseTracker;