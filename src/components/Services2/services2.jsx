import React from "react";
import Link from "next/link";

const Services2 = () => {
  return (
    <section className="services section-padding position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Mengapa harus memilih kami?
              </h6>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
            <div className="step-item xtop">
              <span className="icon pe-7s-gleam"></span>
              <h6>Garansi 1 Tahun Untuk Semua Paket</h6>
              <p>Garansi 1 tahun untuk Camera, DVR dan Hardisk serta Garansi 3 bulan untuk pemasangan.</p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
            <div className="step-item xcolor">
              <span className="icon pe-7s-phone"></span>
              <h6>Pelayanan Ramah Dan Memuaskan</h6>
              <p>Pelayanan before &amp; after Sales sangat kami perhatikan kepada semua Klien kami</p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".9s">
            <div className="step-item xbottom">
              <span className="icon pe-7s-magic-wand"></span>
              <h6>Tim Teknisi Yang Berpengalaman Dan Professional</h6>
              <p>Kami selalu menerapkan standard yang tinggi kepasa teknisi agar selalu bekerja dengan rapi, teliti dan tepat waktu.</p>
            </div>
          </div>
        </div>
        <div className="smore">
          <Link href="/about/about-dark">
            <a>Discover More</a>
          </Link>
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
      <div className="line top left"></div>
      <div className="line bottom right"></div>
    </section>
  );
};

export default Services2;
