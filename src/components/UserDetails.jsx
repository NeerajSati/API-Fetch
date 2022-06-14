import React, { useEffect } from "react";
import axios from "axios";

function UserDetails({ currUserId, currUserData, setCurrUserData }) {
  useEffect(() => {
    if (currUserId !== -1) {
      const getData = async () => {
        const res = await (
          await axios.get(`https://reqres.in/api/users/${currUserId}`)
        ).data;
        setCurrUserData(res.data);
      };
      getData();
    }
  }, [currUserId]);
  return (
    <div className="userDetails">
      <div className="userPlate">
        {currUserData ? (
          <>
            <img
              className="userImg"
              src={currUserData.avatar}
              alt="userImage"
            ></img>
            <h1 className="userName">
              {currUserData.first_name} {currUserData.last_name}
            </h1>
            <p className="userEmail">{currUserData.email}</p>
          </>
        ) : (
          <h1 className="userName">Loading Data...</h1>
        )}
      </div>
    </div>
  );
}

export default UserDetails;
