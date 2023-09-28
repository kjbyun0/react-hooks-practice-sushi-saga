import React, { useState } from 'react';

function AddBudget({ onAddBudget }) {
    const [amount, setAmount] = useState('');

    function handleAmountChange(e) {
        setAmount(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onAddBudget(parseInt(amount, 10));
        setAmount('');
    }

    return (
        <form className='budget' onSubmit={handleSubmit}>
            <label>Amount to Add to your budget: </label>
            <input type='text' value={amount} onChange={handleAmountChange} placeholder='Enter Amount here...' />
            <input type='submit' value='Submit' />
        </form>
    );
}

export default AddBudget;