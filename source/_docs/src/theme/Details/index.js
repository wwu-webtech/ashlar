import React from 'react';
import {Details as DetailsGeneric} from '@docusaurus/theme-common/Details';

export default function Details({...props}) {
  return (
    <DetailsGeneric
      {...props}
      className={"nothing"}
    />
  );
}
