import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Continual Learning",
    Svg: require("@site/static/img/lab.svg").default,
    description: (
      <>
        With our handy resources, workshops, labs, and courses, you can choose
        your own adventure. One size does not fit all, and one way of learning
        isn't alway the best thing for everything you want to learn.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/question.svg").default,
    description: (
      <>
        Dig through our stuff, join our Discord, connect with other developers.
        Fork our repos!
      </>
    ),
  },
  {
    title: "Community",
    Svg: require("@site/static/img/workshop.svg").default,
    description: (
      <>
        We hang out on our Discord server, and you can join us there. We also
        have frequent Youtube live streams, and post videos where a video is
        better than a post.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
