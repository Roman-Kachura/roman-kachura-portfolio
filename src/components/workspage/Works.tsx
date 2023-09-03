import React from 'react';
import style from './Works.module.scss';
import {WorksItem} from './WorksItem';
import {MainTitle} from '../common/mainTitle/MainTitle';
import {Fade} from 'react-awesome-reveal';
import {MainSubTitle} from '../common/mainSubTitle/MainSubTitle';
import {useGetProjectsQuery} from '../../store/api/appService';

export const Works = () => {
  const {data: projects} = useGetProjectsQuery();
  return (
    <section id="works" className={style.works}>
      <div className={style.div}/>
      <div className={'container'}>
        <MainTitle title={'My'} spanTitleText={'Projects'}/>
        <MainSubTitle subTitle={'WHAT I DO'}/>
        <Fade direction="left" duration={1500} className={style.fade}>
          {projects &&
            <div className={style.worksContent}>
              {projects.map(p =>
                <WorksItem
                  key={p._id}
                  link={p.url}
                  github={p.github}
                  title={p.name}
                  img={p.picture.url}/>)
              }
            </div>
          }
        </Fade>
      </div>
    </section>
  )
}

