import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faInstagram, faLinkedinIn, faTelegramPlane} from '@fortawesome/free-brands-svg-icons';
import React, {FC, useEffect, useState} from 'react';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

const checkContactName = (name: string):IconProp => {
  switch (name) {
    case ('instagram'):
      return faInstagram;
    case ('telegram'):
      return faTelegramPlane;
    case ('linkedin'):
      return faLinkedinIn;
    case ('facebook'):
      return faFacebookF;
    default:
      return faInstagram;
  }
}

export const ContactsItem: FC<ContactsItemProps> = ({href, name}) => {
  const lowerCaseName = name.toLowerCase();
  const [icon, setIcon] = useState<IconProp>(faInstagram);
  useEffect(() => {
    const chekedName = checkContactName(lowerCaseName);
    setIcon(chekedName);
  }, [lowerCaseName]);
  return (
    <a href={href} target='_blank'>
      <i>
        {lowerCaseName === 'instagram'}
        <FontAwesomeIcon icon={icon}/>
      </i>
    </a>
  )
}

interface ContactsItemProps {
  href: string
  name: string
}