import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import{getAnnonceByid} from "../features/annonce/annonceSlice"
import {FaPen} from 'react-icons/fa'
import {FaTrash} from 'react-icons/fa'
import { toast } from "react-toastify";
import {remmove} from '../features/Postulation/PostulationSlice'

function Job({postulation}) {
  const { annonces } = useSelector((state) => state.annonces);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {


    dispatch(getAnnonceByid(postulation.annonce));
  }, [ navigate, dispatch]);
 const edit=()=>{
     navigate(`/edit/${postulation._id}`)
 }
 const deletea=()=>{
    dispatch(remmove(postulation._id)).unwrap().
    then(data =>toast.success("dleeteed "))
    .catch(err=>toast.error(err))
}
  return(
      <>
        <tr >
                  <td className="text-truncate">{annonces.specialite}</td>
                  <td className="text-truncate">
                {postulation.reponse}
                  </td>
                  <td className="text-truncate">
                   <tr> <td onClick={edit}><FaPen   />  </td>    
                    <td onClick={deletea}><FaTrash/></td>
                    </tr>
                  </td>
                </tr></>
   )
}

export default Job;
