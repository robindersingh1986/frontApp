 import React from "react";
 import PropTypes from "prop-types";

 const Dashboard = props => {
   return (
     <div className="">
       Dashboard Page
     </div>
   );
};


//we describe the props (property) that the parent element is required to pass into this component
 
  Dashboard.propTypes = {
     value: PropTypes.string.isRequired
 };

 export default Dashboard;
