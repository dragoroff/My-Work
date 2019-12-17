import React from "react";
import Image from "../../img/BP_Mar_404_Main.jpg";

export default () => {
  return (
    <div className="mt-5 text-center wrapper">
      <h1 className="display-4">Page Not Found</h1>
      <p>Sorry, this page does not exist</p>
      <img src={Image} alt="" style={{ marginTop: "5%" }} />
    </div>
  );
};
