import { useState } from 'react';
//constants
import { skillsImages } from '@/js/constants/helpers';
//components
import SkillsModal from '@/js/containers/modals/SkillsModal';

const SkillsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="skills-page">
      <button onClick={openModal} className="open-skills-btn">
        See Full Skills
      </button>
      <div className="cube-wrapper">
        <div className="cube">
          {skillsImages.map((el, i) => (
            <div
              className="skill-wrapper"
              key={i}
              style={{ backgroundImage: `url(${el.image})` }}
            />
          ))}
        </div>
      </div>
      <SkillsModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default SkillsPage;
