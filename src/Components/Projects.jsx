import React from 'react';
import Data_projects from '../Context/Data_projects';
import Main_title from '../Context/Main_title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
function Projects() {
    return (
      <div className="projects" id="projects" >
        <div className="content" data-aos="fade-up">
          <Main_title title="Projects" sub_title="My Featured Projects" />
          <div className="swiper-button-prev prev_project"></div>
          <div className="swiper-button-next next_project"></div>
          <Swiper
            modules={[Navigation]}
            slidesPerView="auto"
            slideToClickedSlide={true}
            centeredSlides={false}
            speed={500}
            navigation={{
              nextEl: '.swiper-button-next.next_project',
              prevEl: '.swiper-button-prev.prev_project',
            }}
            className="swiper mySwiper projects_swiper"
          >
            {Data_projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="project-card">
                  <div className="img_container">
                    <img src={project.img} alt={project.title} />
                  </div>
                  <div className="text_desc">
                    <div className="title">{project.title}</div>
                    <p>{project.description}</p>
                    <div className="flex">
                      <span className="tags">{project.tags}</span>
                      {project.link && (
                        <a className="visit-btn" href={project.link} target="_blank" rel="noopener noreferrer">
                          Visit Demo
                        </a>
                      )}
                      
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  }
  


export default Projects;