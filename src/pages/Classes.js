import React, { useState } from 'react';


const sampleClasses = [
{
id: 1,
title: 'Mathematics - Algebra',
zoom: 'https://zoom.us/j/1234567890',
homework: ['Complete ex. 1.1 (pg. 12)', 'Prepare small quiz solutions']
},
{
id: 2,
title: 'Physics - Mechanics',
zoom: 'https://zoom.us/j/0987654321',
homework: ['Lab report: falling bodies', 'Read chapter 4']
}
];


export default function Classes() {
const [classes] = useState(sampleClasses);


return (
<div className="card">
<h1>Classes</h1>
<div className="classes-grid">
{classes.map(c => (
<div key={c.id} className="class-card">
<h3>{c.title}</h3>
<a className="zoom-link" href={c.zoom} target="_blank" rel="noreferrer">Join Zoom</a>
<div className="homework">
<h4>Homework</h4>
<ol>
{c.homework.map((h, i) => <li key={i}>{h}</li>)}
</ol>
</div>
</div>
))}
</div>
</div>
);
}