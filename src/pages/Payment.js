import React, { useState } from 'react';

function getMonthKey() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}`;
}

function getMonthLabel(monthKey) {
  const [year, month] = monthKey.split('-');
  const date = new Date(year, month - 1);
  return date.toLocaleString('default', { month: 'long', year: 'numeric' });
}

const Payment = () => {
  const [payments, setPayments] = useState({});
  const amountThisMonth = 1000; // Example amount, replace with your logic
  const monthKey = getMonthKey();

  const payNow = () => {
	const date = new Date().toISOString();
	setPayments(prev => {
	  const copy = { ...prev };
	  if (!copy[monthKey]) copy[monthKey] = [];
	  copy[monthKey].push({ amount: amountThisMonth, date });
	  return copy;
	});
  };

  const lastMonths = Object.keys(payments).sort((a, b) => (a < b ? 1 : -1));

  return (
	<div className="card">
	  <h1>Payment</h1>
	  <div className="pay-panel">
		<div>
		  <h3>This month's fee</h3>
		  <p>{getMonthLabel(monthKey)}</p>
		  <div className="amount">Rs. {amountThisMonth}</div>
		  <button className="btn" onClick={payNow}>Pay Now (simulate)</button>
		</div>

		<div className="recent-payments">
		  <h4>Recent payments</h4>
		  {lastMonths.length === 0 && <p>No payments yet</p>}
		  <ul>
			{lastMonths.map(mk => (
			  <li key={mk}>
				<strong>{getMonthLabel(mk)}</strong>
				<ul>
				  {payments[mk].map((p, i) => (
					<li key={i}>{new Date(p.date).toLocaleString()} — Rs. {p.amount}</li>
				  ))}
				</ul>
			  </li>
			))}
		  </ul>
		</div>
	  </div>
	</div>
  );
};

export default Payment;