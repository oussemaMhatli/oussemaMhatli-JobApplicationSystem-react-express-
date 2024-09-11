import React from 'react'
import NavBar from './NavBar'
import { useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect ,useState} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { updateCondidat,reset } from "../features/condidat/condidatSlice";

function Profile() {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )
  const navigate=useNavigate();
  const dispatch = useDispatch();
 
  useEffect(() => {
 
    if (!user) {
      navigate("/login");
    }
  
   
  }, [user,dispatch])
  
  console.log('rany user 7el 3inik',user)
///////////////

const [formData, setFormData] = useState({
  email: user.email,
  name:user.name,
  tel:user.tel,
  adress:user.adresse,
  _id:'',
})

const { email, password,name,tel,adress, _id } = formData


useEffect(() => {
  if (isError) {
    toast.error(message)
  }

  if (isSuccess || user) { 
     //navigate('/Login')
  }

  dispatch(reset())
}, [user, isError, isSuccess, message, navigate, dispatch])

const onChange = (e) => {
  setFormData((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }))
}

const onSubmit = (e) => {
  e.preventDefault()

  const userData = {
    email,
    password,
    name,tel,adress,
    _id:user._id,
  }

  dispatch(updateCondidat(userData)).unwrap().then(data=>{  toast.success('done')}).catch(
      err=>{toast.error('verify')}
  )


}
  return (
      <>
      <NavBar/>
<div>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
  <div className="container">
    <div className="view-account">
      <section className="module">
        <div className="module-inner">
          <div className="side-bar">
            <div className="user-info">
              <img className="img-profile img-circle img-responsive center-block" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt />
              <ul className="meta list list-unstyled">
                <li className="name">{user.name }
                  <label className="label label-info">{user.tel}</label>
                </li>
                <li className="activity">{user.adresse}</li>
              </ul>
            </div>
      
          </div>
          <div className="content-panel">
            <h2 className="title">Profile<span className="pro-label label label-warning">PRO</span></h2>
            <form className="form-horizontal" onSubmit={onSubmit}>
              <fieldset className="fieldset">
                <h3 className="fieldset-title">Personal Info</h3>
             
                <div className="form-group">
                  <label className="col-md-2 col-sm-3 col-xs-12 control-label">Name</label>
                  <div className="col-md-10 col-sm-9 col-xs-12">
                    <input type="text" className="form-control" defaultValue={user.name} onChange={onChange} name="name"/>
                  </div>
                </div>
            
                <div className="form-group">
                  <label className="col-md-2 col-sm-3 col-xs-12 control-label">Adresse</label>
                  <div className="col-md-10 col-sm-9 col-xs-12">
                    <input type="text" className="form-control" defaultValue={user.adresse} onChange={onChange} name="adress" />
                  </div>
                </div>
              </fieldset>
              <fieldset className="fieldset">
                <h3 className="fieldset-title">Contact Info</h3>
                <div className="form-group">
                  <label className="col-md-2  col-sm-3 col-xs-12 control-label">Email</label>
                  <div className="col-md-10 col-sm-9 col-xs-12">
                    <input type="email" className="form-control" defaultValue={user.email} onChange={onChange} name="email" />
                   
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-2  col-sm-3 col-xs-12 control-label">tel</label>
                  <div className="col-md-10 col-sm-9 col-xs-12">
                    <input type="text" className="form-control" defaultValue={user.tel} name="tel" onChange={onChange} />
                  
                  </div>
                </div>
              
              </fieldset>
              <hr />
              <div className="form-group">
                <div className="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
                  <input className="btn btn-primary" type="submit" defaultValue="Update Profile" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>

    </>
  )
}

export default Profile
