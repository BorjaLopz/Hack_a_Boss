import { isLegalAge } from "../../helpers/helpers.js";
import UserLocation from "../UserLocation/UserLocation";
import UserName from "../UserName/UserName";
import UserPicture from "../UserPicture/UserPicture";

import "./style.css";

function User({ user }) {
  return (
    <>
      <div>
        <div className={`container ${isLegalAge(user.dob.age) ? "" : "menor"}`}>
          <UserPicture user={user} />
          <UserName user={user} />
          <UserLocation user={user} />
          {!isLegalAge(user.dob.age) && (
            <img
              className="dinosaur"
              src={
                "https://i.pinimg.com/originals/ab/49/c7/ab49c7cc96520ed814497db46a725b57.png"
              }
            />
          )}
        </div>
      </div>
    </>
  );
}

//Primer div
/*className={`relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-200 drop-shadow-lg*/


//Segundo div
/* className="p-5 flex-col"*/
export default User;
