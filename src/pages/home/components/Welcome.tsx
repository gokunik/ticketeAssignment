import styles from "./style.module.css";

export const Welcome: React.FC = () => {
  return (
    <section className={styles["welcome-section-wrapper"]}>
      <div className={styles["welcome-section-content"]}>
        <h1 className="welcome-title text-center font-bold text-xl mb-5">
          Welcome
        </h1>
        <p className="mb-4 font-lato">
          Hi, I am <strong>Nitesh Khatri</strong>, an Associate Software
          Engineer. Having experience of working in two startups, majorly worked
          in the frontend using Reactjs. I have strong fundamentals in web
          development and have a good understanding Javascript and Reactjs. Also
          experienced in creating REST APIs and backend using Nodejs and express
          js.
        </p>
        <p className="mb-4 font-lato">
          This is my assignment submission for the job role of Frontend
          Engineer. I have used Material tailwind and tailwind css for designing
          the UI. I have also added some interactivity using carousel in card
          and accordion in Payment and FAQ section.
        </p>
      </div>
    </section>
  );
};
