import React from 'react';


const sampleContacts = [
{ name: 'Mr. K. Perera', role: 'Class Teacher', phone: '+94 77 123 4567', email: 'kperera@example.com' },
{ name: 'Ms. A. Silva', role: 'Administration', phone: '+94 71 987 6543', email: 'asilva@example.com' }
];


export default function Contacts() {
return (
<div className="card">
<h1>Contacts</h1>
<p>Reach out to class personnel or support.</p>


<div className="contacts-grid">
{sampleContacts.map((c,i) => (
<div className="contact-card" key={i}>
<h3>{c.name}</h3>
<p><strong>{c.role}</strong></p>
<p>Phone: {c.phone}</p>
<p>Email: <a href={`mailto:${c.email}`}>{c.email}</a></p>
</div>
))}
</div>
</div>
);
}