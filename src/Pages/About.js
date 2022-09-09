import '../App.css';

function About() {
  return (
    <section>
      <div className="aboutperusahaan">
        <div className="container">
          <h4 className="hubungikami">
            <b>Hubungi Kami</b>
          </h4>
          <br></br>
          <div className="row">
            <div className="col l6 s12">
              <h5>
                <b>Maps</b>
              </h5>
              <br></br>
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5277416488516!2d106.85884271476907!3d-6.1938787955160235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f45e43af57f9%3A0x36ce680336f32c30!2sLEMBAGA%20NATIONAL%20SINGLE%20WINDOW%20(LNSW)%20KEMENTERIAN%20KEUANGAN!5e0!3m2!1sen!2sid!4v1662046798968!5m2!1sen!2sid"
              ></iframe>
            </div>
            <div className="center col m6">
              <h5>
                <b>Alamat Perusahaan</b>
              </h5>
              <br></br>
              <p>Gedung Naya Pramuka Jalan Rawamangun No.59C, RT.9/RW.7, RT.9, RW.3, Rawasari, Kec. Cemp. Putih, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10570</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5>
                <b>Jam Layanan Perusahaan</b>
              </h5>
              <br></br>
              <div className="jamlayanan">
                <li>Senin : 8:00 - 16:00</li>
                <li>Selasa : 8:00 - 16:00</li>
                <li>Rabu : 8:00 - 16:00</li>
                <li>Kamis : 8:00 - 16:00</li>
                <li>Jumat : 8:00 - 16:00</li>
                <li>Sabtu : 8:00 - 16:00</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
