import React, { useState, useEffect } from "react";
import CourseReview from "../components/CourseReview";
import "./Courses.css";
import DeptButton from "../components/Departments";
import QuarterButton from "../components/Quarter";
import FilterListIcon from "@mui/icons-material/FilterList";
import reviews from "../reviews.json";
import FilterTag from "../components/FilterTag";


const CoursesPage = () => {
  const [selectedDept, setSelectedDept] = React.useState(null);
  const [selectedQuarter, setSelectedQuarter] = React.useState(null);

  const handleDeptSelect = (dept) => {
    setSelectedDept(dept);
  };

  const handleQuarterSelect = (quarter) => {
    setSelectedQuarter(quarter);
  };
  
  const handleRemoveDept = () => {
    setSelectedDept(null);
  };

  const handleRemoveQuarter = () => {
    setSelectedQuarter(null);
  };

  let filteredReviews = reviews;

  if (selectedDept) {
    filteredReviews = filteredReviews.filter(
      (review) => review.dept === selectedDept
    );
  }
  if (selectedQuarter) {
    filteredReviews = filteredReviews.filter((review) =>
      review.quarters.includes(selectedQuarter)
    );
  }

  const sortedReviews = [...reviews].sort((a, b) => {
    if (a.courseName < b.courseName) return -1;
    if (a.courseName > b.courseName) return 1;
    return 0;
  });

  return (
    <div>
      <h1>Welcome to the courses page</h1>
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
        {sortedReviews.map((review, index) => (
          <CourseReview key={index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
