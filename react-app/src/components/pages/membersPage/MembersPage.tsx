import React, { useEffect, useState } from 'react';
import PageTemplate from '../../core/pageTemplate/PageTemplate';
import { Slide } from '@mui/material';
import SliderCarousel from './SliderCarousel';
import { LinkedIn } from '@mui/icons-material';
import { CLASSES } from '../../../constants';
import ClassDisplay from './ClassDisplay';
import MemberCard from '../../memberCard/MemberCard';

// Define a type for the member data
export interface Member {
  name: string;
  image: string;
  pledgeClass: string;
  gradYear: string;
  linkedin: string;
}

// Component for the eboard and members page
const MembersPage = () => {
  const [members, setMembers] = useState<Member[]>([]);
  useEffect(() => {
    // Function to load CSV data
    const loadFile = async (filePath: string): Promise<string> => {
      const response = await fetch(filePath);
      if (response.ok) {
        return response.text();
      } else {
        throw new Error('Failed to load CSV file');
      }
    };

    // Load and process the CSV file
    const processCSV = async () => {
      try {
        const csv = await loadFile("assets/memberList.csv");
        const rows = csv.split("\n").slice(1, -1);
        const sortedRows = rows.sort((rowA, rowB) => {
          const a = rowA.split(",")[1].toLowerCase();
          const b = rowB.split(",")[1].toLowerCase();
          return a.localeCompare(b);
        });

        const memberList = sortedRows.map(row => {
          const [firstName, lastName, image, pledgeClass, gradYear, linkedin] = row.split(",");
          return {
            name: `${firstName} ${lastName}`,
            image: `assets/img/members/${image}`,
            pledgeClass,
            gradYear,
            linkedin,
          };
        });

        setMembers(memberList);
      } catch (error) {
        console.error('Error processing CSV:', error);
      }
    };

    processCSV();
    const script = document.createElement('script');
    script.src = "assets/js/lightslider.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <PageTemplate page="members">
          <div className="container py-5">
        <div className="scroll" id="eboard">
          <h2 className="text-center mb-5">Executive Board</h2>
          <div className="row justify-content-center">
            {[
              { name: "Minjoo Song", role: "President", image: "Minjoo_Song.jpg" },
              { name: "Iris Hwang", role: "Vice President", image: "Iris_Hwang.jpg" },
              { name: "Catherine Lu", role: "Director of Engagement", image: "Catherine_Lu.jpg" },
              { name: "Siya Kalra", role: "Director of Finance", image: "Siya_Kalra.jpg" },
              { name: "Jessica Ortiz", role: "Director of Marketing", image: "Jessica_Ortiz.jpg" },
              { name: "Kyle Wong", role: "Co-Director of Membership", image: "Kyle_Wong.jpg" },
              { name: "Ryan Lobo", role: "Co-Director of Membership", image: "Ryan_Lobo.jpg" },
              { name: "Lade Tinubu", role: "Director of Outreach", image: "Lade_Tinubu.jpg" },
              { name: "Chaplin Huang", role: "Director of Professional Development", image: "Chaplin_Huang.jpg" },
              { name: "Nicholas Lee", role: "Director of Technology", image: "Nicholas_Lee.jpg" },
            ].map((member, index) => (
              <div key={index} className="col-4 col-md-3 col-lg-2 px-lg-3 text-center">
                <img className="w-100 mb-2" src={`assets/img/members/${member.image}`} alt={member.name} />
                <h2 className="eboard-name mb-0">{member.name}</h2>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray">
        <div className="container py-5" id="memberContainer">
          <div className="scroll" id="actives">
            <h2 className="text-center mb-5">Active Members</h2>
            <div className="row" id="memberRow">
              {members.map((member, index) => (
               <MemberCard 
                key={index}
                member={member}
               />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="scroll" id="alumni">
          <div className="row">
            <h2 className="text-center mb-4">Alumni</h2>
            <p>
              Kappa Theta Pi has an extensive alumni network working at companies across the country.
              We are proud to support our esteemed alumni and thank them for their continuing, and
              lifelong, contributions to the KTP community.
            </p>
          </div>
        </div>
      </div>

      <div className="container pb-5">
        <SliderCarousel />
      </div>

      <div className="container">
      <div className="row px-3 px-md-0">
        {CLASSES.map((pledgeClass, index) => (
          <ClassDisplay pledgeClass={pledgeClass} key={index} />  
        ))}
        </div>
      </div>
        </PageTemplate>
  );
};

export default MembersPage;
