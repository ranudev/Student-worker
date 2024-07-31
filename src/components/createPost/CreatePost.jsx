import React from "react";
import Style from "../../Css/createPoat/CreatePost.module.css";
//import { NavLink } from "react-router-dom";
function CreatePost() {
  return (
    <React.Fragment>
      <h4 className={Style.post}>Create your post</h4>
      <div className={Style.longbx}>
        <div className={Style.innerlongbx}>
          <div>
            <label className={Style.type}>Type of job</label> <br />
            <input
              type="text"
              placeholder="Job title"
              className={Style.jobttl}
            />
          </div>

          <div>
            <p className={Style.type}>Category</p>
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label className={Style.list}>Retailing</label>
            <br />
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label className={Style.list}>Catering</label>
            <br />
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label className={Style.list}>Tutoring</label>
            <br />
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label className={Style.list}>Career</label>
            <br />
          </div>

          <div>
            <p className={Style.type}>Location</p>
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label className={Style.list}>onsite</label>
            <br />
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label className={Style.list}>Remote</label>
          </div>

          <p className={Style.type}>Student Responsibility</p>
          <div className={Style.res}>
            <p className={Style.list}>1.Prepare and develop tools</p>
            <p className={Style.list}>2.Lead the entire student team </p>
            <p className={Style.list}>3.Utilize backend stuff</p>
            <p className={Style.list}>4.Design and code electrothings</p>
          </div>
          <div>
            <p className={Style.type}>Salary (Fixed or Range)</p>
            <input
              type="text"
              placeholder=" 20, 000"
              className={Style.jobttl}
            />
          </div>
          <div>
            <p className={Style.type}>Hours per week</p>
            <input type="text" placeholder=" 24" className={Style.jobttl} />
          </div>
          <p className={Style.type}>
            Who can apply (work duration and requirements)
          </p>
          <p className={Style.list}>Candidates can apply who:</p>
          <div className={Style.res}>
            <p className={Style.list}>
              1.Are available for work for a duration of 3months
            </p>
            <p className={Style.list}>
              2.Can start work between June 20 and June 23 2021
            </p>
            <p className={Style.list}>3.Have relevant skills and interests</p>
            <p className={Style.list}>4.Can cook stew</p>
          </div>
          <button className={Style.postbtn}>Next </button>
        </div>

        {/* <NavLink>Skip</NavLink> */}
      </div>
    </React.Fragment>
  );
}

export default CreatePost;
