import React, { useEffect } from 'react'
import '../styles/landing.css'
import {PiStudent} from 'react-icons/pi'
import {FaHandHoldingWater} from 'react-icons/fa'
import {MdHealthAndSafety} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'

const Landing = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    if (localStorage.getItem("usertype") === 'freelancer'){
      navigate("/freelancer")
    } else if (localStorage.getItem("usertype") === 'client'){
      navigate("/client")
    } else if (localStorage.getItem("usertype") === 'admin'){
      navigate("/admin")
    }
  })


  return (
    <div className="landing-page">

        <div className="landing-hero">

            <div className='landing-nav'>
              <h3>IKAC Works</h3>
              <button onClick={()=> navigate('/authenticate')} >Sign In</button>
            </div>

            <div className="landing-hero-text">

                <h1>"Why Choose Us? Empowering Freelancers to Land the Jobs They Deserve with IKAC Works"</h1>
                <p>Unlock a world of opportunity with IKAC Works, where your talent meets the perfect projects. Here, you’ll connect with clients who value expertise, tackle inspiring challenges, and build a legacy that reflects your skills and passion. From expanding your portfolio to accessing global projects, IKAC Works empowers you to work freely and create your path to success. Dive into a marketplace where innovation meets opportunity, and let your freelancing journey truly begin. </p>
                <button onClick={()=> navigate('/authenticate')}>Join Now</button>
            </div>

        </div>

    </div>
  )
}

export default Landing