import React, { useEffect , useState} from 'react';
import { Grid, Container } from '@mui/material';
import AlumniCard, { AlumniCardProps } from '../../alumniCard/AlumniCard';
import PageTemplate from '../../core/pageTemplate/PageTemplate'
import { useAuthentication } from '../../../contexts/AuthenticationContext';
import { useFirebase } from '../../../contexts/FirebaseContext';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';



function AlumniDatabasePage() {
    const {user, handleLogin} = useAuthentication();
    const {firestore} = useFirebase();
    const [data, setData] = useState<AlumniCardProps[]>([]);
    useEffect(() => {
        const loadData = async () => {
            if (!user) return;
            const querySnapshot = await getDocs(query(collection(firestore, "alumniDatabase"), orderBy("name")));
            setData(querySnapshot.docs.map(doc => doc.data() as AlumniCardProps));
        }
        loadData();
        
    }, [user])

    // Add a conditional statement to display the alumni database only if the user is authenticated
    return <PageTemplate page="alumni-database">
        <div className="container pt-5">
        <h2 className="text-center mb-5">Alumni Database</h2>
        {user ? 
          <Container>
          <Grid container spacing={4}>
              {data.map((alumnus, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                  <AlumniCard
                    name={alumnus.name}
                    currentCompany={alumnus.currentCompany}
                    currentRole={alumnus.currentRole}
                    linkedinUrl={alumnus.linkedinUrl}
                    email={alumnus.email}
                    gradYear={alumnus.gradYear}
                    pledgeClass={alumnus.pledgeClass}
                    major={alumnus.major}
                    location={alumnus.location}
                  />
              </Grid>
              ))}
          </Grid>
          </Container> : <>
          <h1>Access Denied</h1>
          <p>Please <a style={{color: "blue", cursor:"pointer"}} onClick={handleLogin}>log in</a> to view the alumni database.</p>
          </>
    }
         
        </div>
      </PageTemplate>
}

export default AlumniDatabasePage;