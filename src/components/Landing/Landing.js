import { useState } from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
  const [openNavbarClick, setOpenNavbarClick] = useState(true);

  return (
    <>
      <div className="container-landing-navbar">
        <div className="navbar">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} />
          <div className="hamburger">
            <i
              className="bi bi-list"
              onClick={() => setOpenNavbarClick(!openNavbarClick)}
            ></i>
          </div>
        </div>
        <div
          className={
            openNavbarClick ? "responsive-landing" : "responsive-landing active"
          }
        >
          <ul>
            <li>Servis Kami</li>
            <li>Tentang Kami</li>
            <li>Daftar</li>
          </ul>
        </div>
      </div>
      <div className="container-landing space">
        <div className="container-title">
          <h1>Wijaya Store</h1>
          <img src={`${process.env.PUBLIC_URL}/logo.png`} />
        </div>
        <div className="link">
          <div className="link-list">
            <ul>
              <li>Servis Kami</li>
              <li>Tentang Kami</li>
              <li>Daftar</li>
            </ul>
          </div>
          <div className="btn-landing">
            <Link to={"/home"}>get Started</Link>
          </div>
        </div>
      </div>
      <div className="container-service" id="service">
        <h2>Kategori Kami</h2>
        <div className="all-image-list">
          <div className="image-list">
            <img
              src={`${process.env.PUBLIC_URL}/download__10_-removebg-preview.png`}
            />
            <h5>Smartphone</h5>
          </div>
          <div className="image-list">
            <img
              src={`${process.env.PUBLIC_URL}/89c9feae8f2962468aff0c096826dc76-removebg-preview.png`}
            />
            <h5>Television</h5>
          </div>
          <div className="image-list">
            <img
              src={`${process.env.PUBLIC_URL}/download__15_-removebg-preview.png`}
            />
            <h5>Refrigerator</h5>
          </div>
          <div className="image-list">
            <img
              src={`${process.env.PUBLIC_URL}/download__22_-removebg-preview.png`}
            />
            <h5>Speaker</h5>
          </div>
          <div className="image-list">
            <img
              src={`${process.env.PUBLIC_URL}/download__28_-removebg-preview.png`}
            />
            <h5>Printer</h5>
          </div>
          <div className="image-list">
            <img
              src={`${process.env.PUBLIC_URL}/download__24_-removebg-preview.png`}
            />
            <h5>Washing Machine</h5>
          </div>
        </div>
      </div>
      <div className="container-about-us">
        <h2>Tentang kami</h2>
        <div className="about-us">
          <div className="about-image">
            <img src={`${process.env.PUBLIC_URL}/about-us.png`} />
          </div>
          <div className="text">
            <h3>Kenapa harus memilih produk kami?</h3>
            <p>
              Misi kami adalah untuk memuaskan pelanggan karena pelanggan adalah
              raja
            </p>
            <ul>
              <li>
                desain produk (kami) mengeluarkan desain tersendiri.kami sangat
                di respon baik oleh pasar,desain yang khusus ini juga membuat
                banyak pengguna lebih nyaman menggunakan website ini dibanding
                website yang lain, pada bagian desain website ini selalu
                mengutamakan ciri produk yang kualitas tertinggi dan tidak lepas
                dari teknologi yang yang kita jual.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="slider">
        <div className="slide">
          <div className="slider1">
            <h2>Register</h2>
            <Link to={"/register"}>Click Here</Link>
          </div>
        </div>
        <div className="slide">
          <div className="slider2">
            <h2>Login</h2>
            <Link to={"/login"}>Click Here</Link>
          </div>
        </div>
      </div>
      <div className="footer space">
        <div className="social-icon">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-envelope"></i>
        </div>
        <p>© Copyright 2022 All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Landing;
