import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';
const Dashboard = () => {
  const { isLoading } = React.useContext(GithubContext)
  if (isLoading) {
    return <main>
      <Navbar />
      <img src={loadingImage} className="loading-img" alt='loading' />
    </main>
  }
  return (
    <main>

      <Navbar></Navbar>
      <Search></Search>
      <User />
      <Repos />
      <Info />


    </main>
  );
};

export default Dashboard;
