import React from 'react'
import Box from '@mui/material/Box';
import GameCard from './GameCard';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/store';
import Card from '@mui/material/Card';
type Props = {}

function MainGame({}: Props) {


    return (
        <div>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide><GameCard /></SwiperSlide>
                <SwiperSlide><GameCard /></SwiperSlide>
                <SwiperSlide><GameCard /></SwiperSlide>
                <SwiperSlide><GameCard /></SwiperSlide>
                <SwiperSlide><GameCard /></SwiperSlide>
                <SwiperSlide><GameCard /></SwiperSlide>
                <SwiperSlide><GameCard /></SwiperSlide>
                <SwiperSlide><GameCard /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default MainGame