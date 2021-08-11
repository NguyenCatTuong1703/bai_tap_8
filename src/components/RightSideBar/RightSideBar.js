import React from 'react'
import './RightSideBar.scss'

import { RiVideoAddFill } from 'react-icons/ri';
import { BsSearch, BsThreeDots } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';

import avatar from '../../assets/images/avatar.jpg';
import jockey from '../../assets/images/jockey-sale.jfif';
import itviec from '../../assets/images/itviec.png';

export default function RightSideBar() {
    return (
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
                    <div className="sidebar-item">
                        <img src={avatar} alt="" className="sidebar-item__image sidebar-item__image--avatar" />
                        <span className="sidebar-item__subtitle">Tuong Nguyen</span>
                    </div>
                    <div className="sidebar-item">
                        <img src={avatar} alt="" className="sidebar-item__image sidebar-item__image--avatar" />
                        <span className="sidebar-item__subtitle">Tuong Nguyen</span>
                    </div>
                    <div className="sidebar-item">
                        <img src={avatar} alt="" className="sidebar-item__image sidebar-item__image--avatar" />
                        <span className="sidebar-item__subtitle">Tuong Nguyen</span>
                    </div>
                    <div className="sidebar-item">
                        <img src={avatar} alt="" className="sidebar-item__image sidebar-item__image--avatar" />
                        <span className="sidebar-item__subtitle">Tuong Nguyen</span>
                    </div>
                    <div className="sidebar-item">
                        <img src={avatar} alt="" className="sidebar-item__image sidebar-item__image--avatar" />
                        <span className="sidebar-item__subtitle">Tuong Nguyen</span>
                    </div>
                    <div className="sidebar-item">
                        <img src={avatar} alt="" className="sidebar-item__image sidebar-item__image--avatar" />
                        <span className="sidebar-item__subtitle">Tuong Nguyen</span>
                    </div>
                    <div className="sidebar-item">
                        <img src={avatar} alt="" className="sidebar-item__image sidebar-item__image--avatar" />
                        <span className="sidebar-item__subtitle">Tuong Nguyen</span>
                    </div>

                </div>
                <div className="contact-new">
                    <span className="contact-new__button"><FaEdit /></span>
                </div>
            </div>
        </div>
    
    )
}
