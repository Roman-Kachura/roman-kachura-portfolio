import React from 'react';
import style from './Contacts.module.scss';
import {MainTitle} from '../common/mainTitle/MainTitle';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {MainSubTitle} from '../common/mainSubTitle/MainSubTitle';
import ContactForm from './ContactForm';
import {ContactsItem} from './ContactsItem';
import {Fade} from 'react-awesome-reveal';
import {faEnvelope, faMapMarkerAlt, faPhone} from '@fortawesome/free-solid-svg-icons';
import {useGetAuthorQuery, useGetContactsQuery} from '../../store/api/appService';

export const Contacts = () => {
  const {data: author} = useGetAuthorQuery();
  const {data: contacts} = useGetContactsQuery();

  return (
    <div id="contacts" className={style.contacts}>
      <div className={style.contactsWrapper}/>
      <div className={`container ${style.contactsContainer}`}>
        <MainTitle className={style.mainTitle} title={'My'} spanTitleText={'Contacts'}/>
        <MainSubTitle className={style.mainSubTitle} subTitle={'CONTACT WITH ME'}/>
        <Fade direction="left" duration={1500}>
          <div className={style.formWrapper}>
            <ContactForm/>
            <div className={style.contactInfo}>
              <p>
                You can contact me in a way convenient for you or use the form.
              </p>

              {author &&
                <ul>
                  <li>
                    <i><FontAwesomeIcon icon={faPhone}/></i>
                    <a href={`tel:${author.phone}`}>{author.phone}</a>
                  </li>
                  <li>
                    <i><FontAwesomeIcon icon={faEnvelope}/></i>
                    <a href={`mailto:${author.email}`}>{author.email}</a>
                  </li>
                  <li>
                    <i><FontAwesomeIcon icon={faMapMarkerAlt}/></i>
                    <a target="_blank" href={author.location.url}>{author.location.name}</a>
                  </li>
                </ul>
              }

              {contacts &&
                <div className={style.social}>
                  {contacts.map(c => <ContactsItem key={c._id} href={c.href} name={c.name}/>)}
                </div>
              }
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}