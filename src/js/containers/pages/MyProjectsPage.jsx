//simple bar
import 'simplebar-react/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react';
//custom hooks
import useWindowSize from '../../customHooks/UseWindowSize';
//components
import Project from '../../components/Project';
//constants
import { projects } from '@/js/constants/constants';

const MyProjectsPage = () => {
  const { height } = useWindowSize();

  return (
    <div className="my-portfolio">
      <div className="projects-list">
        <SimpleBar
          style={{
            height: height > 800 ? 500 : 400,
            width: '100%',
            maxWidth: 900,
            margin: '0 auto',
          }}
        >
          {projects.map((el, i) => (
            <Project
              key={i}
              title={el.title}
              isImg={el.isImg}
              imgSrc={el.imgSrc}
              iframe={el.iframe}
              desc={el.desc}
              skills={el.skills}
            />
          ))}
        </SimpleBar>
      </div>
    </div>
  );
};

export default MyProjectsPage;
