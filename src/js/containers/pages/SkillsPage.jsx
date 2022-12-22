import React, { useState } from 'react';
//simple bar
import SimpleBar from 'simplebar-react';
//constants
import { skillsImages } from '@/js/constants/helpers';
import { skillsList } from '@/js/constants/skillsList';
//components
import Modal from '../../components/UI/Modal';
import Skill from '../../components/Skill';

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
      <Modal
        show={isModalOpen}
        title="Skills LIst"
        headerCloseHandler={closeModal}
        enableFooter={false}
      >
        <SimpleBar
          style={{
            maxHeight: 430,
          }}
        >
          {skillsList.map((el, i) => (
            <Skill key={i} skillLabel={el.label} skillIcon={el.icon} />
          ))}
        </SimpleBar>
      </Modal>
    </div>
  );
};

export default SkillsPage;
