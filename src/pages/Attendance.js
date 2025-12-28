import React, { useEffect, useState } from 'react';

const Attendance = () => {
  // You may need to define monthKey and dates based on your app logic
  const monthKey = new Date().toISOString().slice(0, 7); // Example: "2024-06"
  const dates = [
	// Example dates, replace with your actual logic
	{ iso: `${monthKey}-01`, label: 'June 1' },
	{ iso: `${monthKey}-08`, label: 'June 8' },
	{ iso: `${monthKey}-15`, label: 'June 15' },
	{ iso: `${monthKey}-22`, label: 'June 22' }
  ];

  const [records, setRecords] = useState(() => {
	const raw = localStorage.getItem('attendance_records');
	return raw ? JSON.parse(raw) : {};
  });

  useEffect(() => {
	localStorage.setItem('attendance_records', JSON.stringify(records));
  }, [records]);

  const toggle = (dateIso) => {
	setRecords(prev => {
	  const copy = { ...prev };
	  if (!copy[monthKey]) copy[monthKey] = {};
	  copy[monthKey][dateIso] = !copy[monthKey][dateIso];
	  return copy;
	});
  };

  const prevMonths = Object.keys(records).sort((a, b) => (a < b ? 1 : -1));

  return (
	<div className="card">
	  <h1>Attendance</h1>
	  <p>This month ({monthKey}) has 4 class days. Click to mark present/absent.</p>

	  <div className="attendance-grid">
		{dates.map(d => {
		  const marked = records[monthKey] && records[monthKey][d.iso];
		  return (
			<div key={d.iso} className={`att-day ${marked ? 'present' : 'absent'}`} onClick={() => toggle(d.iso)}>
			  <div className="date">{d.label}</div>
			  <div className="status">{marked ? 'Present' : 'Absent'}</div>
			</div>
		  );
		})}
	  </div>

	  <section className="last-att">
		<h3>Last attendances (history)</h3>
		{prevMonths.length === 0 && <p>No history yet.</p>}
		<div className="history-list">
		  {prevMonths.map(mk => (
			<div key={mk} className="history-card">
			  <strong>{mk}</strong>
			  <ul>
				{Object.keys(records[mk]).map(diso => (
				  <li key={diso}>{diso} — {records[mk][diso] ? 'Present' : 'Absent'}</li>
				))}
			  </ul>
			</div>
		  ))}
		</div>
	  </section>
	</div>
  );
};

export default Attendance;
