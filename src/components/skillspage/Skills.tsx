import React from 'react';
import style from './Skills.module.scss';
import {SkillItem} from './SkillItem';
import {MainTitle} from '../common/mainTitle/MainTitle';
import {Fade} from 'react-awesome-reveal';
import {MainSubTitle} from '../common/mainSubTitle/MainSubTitle';
import {useGetSkillsQuery} from '../../store/api/appService';

export const Skills = () => {
  const {data: skills} = useGetSkillsQuery();
  return (
    <section id="skills" className={style.skills}>
      <div className={'container'}>
        <MainTitle title={'My'} spanTitleText={'Skills'}/>
        <MainSubTitle subTitle={'WHAT I USE'}/>
        <Fade className={style.skillsFade} direction="left" duration={1500}>
          {skills && <div className={style.skillsContent}>
            {
              skills.map((s, i) => <SkillItem key={`SkillItem ${i}`} src={s.picture} name={s.title}/>)
            }
          </div>
          }
        </Fade>
      </div>
    </section>
  )
}