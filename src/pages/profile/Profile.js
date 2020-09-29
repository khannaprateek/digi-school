import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../store/actions";

const Profile = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ ...user });
  const onChangehandler = (property, value) => {
    setUserData({
      ...userData,
      [property]: value,
    });
  };

  const handleSave = (userData) => {
    dispatch(updateUser(userData));
  };
  return (
    <div className="profile-container">
      <span>Name :</span>
      <input
        name="name"
        type="text"
        value={userData.name}
        onChange={(e) => onChangehandler(e.target.name, e.target.value)}
      />
      <span>Email:</span>
      <input
        name="email"
        type="text"
        value={userData.email}
        onChange={(e) => onChangehandler(e.target.name, e.target.value)}
      />
      <span>DOB:</span>
      <input
        name="dob"
        type="text"
        value={userData.dob}
        onChange={(e) => onChangehandler(e.target.name, e.target.value)}
      />
      <span>Location:</span>
      <input
        name="location"
        type="text"
        value={userData.location}
        onChange={(e) => onChangehandler(e.target.name, e.target.value)}
      />
      <button onClick={(useData) => handleSave(userData)}>Save</button>
    </div>
  );
};

export default Profile;
