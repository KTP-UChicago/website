import React, {useState} from 'react'
import * as S from "./styled"
import { CardContent, CardActionArea, Typography, IconButton, AccordionSummary, Accordion, AccordionDetails } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import { useAuthentication } from '../../../contexts/AuthenticationContext';
import MemberEditModal from './memberEditModal/MemberEditModal';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
export interface MemberInfo {
    name: string,
    pledgeClass: string,
    major: string,
    isPickingUp: boolean,
    notes: string,
    year: number,
    image: string,
    contactInfo: ContactInfo
}

export interface ContactInfo {
    email: string,
    phone: string,
    instagram: string,
}

function MemberDirectoryCard({props}: {props: MemberInfo}) {
    const {user} = useAuthentication();
    const {name, image,  pledgeClass, major, isPickingUp, notes, year, contactInfo} = props
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <MemberEditModal isOpen={isOpen} setOpen={(open) => {setIsOpen(open)}} member={props}/>
     <S.StyledCard>
        <CardContent>

            <img src={image} style={{height: "100px"}} onError={(e: any) => e.target.src = 'assets/img/members/Filler.jpg'} alt={name} />
          <Typography gutterBottom variant="h5" component="div">
            {name}
            {(user?.email == contactInfo.email) && <IconButton onClick={() => {setIsOpen(true)}}>
           <EditIcon/>
        </IconButton>}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Class of {year} | 
            <span 
            style={{textWrap: "nowrap", overflow: "visible"}}
          dangerouslySetInnerHTML={{ __html: ` &${pledgeClass};`} as any} 
          /> 
          
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {major}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {isPickingUp ? "Is picking up!" : "Is not picking up :/"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </Typography>

       <AccordionItem
            title="about me..."
            content={notes}
            phone={contactInfo.phone}
            socials={contactInfo.instagram}
            major={major}
       />
        </CardContent> 
      </S.StyledCard>
    </>
       
  )
}

const AccordionItem: React.FC<{
    title: string;
    phone: string;
    socials: string;
    content: string;
    major: string;
  }> = ({ title, content, socials, phone, major}) => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <div onClick={() => {setOpen(!open)}} style={{display: "flex", alignItems: "center", justifyContent:"start", cursor: 'pointer', width: open ? "100%" : "130%" }}>
        <Typography style={{fontWeight: "bold"}}variant="body2" color="text.secondary">
                {title}
            </Typography>
            <div style={{padding: "0"}}>
                {open ? <ExpandLess style={{color: "#000000a6"}}/> : <ExpandMore style={{color: "#000000a6"}} />}
            </div>
        </div>
        {open && (
            <>
                <Typography variant="body2" color="text.secondary">
                Phone: {phone}
            </Typography>
            
                 <Typography variant="body2" color="text.secondary">
            Socials: {socials} 
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Major(s): {major} 
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {content}
            </Typography>
            </>

        )}
      </div>
    );
  };

export default MemberDirectoryCard

