import React from 'react'

interface ClassInfo {
    name: string, 
    members: string[]
}

function ClassDisplay({pledgeClass}: {pledgeClass: ClassInfo}) {
  return  <><div className="col-lg-2 col-md-6">
            <h2>{pledgeClass.name}</h2>
          </div>
          <div className="col-lg-2 col-md-6">
            <p>
                {pledgeClass.members.map((member) => (
                    <>{member}<br /></>
                ))}
            </p>
    </div>
    </>
}

export default ClassDisplay