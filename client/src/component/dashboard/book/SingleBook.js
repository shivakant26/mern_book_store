import { Table } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import {FaUserCircle , FaCalendarAlt , FaComment} from "react-icons/fa";
import {BiSolidTime} from 'react-icons/bi';
import { baseUrl } from "../../../api/apiConstant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { singleBook } from "../../../redux/bookSlice";


const SingleBook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {singleBookData} = useSelector((state)=>state?.book)

  useEffect(()=>{
    dispatch(singleBook(id))
  },[dispatch])

  return (
    <>
      <div className="dash_heading d-flex">
        <h2>{singleBookData?.data?.data[0]?.bookName}</h2>
      </div>
      <div className="single_bk_tag d-flex">
        <div className="sgbk d-flex">
          <span><FaUserCircle/></span>
          <span>{singleBookData?.data?.data[0]?.authorName}</span>
        </div>
        <div className="sgbk d-flex">
          <span><FaCalendarAlt/></span>
          <span>september 16, 2018</span>
        </div>
        <div className="sgbk d-flex">
          <span><BiSolidTime/></span>
          <span>5:29 pm</span>
        </div>
        <div className="sgbk d-flex">
          <span><FaComment/></span>
          <span>No Comments</span>
        </div>
      </div>
      <div className="single_bk_image">
        <img src={baseUrl + singleBookData?.data?.data[0]?.coverImgUrl} alt="single_bk_image" />
      </div>
      <div className="bk_discription">
        <h3>Price : {singleBookData?.data?.data[0]?.price}</h3>
        <p>{singleBookData?.data?.data[0]?.description}</p>
      </div>
    </>
  );
};

export default SingleBook;
