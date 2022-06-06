/* eslint-disable @next/next/no-img-element */
import React from "react";

const Intro3 = () => {
  return (
    <header className="slider-stwo valign position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="img">
              <img src="/img/slid/bg2.png" alt="" />
            </div>
          </div>
          <div className="col-lg-7 valign">
            <div className="cont">
              <div className="sub-title mb-5">
                <h6>Lyke Teknologi Nusantara</h6>
              </div>
              <h1 className="mb-10 fw-600">Melayani Jasa Sistem Keamanan</h1>
              <h6 className="mb-8 fw-400">Pesan Sekarang Bisa Langsung Dipasang</h6>
              <ul>
                <li>
                  <div>
                    <span className="icon pe-7s-arc">
                      <span className="bord"></span>
                    </span>
                  </div>
                  <div className="cont">
                    <h6>CCTV</h6>
                    <p>
                      Untuk melindungi berbagai Area yang anda inginkan.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <span className="icon pe-7s-help2">
                      <span className="bord"></span>
                    </span>
                  </div>
                  <div className="cont">
                    <h6>Access Door</h6>
                    <p>
                      Hadir untuk melindungi setiap Akses keluar & masuk.
                    </p>
                  </div>
                </li> <br />
                <li>
                  <div>
                    <span className="icon pe-7s-help2">
                      <span className="bord"></span>
                    </span>
                  </div>
                  <div className="cont">
                    <h6>Finger Print & Mesin Absensi</h6>
                    <p>
                      Memudahkan dalam pengelolaan Absen Karyawan.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Intro3;
