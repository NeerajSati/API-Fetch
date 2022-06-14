import React from "react";

function Footer({ setCurrUserId, data }) {
  return (
    <div className="footer">
      {data &&
        data.map((singleUser) => {
          return (
            <button
              className="footerBtn"
              onClick={() => setCurrUserId(singleUser.id)}
              key={singleUser.id}
            >
              {singleUser.id}
            </button>
          );
        })}
    </div>
  );
}

export default Footer;
