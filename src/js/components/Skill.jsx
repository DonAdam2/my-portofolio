const Skill = ({ skillLabel, skillIcon }) => (
  <div className="skill">
    <div className="skill-icon-wrapper">{skillIcon}</div>
    <div className="skill-title">{skillLabel}</div>
  </div>
);

export default Skill;
