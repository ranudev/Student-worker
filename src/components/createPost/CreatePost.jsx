import React from "react";
import Style from "../../Css/createPoat/CreatePost.module.css";
//import { NavLink } from "react-router-dom";
function CreatePost() {
  return (
    <React.Fragment>
      <h2 className={Style.CreatePost}>Create your post</h2>
      <div className={Style.box}>
        <div>
          <label className={Style.jbnm}> Type of Job </label>
          <input placeholder="Job title" className={Style.label} />
        </div>
        <div>
          <label className={Style.jbnm}>Category</label>
          <div className={Style.radiobuttons}>
            <label className={Style.ret}>
              <input type="radio" name="category" value="retail" />
              Retail
            </label>
            <label className={Style.ret}>
              <input type="radio" name="category" value="catering" />
              Catering
            </label>
            <label className={Style.ret}>
              <input type="radio" name="category" value="tutoring" />
              Tutoring
            </label>
            <label className={Style.ret}>
              <input type="radio" name="category" value="career" />
              Career
            </label>
          </div>
        </div>
        <div>
          <label className={Style.jbnm}>Location</label>
          <div className={Style.radiobuttons}>
            <label className={Style.ret}>
              <input
                type="radio"
                name="category"
                value="Onsite"
                className={Style.ret}
              />
              On-site
            </label>

            <label className={Style.ret}>
              <input
                type="radio"
                name="category"
                value="remote"
                className={Style.ret}
              />
              Remote
            </label>
          </div>
        </div>
        <label htmlFor="" className={Style.jbnm}>
          {" "}
          Student Responsiblity
        </label>
        <div className={Style.box1}>
          <p>1.Prepare and develop tools</p>
          <p>2.Lead the entire student team </p>
          <p>3.Utilize backend stuff</p>
          <p>4.Design and code electrothings</p>
        </div>
        <div>
          <label htmlFor="" className={Style.jbnm}>
            Salary(Fixed or Range)
          </label>
          <input type="number" placeholder="N 20,000" className={Style.label} />
        </div>
        <div>
          <label htmlFor="" className={Style.jbnm}>
            Hours Per Week
          </label>
          <input type="number" placeholder="24" className={Style.label} />
        </div>
        <label htmlFor="" className={Style.jbnm}>
          Who can apply(work duration and requirements)
        </label>
        <p>Candidates can apply who:</p>
        <div className={Style.box1}>
          <p>1.Are available for work for a duration of 3months</p>
          <p>2.Can start work between June 20 and June 23 2021</p>
          <p>3.Have relevant skills and interests</p>
          <p>4.Can cook stew</p>
        </div>
        <button className={Style.nxtbtn}>Next</button>
      </div>
    </React.Fragment>
  );
}

export default CreatePost;
