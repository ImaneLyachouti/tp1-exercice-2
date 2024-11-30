import React from "react";
//import profileImage from "./assets/profile.jpg"; // Chemin de votre image

const Profile = () => {
  return (
    <div className="profile-container">
      <h2 className="profile-title">Student Profile Page Design Example</h2>
      <p className="profile-subtitle">A responsive student profile page design.</p>

      <div className="profile-card">
       
        <div className="profile-left">
         
          <h3 className="profile-name">Ishmam Ahasan Samin</h3>
          <p>Student ID: 321000001</p>
          <p>Class: 4</p>
          <p>Section: A</p>
        </div>
        <div className="profile-right">
          <div className="general-info">
            <h3>General Information</h3>
            <table>
              <tbody>
                <tr>
                  <td>Roll</td>
                  <td>125</td>
                </tr>
                <tr>
                  <td>Academic Year</td>
                  <td>2020</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>Male</td>
                </tr>
                <tr>
                  <td>Religion</td>
                  <td>Group</td>
                </tr>
                <tr>
                  <td>Blood</td>
                  <td>B+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="other-info">
            <h3>Other Information</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
