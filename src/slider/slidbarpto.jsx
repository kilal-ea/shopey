import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../s.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import data from "../api.json"

class Sl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      w: window.innerWidth,
      t: 5,
    };

    this.updateScreenWidth = this.updateScreenWidth.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateScreenWidth);
    if (this.state.w <= 600) {
      this.setState({t :1})
    } else if (this.state.w <= 950 && this.state.w > 600) {
      this.setState({t :2})
    } else if (this.state.w <= 1100 && this.state.w > 950) {
      this.setState({t :3})
    } else if (this.state.w <= 1600 && this.state.w > 1100) {
      this.setState({t :4})
    }
    else{
      this.setState({t :5})
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateScreenWidth);
  }
  updateScreenWidth() {
    const newWidth = window.innerWidth;
    this.setState({ w: newWidth });
    if (this.state.w <= 600) {
      this.setState({t :1})
    } else if (this.state.w <= 950 && this.state.w > 600) {
      this.setState({t :2})
    } else if (this.state.w <= 1100 && this.state.w > 950) {
      this.setState({t :3})
    } else if (this.state.w <= 1800 && this.state.w > 1100) {
      this.setState({t :4})
    }
    else{
      this.setState({t :5})
    }
    
  }
  render() {
    const {t } = this.state;
    console.log(t);
    return (
      <div>
        <div className='px-10 py-5 mb-24 relative z-0'>
          <Swiper
            slidesPerView={this.state.t}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className='mySwiper'
          >
            {data.map((item) => (
              <SwiperSlide
                key={item.id}
                className='rounded-2xl   h-full mx- my'
              >
                <Link to={'/product/' + item.id}>
                  <div className='shadow-2xl p-1 w-full h-full'>
                    <div>
                      <img
                        src={item.images}
                        alt={item.title}
                        className='rounded-2xl h-full'
                      />
                    </div>
                    <div className='  rounded-2xl'>
                      <h1 className='text-lg text-blue-900 '>{item.title}</h1>
                      <h1 className='text-lg text-blue-900 '>
                        {item.price} DH
                      </h1>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  }
}

export default Sl;
