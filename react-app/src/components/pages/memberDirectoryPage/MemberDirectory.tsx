import React, {useEffect, useState} from 'react'
import MemberDirectoryCard, { MemberInfo } from './MemberDirectoryCard'
import { useAuthentication } from '../../../contexts/AuthenticationContext';
import { Grid } from '@mui/material';
import { getDocs, query, collection, orderBy, setDoc, doc, where } from 'firebase/firestore';
import { Container } from 'react-bootstrap';
import { useFirebase } from '../../../contexts/FirebaseContext';
import PageTemplate from '../../core/pageTemplate/PageTemplate';
import MemberFilter from './memberFilter/MemberFilter';
import FilterTag from '../courseReviewsPage/components/FilterTag';

function MemberDirectory() {
    const {user, handleLogin} = useAuthentication();
    const {firestore} = useFirebase();
    const [members, setMembers] = useState<MemberInfo[]>([]);
    const [filteredMembers, setFilteredMembers] = useState<MemberInfo[]>([]);
    const [selectedYear, setSelectedYear] = useState<string | null>(null);
    const [selectedClass, setSelectedClass] = useState<string | null>(null);
    const [selectedIsPickingUp, setSelectedIsPickingUp] = useState<string | null>(null);
    useEffect(() => {
          const loadData = async () => {
            if (!user) return;
            const querySnapshot = await getDocs(query(collection(firestore, "memberDirectory"), orderBy("name")));
            const data = querySnapshot.docs.map(doc => doc.data() as MemberInfo);
            setMembers(data);
            setFilteredMembers(data);
          }
          loadData();
    }, [user])

    useEffect(() => {
      setFilteredMembers(members.filter(
            (member) => (selectedYear == null || `${member.year}` === selectedYear) &&
            (selectedClass == null || member.pledgeClass === selectedClass) &&
            (selectedIsPickingUp == null || (selectedIsPickingUp === "Is Picking Up" ? member.isPickingUp : !member.isPickingUp))
        ));
      }, [selectedYear, selectedClass, selectedIsPickingUp])

    const handleRemoveYear = () => {
        setSelectedYear(null);
    }

    const handleRemoveClass = () => {
        setSelectedClass(null);
    }

    const handleRemoveIsPickingUp = () => {
        setSelectedIsPickingUp(null);
    }
     
    // Add a conditional statement to display the alumni database only if the user is authenticated
    return <PageTemplate page="member-directory">
        <div className="container pt-5">
        <h2 className="text-center mb-5">Member Directory</h2>
        <MemberFilter
          onYearSelect={setSelectedYear}
          onClassSelect={setSelectedClass}
          onIsPickingUpSelect={setSelectedIsPickingUp}
        />
     <div style={{"padding": "20px"}}>
        {selectedYear && <FilterTag label={selectedYear} onRemove={handleRemoveYear} />}
        {selectedClass && <FilterTag label={selectedClass} onRemove={handleRemoveClass} />}
        {selectedIsPickingUp && <FilterTag label={selectedIsPickingUp} onRemove={handleRemoveIsPickingUp} />}
      </div>

        {user ? 
          <Grid container spacing={4}>
              {filteredMembers.map((member, index) => (
              <Grid item key={index} xs={12} sm={4} md={3}>
                  <MemberDirectoryCard
                    props={member}
                  />
              </Grid>
              ))}
          </Grid>
 : <>
          <h1>Access Denied</h1>
          <p>Please <a style={{color: "blue", cursor:"pointer"}} onClick={handleLogin}>log in</a> to view the alumni database.</p>
          </>
    }
         
        </div>
      </PageTemplate>
}

export default MemberDirectory

