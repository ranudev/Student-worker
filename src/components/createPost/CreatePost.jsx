import React from "react";
import Style from "../../Css/createPoat/CreatePost.module.css";
//import { NavLink } from "react-router-dom";
function CreatePost() {
  return (
    <React.Fragment>
      <h4 className={Style.post}>Create your post</h4>
      <div className={Style.longbx}>
        <div>
          <label>Type of job</label> <br />
          <input type="text" placeholder="Job title" />
        </div>

        <div>
          <p>Category</p>
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label>Reatailing</label>
          <br />
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label>Catering</label>
          <br />
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label>Tutoring</label>
          <br />
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label>Career</label>
          <br />
        </div>

        <div>
          <p>Location</p>
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label>onsite</label>
          <br />
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label>Remote</label>
        </div>

        <p>Student Responsibility</p>
        <div>
          <p>1.Prepare and develop tools</p>
          <p>2.Lead the entire student team </p>
          <p>3.Utilize backend stuff</p>
          <p>4.Design and code electrothings</p>
        </div>
        <div>
          <p>Salary (Fixed or Range)</p>
          <input type="text" placeholder=" 20, 000" />
        </div>
        <div>
          <p>Hours per week</p>
          <input type="text" placeholder=" 24" />
        </div>
        <p>Who can apply (work duration and requirements)</p>
        <p>Candidates can apply who:</p>
        <div>
          <p>1.Are available for work for a duration of 3months</p>
          <p>2.Can start work between June 20 and June 23 2021</p>
          <p>3.Have relevant skills and interests</p>
          <p>4.Can cook stew</p>
        </div>

        {/* <NavLink>Skip</NavLink> */}
      </div>
    </React.Fragment>
  );
}

export default CreatePost;
