import { useState } from 'react';
//constants
import { skillsImages } from '@/js/constants/constants';
//components
import SkillsModal from '@/js/containers/modals/SkillsModal';
import Cube from '@/js/components/shared/Cube';

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
      <Cube images={skillsImages} />
      <SkillsModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default SkillsPage;
