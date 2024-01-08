import React from 'react';
import Album from './Album';
import { useParams } from 'react-router-dom';

function Discography() {
  const { id } = useParams();
  return <Album id={id} />;
}

export default Discography;
