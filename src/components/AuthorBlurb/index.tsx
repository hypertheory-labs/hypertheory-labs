import React from "react";

export type AuthorBlurbProps = {
  github: string;
  fullName: string;
  description: string;
};

export default function AuthorBlurb({
  github,
  description,
  fullName,
  created,
}: {
  github: string;
  fullName: string;
  description: string;
  created: string;
}): JSX.Element {
  return (
    <div className="col col--6 authorCol_Hf19">
      <div className="avatar margin-bottom--sm">
        <a
          href={"https://github.com/" + github}
          target="_blank"
          rel="noopener noreferrer"
          className="avatar__photo-link"
        >
          <img
            className="avatar__photo"
            src={"https://github.com/" + github + ".png"}
            alt={fullName}
          />
        </a>
        <div
          className="avatar__intro"
          itemProp="author"
          itemType="https://schema.org/Person"
        >
          <div className="avatar__name">
            <a
              href={"https://github.com/" + github}
              target="_blank"
              rel="noopener noreferrer"
              itemProp="url"
            >
              <span itemProp="name">By {fullName}</span>
            </a>
          </div>
          <small className="avatar__subtitle" itemProp="description">
            {description}
          </small>
          <small className="avatar__subtitle" itemProp="created">
            Created on: {created}
          </small>
        </div>
      </div>
    </div>
  );
}
