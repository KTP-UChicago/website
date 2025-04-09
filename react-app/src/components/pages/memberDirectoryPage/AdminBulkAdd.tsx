import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography, CircularProgress } from '@mui/material';
import { useFirebase } from '../../../contexts/FirebaseContext';
import { doc, setDoc } from 'firebase/firestore';
import { useAuthentication } from '../../../contexts/AuthenticationContext';

interface NewMember {
  name: string;
  email: string;
  pledgeClass: string;
  year: number;
  image: string;
  isPickingUp: boolean;
  major: string;
  notes: string;
  contactInfo: {
    email: string;
    phone: string;
    instagram: string;
  };
}

const AdminBulkAdd: React.FC = () => {
  const { user } = useAuthentication();
  const { firestore } = useFirebase();
  const [isAdding, setIsAdding] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [result, setResult] = useState<{ success: string[]; failed: string[] }>({
    success: [],
    failed: [],
  });

  // Only show the button for the admin
  const isAdmin = user?.email?.toLowerCase() === 'johnruge@uchicago.edu';

  if (!isAdmin) {
    return null;
  }

  const newMembers: NewMember[] = [
    {
      name: 'Elena Loucks',
      email: 'elenaloucks@uchicago.edu',
      pledgeClass: 'Theta',
      year: 2025,
      image: 'assets/img/members/Elena_Loucks.jpg',
      isPickingUp: false,
      major: '',
      notes: '',
      contactInfo: {
        email: 'elenaloucks@uchicago.edu',
        phone: '',
        instagram: '',
      },
    },
    {
      name: 'Hewitt Watkins',
      email: 'hwatkins@uchicago.edu',
      pledgeClass: 'Theta',
      year: 2025,
      image: 'assets/img/members/Hewitt_Watkins.jpg',
      isPickingUp: false,
      major: '',
      notes: '',
      contactInfo: {
        email: 'hwatkins@uchicago.edu',
        phone: '',
        instagram: '',
      },
    },
    {
      name: 'Grace Janusz',
      email: 'gjanusz@uchicago.edu',
      pledgeClass: 'Theta',
      year: 2025,
      image: 'assets/img/members/Grace_Janusz.jpg',
      isPickingUp: false,
      major: '',
      notes: '',
      contactInfo: {
        email: 'gjanusz@uchicago.edu',
        phone: '',
        instagram: '',
      },
    },
    {
      name: 'Chloe Eng',
      email: 'ce482@uchicago.edu',
      pledgeClass: 'Theta',
      year: 2025,
      image: 'assets/img/members/Chloe_Eng.jpg',
      isPickingUp: false,
      major: '',
      notes: '',
      contactInfo: {
        email: 'ce482@uchicago.edu',
        phone: '',
        instagram: '',
      },
    },
    {
      name: 'Caden Tebow',
      email: 'ctebow@uchicago.edu',
      pledgeClass: 'Theta',
      year: 2025,
      image: 'assets/img/members/Caden_Tebow.jpg',
      isPickingUp: false,
      major: '',
      notes: '',
      contactInfo: {
        email: 'ctebow@uchicago.edu',
        phone: '',
        instagram: '',
      },
    },
    {
      name: 'Sabrina Chen',
      email: 'sabrinachen@uchicago.edu',
      pledgeClass: 'Theta',
      year: 2025,
      image: 'assets/img/members/Sabrina_Chen.jpg',
      isPickingUp: false,
      major: '',
      notes: '',
      contactInfo: {
        email: 'sabrinachen@uchicago.edu',
        phone: '',
        instagram: '',
      },
    },
    {
      name: 'Defne Meric Erdogan',
      email: 'defnemeric@uchicago.edu',
      pledgeClass: 'Theta',
      year: 2025,
      image: 'assets/img/members/Defne_Meric_Erdogan.jpg',
      isPickingUp: false,
      major: '',
      notes: '',
      contactInfo: {
        email: 'defnemeric@uchicago.edu',
        phone: '',
        instagram: '',
      },
    },
    {
      name: 'Clarisse Cheung',
      email: 'clarissec@uchicago.edu',
      pledgeClass: 'Theta',
      year: 2025,
      image: 'assets/img/members/Clarisse_Cheung.jpg',
      isPickingUp: false,
      major: '',
      notes: '',
      contactInfo: {
        email: 'clarissec@uchicago.edu',
        phone: '',
        instagram: '',
      },
    },
    {
      name: 'Eric Wong',
      email: 'wongeric@uchicago.edu',
      pledgeClass: 'Theta',
      year: 2025,
      image: 'assets/img/members/Eric_Wong.jpg',
      isPickingUp: false,
      major: '',
      notes: '',
      contactInfo: {
        email: 'wongeric@uchicago.edu',
        phone: '',
        instagram: '',
      },
    },
    {
      name: 'Rhea Gupta',
      email: 'rheag@uchicago.edu',
      pledgeClass: 'Theta',
      year: 2025,
      image: 'assets/img/members/Rhea_Gupta.jpg',
      isPickingUp: false,
      major: '',
      notes: '',
      contactInfo: {
        email: 'rheag@uchicago.edu',
        phone: '',
        instagram: '',
      },
    },
    {
      name: 'Lucas Chen',
      email: 'lucasch@uchicago.edu',
      pledgeClass: 'Theta',
      year: 2025,
      image: 'assets/img/members/Lucas_Chen.jpg',
      isPickingUp: false,
      major: '',
      notes: '',
      contactInfo: {
        email: 'lucasch@uchicago.edu',
        phone: '',
        instagram: '',
      },
    },
    {
      name: 'Michael Fujiyama',
      email: 'mfujiyama@uchicago.edu',
      pledgeClass: 'Theta',
      year: 2025,
      image: 'assets/img/members/Michael_Fujiyama.jpg',
      isPickingUp: false,
      major: '',
      notes: '',
      contactInfo: {
        email: 'mfujiyama@uchicago.edu',
        phone: '',
        instagram: '',
      },
    },
    {
      name: 'Yunah Chung',
      email: 'yunahchung20@gmail.com',
      pledgeClass: 'Theta',
      year: 2025,
      image: 'assets/img/members/Yunah_Chung.jpg',
      isPickingUp: false,
      major: '',
      notes: '',
      contactInfo: {
        email: 'yunahchung20@gmail.com',
        phone: '',
        instagram: '',
      },
    },
    {
      name: 'Danny Willow Liu',
      email: 'dannywillowliu@uchicago.edu',
      pledgeClass: 'Theta',
      year: 2025,
      image: 'assets/img/members/Danny_Willow_Liu.jpg',
      isPickingUp: false,
      major: '',
      notes: '',
      contactInfo: {
        email: 'dannywillowliu@uchicago.edu',
        phone: '',
        instagram: '',
      },
    },
    {
      name: 'Enzo Nakornsri',
      email: 'ennako@uchicago.edu',
      pledgeClass: 'Theta',
      year: 2025,
      image: 'assets/img/members/Enzo_Nakornsri.jpg',
      isPickingUp: false,
      major: '',
      notes: '',
      contactInfo: {
        email: 'ennako@uchicago.edu',
        phone: '',
        instagram: '',
      },
    },
    {
      name: 'Eddie Wu',
      email: 'emwu@uchicago.edu',
      pledgeClass: 'Theta',
      year: 2025,
      image: 'assets/img/members/Eddie_Wu.jpg',
      isPickingUp: false,
      major: '',
      notes: '',
      contactInfo: {
        email: 'emwu@uchicago.edu',
        phone: '',
        instagram: '',
      },
    },
    {
      name: 'Anna Yan',
      email: 'annayan@uchicago.edu',
      pledgeClass: 'Theta',
      year: 2025,
      image: 'assets/img/members/Anna_Yan.jpg',
      isPickingUp: false,
      major: '',
      notes: '',
      contactInfo: {
        email: 'annayan@uchicago.edu',
        phone: '',
        instagram: '',
      },
    },
    {
      name: 'Luke Jimenez',
      email: 'lukejimenez@uchicago.edu',
      pledgeClass: 'Theta',
      year: 2025,
      image: 'assets/img/members/Luke_Jimenez.jpg',
      isPickingUp: false,
      major: '',
      notes: '',
      contactInfo: {
        email: 'lukejimenez@uchicago.edu',
        phone: '',
        instagram: '',
      },
    },
  ];

  const handleAddMembers = async () => {
    setIsAdding(true);
    const successList: string[] = [];
    const failedList: string[] = [];

    try {
      for (const member of newMembers) {
        try {
          // Use email as document ID for easy reference
          await setDoc(doc(firestore, 'memberDirectory', member.email), member);
          successList.push(member.name);
        } catch (error) {
          console.error(`Failed to add ${member.name}:`, error);
          failedList.push(member.name);
        }
      }
    } finally {
      setIsAdding(false);
      setResult({ success: successList, failed: failedList });
      setDialogOpen(true);
    }
  };

  return (
    <div style={{ marginBottom: '20px', textAlign: 'center' }}>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleAddMembers}
        disabled={isAdding}
      >
        {isAdding ? <CircularProgress size={24} /> : 'Add Theta Class Members'}
      </Button>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Bulk Add Results</DialogTitle>
        <DialogContent>
          {result.success.length > 0 && (
            <>
              <Typography variant="h6" color="primary">
                Successfully Added ({result.success.length}):
              </Typography>
              <ul>
                {result.success.map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </>
          )}
          
          {result.failed.length > 0 && (
            <>
              <Typography variant="h6" color="error">
                Failed to Add ({result.failed.length}):
              </Typography>
              <ul>
                {result.failed.map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AdminBulkAdd;
