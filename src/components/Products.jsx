import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//Bootstrap
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../styles/swiper.scss";

// import required modules
import { Pagination } from "swiper";
import { slides } from "./slides.js";

function MyVerticallyCenteredModal({ show, onHide, modal }) {
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <img src={slides[modal]} alt="" />
      </Modal.Body>
      <Modal.Footer>
        <Button className="g-btn" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const Products = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modal, setModal] = useState(0);
  const openModal = (id) => {
    setModalShow(true);
    setModal(id);
  };
  return (
    <>
      <Container id="products">
        <div className="header">
          <h4>product images</h4>
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slides.map((slide, index) => {
            return (
              <SwiperSlide className="items" xs={12} md={6} lg={4}>
                <img src={slide} alt="" />
                <Button className="g-btn" onClick={() => openModal(index)}>
                  view fullscreen
                </Button>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          modal={modal}
        />
      </Container>
    </>
  );
};

export default Products;
