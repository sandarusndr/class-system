import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';


const sampleMarks = [
{ month: 'Jan', test: 72 },
{ month: 'Feb', test: 68 },
{ month: 'Mar', test: 75 },
{ month: 'Apr', test: 80 },
{ month: 'May', test: 78 },
{ month: 'Jun', test: 85 }
];


export default function Performance() {
	const [data] = useState(sampleMarks);
	const avg = (data.reduce((s, d) => s + d.test, 0) / data.length).toFixed(1);

	return (
		<div className="card">
			<h1>Performance</h1>
			<p>Monthly class test marks and overall trends</p>

			<div className="chart-row">
				<div className="chart-card">
					<h4>Marks Over Time</h4>
					<ResponsiveContainer width="100%" height={250}>
						<LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="month" />
							<YAxis domain={[0, 100]} />
							<Tooltip />
							<Line type="monotone" dataKey="test" stroke="#8884d8" strokeWidth={3} dot={{ r: 4 }} />
						</LineChart>
					</ResponsiveContainer>
				</div>

				<div className="chart-card small">
					<h4>Recent Distribution</h4>
					<ResponsiveContainer width="100%" height={250}>
						<BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="month" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar dataKey="test" barSize={30} fill="#8884d8" />
						</BarChart>
					</ResponsiveContainer>
				</div>
			</div>

			<div className="summary">
				<h3>Overall Performance</h3>
				<p>Average mark: <strong>{avg}%</strong></p>
				<p>Comment: {avg >= 75 ? 'Great work — keep it up!' : (avg >= 60 ? 'Good — room to improve' : 'Needs improvement')}</p>
			</div>
		</div>
	);
}