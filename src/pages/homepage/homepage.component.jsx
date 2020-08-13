import React from "react";
import "./homepage.styles.scss";
import Directory from "../../comonents/directory/directory.component";

const Homepage = ({ history }) => {
    return(
    <div className="homepage">
        <Directory/>
    </div>
    )
    
}

export default Homepage;