const Project = ({ title, isImg, imgSrc, iframe, desc, skills }) => (
  <div className="project-wrapper">
    <div className="image-wrapper">
      {isImg ? <img className="book-img" src={imgSrc} alt={title} /> : iframe}
    </div>
    <div className="overview-wrapper">
      <h2 className="project-name">{title}</h2>
      <h3 className="overview">Overview</h3>
      <p>{desc}</p>
      <h3 className="overview">Project Skills</h3>
      <p>
        {skills.map((el, i) => (
          <span key={i}>
            {el}
            <br />
          </span>
        ))}
      </p>
    </div>
  </div>
);

export default Project;
