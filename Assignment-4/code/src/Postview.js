import React, { useState } from 'react';
import './Postview.css';
import axios from 'axios';
const logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
const camera="https://cdn4.vectorstock.com/i/1000x1000/94/18/creative-black-abstract-camera-logo-design-symbol-vector-25619418.jpg"
const dots="https://i.pinimg.com/originals/28/6c/a5/286ca51a367403bcd0aea33b289c9ab2.png"
const sendbutton="https://img.favpng.com/8/9/12/computer-icons-button-tak-products-services-co-ltd-sales-office-icon-design-png-favpng-X986mKtCPvW1JL2ncmkfeSMJs.jpg"
const heart="https://png.pngtree.com/png-clipart/20191120/original/pngtree-red-heart-icon-isolated-png-image_5045156.jpg"
const Postview=()=> {
  const [post,setPost]=useState([]);
React.useEffect(()=>{
  axios.get("http://localhost:3004/user").then(res=>{
    setPost(res.data);
    console.log(post)
  })
},[]);
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img
            src={logo}
            width="58" alt='logo'
          />
        </div>
        <div className="name">
          <h1>Instaclone</h1>
        </div>
        <div className="camera">
          <img
            src={camera}
            alt="camera"
          />
        </div>
      </nav>
{post.map((propos,idx)=>{
  return (<>
  <div className="main-info" key={idx} style={{margin:"20px 0"}}>
    <aside></aside>
    <section className="main-container">
      <header>
        <div className="name-loc">
          <h3>{propos.name}</h3>
          <span>{propos.location}</span>
        </div>
        <div className="dots">
          <img
            src={dots}
            alt="threedots"
          />
        </div>
      </header>
      <div className="image-container">
        <img
          src={propos.PostImage}
          alt="post-pic"
        />
      </div>
      <footer>
        <div className="likes-share-date">
          <div className="like-share">
            <img
              src={heart}
              alt="likes"
            />
            <img
              src={sendbutton}
              alt="share"
            />
          </div>
          <div className="date">{new Date(propos.date).toLocaleDateString}</div>
        </div>
        <span>{propos.likes} likes</span>
        <h2>{propos.description}</h2>
      </footer>
    </section>
    <aside></aside>
  </div>
  </>
)
})}
    </>
  );
}
export default Postview;