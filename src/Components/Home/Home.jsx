import React from 'react';
import Services from './Services/Services';
import Banner from './Banner/Banner';
import Story from './Story/Story';
import Chat from '../Form/Chat';
import MediaInfo from '../Media/MediaInfo';
import Matches from './Matches/Matches';

const Home = () => {
    return (
        <div>
             
      <Banner></Banner>
      <Story></Story>
      <Services></Services>
      <Chat></Chat>
      <MediaInfo></MediaInfo>
      <Matches></Matches>
   
    
        </div>
    );
};

export default Home;