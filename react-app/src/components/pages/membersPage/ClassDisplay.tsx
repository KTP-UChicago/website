import React from 'react';

interface ClassInfo {
  name: string;
  members: string[];
}

function ClassDisplay({ pledgeClass }: { pledgeClass: ClassInfo }) {
  return (
    <div className="ktp-alumni-class">
      <h3 className="ktp-alumni-class__title">{pledgeClass.name}</h3>
      <ul className="ktp-alumni-class__members">
        {pledgeClass.members.map((member) => (
          <li key={member}>{member}</li>
        ))}
      </ul>
    </div>
  );
}

export default ClassDisplay;
