import React, {useState} from 'react'
import { Member } from '../pages/membersPage/MembersPage'
import { LinkedIn } from '@mui/icons-material';

function MemberCard({ member} : { member: Member}) {
    const [isHovered, setIsHovered] = useState(false);
    const hoverStyle = {
      cursor: isHovered ? 'pointer' : 'default',
    };
  return  <div className="active-item col-4 col-sm-3 col-md-2">
  <div className="active-img" style={hoverStyle} onMouseOver={() => setIsHovered(true)} onMouseDown={() => setIsHovered(false)}>
    <figure onClick={() => {window.open(member.linkedin)}} >
      <div className="member-img">
        <img src={member.image} onError={(e: any) => e.target.src = 'assets/img/members/Filler.jpg'} alt={member.name} />
        <div className="overlay" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
          <div title={`${member.pledgeClass} | ${member.gradYear}`} className="text">
            <div 
            style={{textWrap: "nowrap", overflow: "visible"}}
          dangerouslySetInnerHTML={{ __html: `&${member.pledgeClass}; | ${member.gradYear}`} as any} 
          /> 
           <LinkedIn fontSize="large" style={{ color: "white" }} />
          </div>
        </div>
      </div>
      <figcaption className="text-center">{member.name}</figcaption>
    </figure>
  </div>
</div>
}

export default MemberCard