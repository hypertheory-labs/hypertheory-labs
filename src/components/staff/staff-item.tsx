import React from "react";
import styles from "./staff-item.module.css";
export type Staff = {
  firstName: string;
  lastName: string;

  slug: {
    current: string;
  };
  picture: string;
  hoverPicture: string;
  bio: string;
  skillz: string[];
};
export default function StaffItem({ staff }: { staff: Staff }) {
  const accentDictionary: { [slug: string]: string } = {
    "jamie-mitch": "la-meteor",
    "jeff-gonzalez": "la-satellite",
    "lee-cooper": "la-rocket",
  };

  return (
    <>
      <section className={styles.staffItem}>
        <i
          className={
            styles.staffAccent1 + " las " + accentDictionary[staff.slug.current]
          }
        ></i>
        <div className={styles.staffImage}>
          <img
            src={"/img/" + staff.picture}
            alt="hello"
            className={styles.mainImg}
          ></img>
          <img
            src={"img/" + staff.hoverPicture}
            alt="hello"
            className={styles.hoverImg}
          ></img>
        </div>

        <div className={styles.staffInfo}>
          <i className={styles.staffAccent2 + " las la-user-astronaut"}></i>
          <h2>
            {staff.firstName} {staff.lastName}
          </h2>
          <div className={styles.staffSocial}>
            <a href="">
              <i className="lab la-twitter"></i>
            </a>
            <a href="">
              <i className="lab la-github"></i>
            </a>
            <a href="">
              <i className="lab la-linkedin"></i>
            </a>
          </div>
          <div className={styles.monologue}>
            <h3>Monologue</h3>
            <div>{staff.bio}</div>
          </div>
          <div className={styles.skillz}>
            <h3>Skillz</h3>
            <div>
              {staff.skillz
                ? staff?.skillz.map((skill, key) => (
                    <span key={key}>{skill}</span>
                  ))
                : ""}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
