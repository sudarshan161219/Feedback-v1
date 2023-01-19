import React,{useContext} from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/Context";

const FeedbackList = ({ item }) => {

const { handleDelete, handleEdit } = useContext(FeedbackContext)

  return (
    <div className='feedback-card'>
      <div className='edit-delete'>
        <div className='ratings'>
          <span>{item.rating}</span>
        </div>
        <div className='icons-container'>
        <FaTimes onClick={() =>  handleDelete(item.id)} />
         <FaEdit onClick={() =>   handleEdit(item)} />
        </div>
      </div>

      <p>{item.text}</p>
    </div>
  );
};

export default FeedbackList;
