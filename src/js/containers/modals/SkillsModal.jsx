import SimpleBar from 'simplebar-react';
//constants
import { skillsList } from '@/js/constants/constants';
//components
import Skill from '@/js/components/Skill';
import Modal from '@/js/components/shared/Modal';

const SkillsModal = ({ isModalOpen, closeModal }) => (
  <Modal
    wrapper={{
      show: isModalOpen,
      closeHandler: closeModal,
      wrapperClassName: 'skills-modal-wrapper',
    }}
    header={{
      title: 'Skills LIst',
    }}
    footer={{
      enableFooter: false,
    }}
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
);

export default SkillsModal;
