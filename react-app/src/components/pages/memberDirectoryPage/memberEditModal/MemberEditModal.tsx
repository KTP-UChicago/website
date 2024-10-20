
import React, {useState} from 'react'
import ModalBase from '../../../core/modalBase/ModalBase'
import { InputLabel, Select, MenuItem, SelectChangeEvent, TextField } from '@mui/material'
import FormControl from '@mui/material/FormControl';
import * as S from './styled'
import { MemberInfo } from '../MemberDirectoryCard';
import { useFirebase } from '../../../../contexts/FirebaseContext';
import { doc, setDoc } from 'firebase/firestore';

function MemberEditModal({isOpen, setOpen, member}: {isOpen: boolean, setOpen: (value: boolean) => void, member: MemberInfo}) {
    const [pickUp, setPickUp] = useState(member.isPickingUp);
    const [phoneNumber, setPhoneNumber] = useState(member.contactInfo.phone);
    const [socials, setSocials] = useState(member.contactInfo.instagram);
    const [notes, setNotes] = useState(member.notes);
    const [major, setMajor] = useState(member.major);
    const {firestore} = useFirebase();
    const handlePickUpChange = (event: SelectChangeEvent<unknown>) => {
        setPickUp(event.target.value === 'true');
      };
    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(event.target.value);
    }
    const handleSocialsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSocials(event.target.value);
    }
    const handleNotesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNotes(event.target.value);
    }

    const handleMajorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMajor(event.target.value);
    }

    const validatePhoneNumber = (phoneNumber: string) => {
        return !(phoneNumber === "" || phoneNumber.length !== 10 || isNaN(Number(phoneNumber))) 
           
    }
    const handleSubmit = async () => {
        // Validate the input
        if (!validatePhoneNumber(phoneNumber)){
            alert("Please enter a valid phone number")
            return;
        }

        // Update the member info
        member.contactInfo.phone = phoneNumber;
        member.contactInfo.instagram = socials;
        member.notes = notes;
        member.major = major;
        member.isPickingUp = pickUp;
        // Update the database
        setOpen(false);
        await setDoc(doc(firestore, `memberDirectory/${member.contactInfo.email}`), member);
    }

  return (
    <ModalBase open={isOpen} handleClose={() => setOpen(false)}>
    <h2 style={{textAlign: "center"}}>Edit Your Profile</h2>
    <p>
        Please fill out the following information to update your profile so that our pledges 
        can get to know you better!
    </p>
    <FormControl fullWidth>


  <InputLabel id="demo-simple-select-label">Are you picking up?</InputLabel>
    <S.StyledSelect
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={pickUp.toString()}
        label="Are you picking up?"
        onChange={handlePickUpChange}
    >
        <MenuItem value={"true"}>Yes</MenuItem>
        <MenuItem value={"false"}>No</MenuItem>
    </S.StyledSelect>
    <S.StyledTextField 
        label="Phone Number"
        type="tel"
        defaultValue={phoneNumber}
        variant="outlined"
        onChange={handlePhoneNumberChange}
    />
    <S.StyledTextField 
        label="Socials"
        variant="outlined"
        defaultValue={socials}
        onChange={handleSocialsChange}
    />
    <S.StyledTextField 
        label="Major"
        variant="outlined"
        defaultValue={major}
        onChange={handleMajorChange}
    />
    <S.StyledTextField 
        label="Notes"
        variant="outlined"
        multiline
        rows={4}
        defaultValue={notes}
        onChange={handleNotesChange}
    />
     <S.ButtonContainer>

        <S.CloseButton onClick={() => setOpen(false)}
    >Close</S.CloseButton>
     <S.NewGameButton  onClick={handleSubmit}>Update</S.NewGameButton>
      </S.ButtonContainer>
</FormControl>
    </ModalBase>
  )
}

export default MemberEditModal