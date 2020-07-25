import React from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';




const UserInfo = () => {
  const { githubUser } = React.useContext(GithubContext)
  const { public_repos, followers, following, public_gists } = githubUser

  const items = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: 'repos',
      value: public_repos,
      color: 'gradcyan',

    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: 'followers',
      value: followers,
      color: 'green',

    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      label: 'following',
      value: following,
      color: 'purple',

    },
    {
      id: 4,
      icon: <GoGist className="icon" />,
      label: 'Gist',
      value: public_gists,
      color: 'gradend',

    },
  ];
  return (
    <section className="section">
      <Wrapper className="section-center">
        {items.map((item) => {
          return <Item key={item.id} {...item}></Item>;
        }
        )}
      </Wrapper>

    </section>
  );
};

const Item = ({ icon, label, value, color }) => {
  return <article className="item">
    <span className={color}>{icon}</span>
    <div>
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  </article>
}


const Wrapper = styled.section`
  display: grid;
  background: rgb(141,230,208);
  background: linear-gradient(90deg, rgba(141,230,208,1) 4%, rgba(177,231,191,1) 18%, rgba(179,228,193,1) 21%, rgba(230,144,236,1) 68%, rgba(0,212,255,1) 100%);
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
      grid - template - columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  .item {
      border - radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--clr-white);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font - size: 1.5rem;
    }
    h3 {
      margin - bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin - bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: var(--clr-primary-10);
      color: var(--clr-primary-5);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
    .gradcyan{
      background: rgb(141,230,208);
background: linear-gradient(90deg, rgba(141,230,208,1) 0%, rgba(177,221,231,1) 41%, rgba(144,219,236,1) 58%, rgba(0,212,255,1) 100%);
    }
    .gradend{
      background-image: linear-gradient(to right top, #72cbb2, #3bbebd, #00b0c9, #009fd2, #008bd2, #008ad3, #0088d3, #0087d4, #0099d7, #00a9d2, #00b7c7, #19c3b9);
    }
  }
`;

export default UserInfo;
