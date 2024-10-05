import React, { useEffect , useState} from 'react';
import { Grid, Container } from '@mui/material';
import AlumniCard, { AlumniCardProps } from '../../alumniCard/AlumniCard';
import PageTemplate from '../../core/pageTemplate/PageTemplate'
import { useAuthentication } from '../../../contexts/AuthenticationContext';
import { useFirebase } from '../../../contexts/FirebaseContext';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import CourseReview from "./components/CourseReview";
import "./pages/Courses.css";
import DeptButton from "./components/Departments";
import QuarterButton from "./components/Quarter";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterTag from "./components/FilterTag";
import {REVIEWS, Review} from "./courseReviews";



function CourseReviewsPage() {
    const {user, handleLogin} = useAuthentication();

    const [filteredReviews, setFilteredReviews] = useState<Review[]>([]);
    const [selectedDept, setSelectedDept] = useState<string | null>(null);
    const [selectedQuarter, setSelectedQuarter] = useState<string | null>(null);
    useEffect(() => {
        const fetchReviews = async () => {
            setFilteredReviews(REVIEWS);
        };
        fetchReviews();
    },[])

    useEffect(() => {
        setFilteredReviews(REVIEWS.filter(
            (review) => (selectedDept == null || review.dept === selectedDept) && (selectedQuarter == null || review.quarters.includes(selectedQuarter))
        ));
    }, [selectedDept, selectedQuarter])

    const handleDeptSelect = (dept: string) => {
        setSelectedDept(dept);
    };

    const handleQuarterSelect = (quarter: string) => {
        setSelectedQuarter(quarter);
    };
    
    const handleRemoveDept = () => {
        setSelectedDept(null);
    };

    const handleRemoveQuarter = () => {
        setSelectedQuarter(null);
    };

    return <PageTemplate page="course-reviews">
        <div className="container pt-5">
        <h2 className="text-center mb-5">Course Reviews</h2>
        {user ? 
        
        <>
        <div className="filter-bar">
        <FilterListIcon />
        <DeptButton onDeptSelect={handleDeptSelect} />
        <QuarterButton onQuarterSelect={handleQuarterSelect}/>
      </div>
      <div className="selected-filters">
        {selectedDept && <FilterTag label={selectedDept} onRemove={handleRemoveDept} />}
        {selectedQuarter && <FilterTag label={selectedQuarter} onRemove={handleRemoveQuarter} />}
      </div>
      <div className="courses">
        {[...filteredReviews].sort((a, b) => {
        if (a.courseName < b.courseName) return -1;
        if (a.courseName > b.courseName) return 1;
        return 0;
    }).map((review, index) => (
          <CourseReview key={index} review={review} />
        ))}
      </div>
        </>
         : <>
          <h1>Access Denied</h1>
          <p>Please  <a style={{color: "blue", cursor:"pointer"}} onClick={handleLogin}>log in</a>  to view the course reviews page.</p>
          </>
    }
         
        </div>
      </PageTemplate>
}

export default CourseReviewsPage;