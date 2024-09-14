import * as React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import "./CourseReview.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CourseReview = ({ review }) => {
  const [showComments, setShowComments] = React.useState(false);

  const handleExpandClick = () => {
    setShowComments(!showComments);
  };

  return (    
    <Card
      variant="outlined"
      className="course-review"
      sx={{ borderColor: "black", borderWidth: "2px" }}
    >
      <CardHeader
        title={review.courseName}
        className="course-review-header"
        action={
          <ExpandMore
            expand={showComments}
            onClick={handleExpandClick}
            aria-expanded={showComments}
            aria-label="show more"
          >
            <ExpandMoreIcon className="expand-more-icon" />
          </ExpandMore>
        }
        sx={{
          backgroundColor: "#f0f0f0",
          borderColor: "#a0a0a0",
          color: "gray",
          ":hover": {
            backgroundColor: "#d0d0d0",
            borderColor: "#707070",
          },
          textTransform: "none",
        }}
        titleTypographyProps={{ style: { fontSize: "18px" } }}
      />
      {showComments && <CardContent>
            <p className="course-type"> {review.courseType}</p>
            <p className="course-prereqs"> {review.coursePrereqs}</p>
            <div className="course-comments">
              {review.comments.map((comment, index) => (
                <p key={index}>{comment}</p>
              ))}
            </div>


      </CardContent>}
    </Card>
  );
};

export default CourseReview;
