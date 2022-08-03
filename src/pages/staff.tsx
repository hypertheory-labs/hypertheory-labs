import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import StaffItem, { Staff } from "../components/staff/staff-item";
import styles from "./staff.module.css";
export default function StaffPage() {
  const { siteConfig } = useDocusaurusContext();
  const staffList: Staff[] = [
    {
      firstName: "Jamie",
      lastName: "Mitch",
      bio: "Jamie is a software developer, and a cat whisperer",
      hoverPicture: "discord.png",
      picture: "github.svg",
      skillz: ["typescript", "javascript", "react", "redux", "node"],
      slug: {
        current: "jamie-mitch",
      },
    },
    {
      firstName: "Jeff",
      lastName: "Gonzalez",
      bio: "Jeff is a software developer and technical trainer",
      hoverPicture: "discord.png",
      picture: "github.svg",
      skillz: ["typescript", "javascript", "react", "redux", "node"],
      slug: {
        current: "jeff-gonzalez",
      },
    },
    {
      firstName: "Lee",
      lastName: "Cooper",
      bio: "Lee is a software developer, designer, and accessibility advocate",
      hoverPicture: "discord.png",
      picture: "github.svg",
      skillz: ["typescript", "javascript", "react", "redux", "node"],
      slug: {
        current: "lee-cooper",
      },
    },
  ];
  return (
    <Layout
      title={`Hyperthery Labs Staff`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="container">
        <h1>Our Awesome Staff</h1>
        <ul className={styles.staffListItem}>
          {staffList.map((staffMember, key) => (
            <li key={key}>
              <StaffItem staff={staffMember}></StaffItem>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}
