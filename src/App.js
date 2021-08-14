import './App.scss';

import { FaFacebookF, FaHome, FaUserFriends, FaFlag, FaFacebookMessenger, FaBell, FaSortDown } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { MdOndemandVideo } from 'react-icons/md';
import avatar from './assets/images/avatar.jpg';

import { FaChevronCircleDown } from 'react-icons/fa';

import friendImage from './assets/images/friend-image.png';
import watchImage from './assets/images/watch-image.png';
import pageImage from './assets/images/page-image.png';
import groupImage from './assets/images/group-image.png';
import marketplaceImage from './assets/images/marketplace-image.png';
import eventImage from './assets/images/event-image.png';
import memoryImage from './assets/images/memory-image.png';
import reactJsGroup from './assets/images/reactjs-group.jpg';
import k19ITCGroup from './assets/images/k19-itc-group.jpg';

import { IoMdAddCircle } from 'react-icons/io';
import { FaVideo, FaImages } from 'react-icons/fa';
import { CgSmileMouthOpen } from 'react-icons/cg';
import { RiVideoAddFill } from 'react-icons/ri';
import { BsThreeDots } from 'react-icons/bs';

import friend1 from './assets/images/friend-avatar-1.jpg';
import friend2 from './assets/images/friend-avatar-2.jpeg';
import friend3 from './assets/images/friend-avatar-3.jpg';
import friend4 from './assets/images/friend-avatar-4.jpeg';
import gearvnAvatar from './assets/images/gearvn-avatar.jpg';
import gearvnNews1 from './assets/images/gearvn-news(1).jpg';

import { BsSearch } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import jockey from './assets/images/jockey-sale.jfif';
import itviec from './assets/images/itviec.png';

const SideBarMenu = [
  {
    image: avatar,
    subtitle: 'Avicii'
  }, {
    image: friendImage,
    subtitle: 'Bạn bè'
  }, {
    image: watchImage,
    subtitle: 'Watch'
  }, {
    image: pageImage,
    subtitle: 'Trang'
  }, {
    image: groupImage,
    subtitle: 'Nhóm'
  }, {
    image: marketplaceImage,
    subtitle: 'Marketplace'
  }, {
    image: eventImage,
    subtitle: 'Sự kiện'
  }, {
    image: memoryImage,
    subtitle: 'Kỷ niệm'
  },
]

const SideBarShortcut = [
  {
    image: reactJsGroup,
    subtitle: 'ReactJS - Việt Nam'
  }, {
    image: k19ITCGroup,
    subtitle: 'Sinh viên K19 - ITC'
  },
]

const story = [
  {
    img: friend1,
    name: 'Lan Anh'
  }, {
    img: friend2,
    name: 'Anh Thư'
  }, {
    img: friend3,
    name: 'Ji Chang Wook'
  }, {
    img: friend4,
    name: 'Nhật Hạ'
  },
]

const listFriends = [
  {
    img: friend1,
    name: 'Lan Anh'
  }, {
    img: friend2,
    name: 'Anh Thư'
  }, {
    img: friend3,
    name: 'Ji Chang Wook'
  }, {
    img: friend4,
    name: 'Nhật Hạ'
  },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="left">
          <span className="left__icon"><FaFacebookF /></span>
          <input type="text" className="left__search" placeholder="Tìm kiếm trên Facebook" list="listdata" />
          <datalist id="listdata">
            <option value="ReactJS - Việt Nam"/>
            <option value="Sinh viên K19 ITC"/>
            <option value="Lan Anh"/>
            <option value="Anh Thư"/>
          </datalist>
        </div>

        <div className="middle">
          <FaHome className="middle__item middle__item--active"></FaHome>
          <FaUserFriends className="middle__item"></FaUserFriends>
          <FaFlag className="middle__item"></FaFlag>
          <MdOndemandVideo className="middle__item"></MdOndemandVideo>
          <HiUserGroup className="middle__item"></HiUserGroup>
        </div>

        <div className="right">
          <div className="account account--right-header">
            <img src={avatar} alt="" className="account-avatar" />
            <span className="account__name">Avicii</span>
          </div>
          <div className="right-item"><BsGrid3X3GapFill className="right-item__icon"></BsGrid3X3GapFill></div>
          <div className="right-item"><FaFacebookMessenger className="right-item__icon"></FaFacebookMessenger></div>
          <div className="right-item"><FaBell className="right-item__icon"></FaBell></div>
          <div className="right-item"><FaSortDown className="right-item__icon right-item__icon--dropdown"></FaSortDown></div>
        </div>

      </header>

      <body className="App-body">
        <div className="left-sidebar">
          <div className="left-sidebar-menu">
            {SideBarMenu.map((item, index) => {
              return <div className="sidebar-item">
                <img src={item.image} alt="" className="sidebar-item__image" />
                <span className="sidebar-item__subtitle">{item.subtitle}</span>
              </div>
            })}

            <div className="sidebar-item sidebar-item--watch-more">
              <span className="sidebar-item__icon"><FaChevronCircleDown /></span>
              <span className="sidebar-item__subtitle">Xem thêm</span>
            </div>
          </div>

          <div className="left-sidebar-shortcut">
            <span className="shortcut-title">Lối tắt của bạn</span>

            {SideBarShortcut.map((item, index) => {
              return <div className="sidebar-item">
                <img src={item.image} alt="" className="sidebar-item__image sidebar-item__image--shortcut" />
                <span className="sidebar-item__subtitle">{item.subtitle}</span>
              </div>
            })}

          </div>

        </div>

        <div className="content">
          <div className="story-layout">

            <div className="story story--create">
              <img src={avatar} alt="" className="story__image" />
              <span className="story__btn-add"><IoMdAddCircle /></span>
            </div>

            {story.map((item, index) => {
              return <div className="story">
                <img src={item.img} alt="" className="story__avatar" />
                <span className="story__name">{item.name}</span>
              </div>
            })}

          </div>

          <div className="post">
            <div className="post-status">
              <img src={avatar} alt="" className="account-avatar" />
              <input type="text" className="post-status__input" placeholder="Avicii ơi, bạn đang nghĩ gì thế?" />
            </div>
            <div className="post-more">
              <div className="post-more-item">
                <FaVideo className="post-more-item__icon post-more-item__icon--livestream" />
                <span className="post-more-item__title">Video trực tiếp</span>
              </div>
              <div className="post-more-item">
                <FaImages className="post-more-item__icon post-more-item__icon--image" />
                <span className="post-more-item__title">Ảnh/Video</span>
              </div>
              <div className="post-more-item">
                <CgSmileMouthOpen className="post-more-item__icon post-more-item__icon--feeling" />
                <span className="post-more-item__title">Cảm xúc/Hoạt động</span>
              </div>
            </div>
          </div>

          <div className="room">
            <div className="room-btn">
              <span className="room-btn__icon"><RiVideoAddFill /></span>
              <span className="room-btn__subtitle">Tạo phòng họp mặt</span>
            </div>
            <div className="room-friend">

              {listFriends.map((item, index) => {
                return <img src={item.img} alt="" className="account-avatar" />
              })}

            </div>
          </div>

          <div className="news">
            <div className="news-header">
              <div className="news-infor">
                <img src={gearvnAvatar} alt="" className="news-infor__avatar" />
                <div className="news-infor-detail">
                  <span className="news-infor-detail__name">GearVN</span>
                  <span className="news-infor-detail__time">47 phút</span>
                </div>
              </div>
              <BsThreeDots className="news-edit"></BsThreeDots>
            </div>
            <p className="news-disc">
              Có quá nhiều màn hình giá ưu đãi trong hình <br />
              Màn hình phổ thông siêu ưu đãi giá chỉ từ 2.990.000VND <br />
              Màn hình Gaming 32" 2K 144Hz giá chỉ từ 6.990.000VND <br />
              Màn hình đồ họa chuẩn màu giá chỉ từ 5.590.000 VND <br /><br />

              Xem ngay: https://gearvn.com/pages/bts-2021
            </p>
            <img src={gearvnNews1} alt="" className="news-image" />
            <div className="news-interactive">
              <div className="feeling">
                <div className="feeling__icon"></div>
                <div className="feeling__quantity"></div>
              </div>
              <div className="comment-and-share">
                <span className="comment-and-share__cmt"></span>
                <span className="comment-and-share__share"></span>
              </div>
            </div>
            <div className="news-actions">
              <div className="actions-like"></div>
              <div className="actions-cmt"></div>
              <div className="actions-share"></div>
            </div>
          </div>

        </div>

        <div className="right-sidebar">
          <div className="sponsor-group">
            <span className="sponsor-group__title">Được tài trợ</span>
            <div className="sponsor">
              <img src={jockey} alt="" className="sponsor__image" />
              <div className="sponsor-detail">
                <span className="sponsor-detail__name">Jockey</span>
                <span className="sponsor-detail__link">jockey.vn</span>
              </div>
            </div>
            <div className="sponsor">
              <img src={itviec} alt="" className="sponsor__image" />
              <div className="sponsor-detail">
                <span className="sponsor-detail__name">100+ việc lập trình .NET mới nhất với mức lương lên đến $3,000/1 tháng</span>
                <span className="sponsor-detail__link">itviec.com/net jobs</span>
              </div>
            </div>
          </div>

          <div className="contact">
            <div className="contact-header">
              <span className="contact-header__title">Người liên hệ</span>
              <div className="contact-header-menu">
                <span className="contact-header-menu__item"><RiVideoAddFill /></span>
                <span className="contact-header-menu__item"><BsSearch /></span>
                <span className="contact-header-menu__item"><BsThreeDots /></span>
              </div>
            </div>

            <div className="contact-content">
              {listFriends.map((item, index) => {
                return <div className="sidebar-item">
                  <img src={item.img} alt="" className="sidebar-item__image sidebar-item__image--avatar" />
                  <span className="sidebar-item__subtitle">{item.name}</span>
                </div>
              })}
            </div>

            <div className="contact-new">
              <span className="contact-new__button"><FaEdit /></span>
            </div>

          </div>
        </div>

      </body>
    </div>
  );
}

export default App;
