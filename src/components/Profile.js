import React from 'react';
import Azsearch from './azsearch';

function Profile({ user }) {
  const { email, password, name } = user || {};
  return (
    <>
     <div><Azsearch /></div>
    </>
  );
}

export default Profile;