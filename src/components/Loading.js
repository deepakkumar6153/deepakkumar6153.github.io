import React from "react";
import s from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={s.loading}>
      <img
        className={s.loader}
        alt="Loading ..."
        src="https://assets-global.website-files.com/5d8e324474cf44070af9c56b/5dad13bc06d077b3a3e6a832_favicon.png"
      />
    </div>
  );
};

export default Loading;
