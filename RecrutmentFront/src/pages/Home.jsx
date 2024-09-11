import React from 'react'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getAll, reset } from '../features/annonce/annonceSlice';
import AnnonceCard from './AnnonceCard';
import NavBar from './NavBar';
 
function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const { annonces, isLoading, isError, message } =
    useSelector((state) => state.annonces);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getAll());

    return () => {
      dispatch(reset());
    };
  }, [
    user,
    navigate,
    dispatch,
  
  ]);
  if(annonces.length>0)
  return (

    <>
    <NavBar/>
<div className="container">
  <div className="row justify-content-center">
    <div className="col-12">
      <div className="section-title text-center mb-4 pb-2">
        <h4 className="title mb-4">Our Features</h4>
        <p className="text-muted para-desc mx-auto mb-0">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.</p>
      </div>
    </div>{/*end col*/}
  </div>{/*end row*/}
  <div className="row">
  {annonces.map((an) => (
              
    <AnnonceCard key={an._id}  annonce={an}/> 
   )) }
    </div>{/*end col*/}
  </div> 

</>

  )
}

export default Home
