import React, { useEffect, useState } from "react";
import style from "../Styles/Course.module.css";
import Last from "./Last";

const Course = () => {
  const [course, setCourse] = useState("");

  const getData = () => {
    fetch("http://localhost:7500/course", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCourse(res);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className={style.full}>
        <Last />
        {course ? (
          course.map((el) => {
            return (
              <div className={style.main}>
                <div key={el._id} className={style.course}>
                  <div className={style.course_1}>
                    <img
                      src={el.imageSrc}
                      className={style.image}
                      alt=""
                      srcset=""
                    />
                    <h2 className={style.heading}>{el.title}</h2>
                    <p>{el.duration}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No course</h1>
        )}
      </div>
    </>
  );
};
export { Course };
