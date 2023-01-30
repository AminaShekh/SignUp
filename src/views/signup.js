import React from 'react'

import { Helmet } from 'react-helmet'

import './signup.css'

const Signup = (props) => {
  return (
    <div className="signup-container">
      <Helmet>
        <title>SignUp</title>
      </Helmet>
      <div className="signup-signup">
        <img
          alt="Rectangle1120"
          src="/playground_assets/rectangle1120-60xw-800w.png"
          className="signup-rectangle1"
        />
        <span className="signup-text">
          <span className="signup-text01">
            Already have an account?
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="signup-text02">Log in</span>
        </span>
        <img
          alt="Line3340"
          src="/playground_assets/line3340-tt4.svg"
          loading="eager"
          className="signup-line3"
        />
        <span className="signup-text03">
          <span>Password</span>
        </span>
        <img
          alt="logo1221"
          src="/playground_assets/logo1221-52ei-200h.png"
          className="signup-logo1"
        />
        <span className="signup-text05">
          <span>Find 3D Object, Mockup and Illustration here</span>
        </span>
        <div className="signup-frame03">
          <div className="signup-shadow"></div>
          <img
            alt="Abstraction112"
            src="/playground_assets/abstraction112-1qw3-500w.png"
            className="signup-abstraction"
          />
        </div>
        <img
          alt="SVG211614downbarrowicon1323"
          src="/playground_assets/svg211614downbarrowicon1323-8e4.svg"
          className="signup-s-v-g211614downbarrowicon1"
        />
        <span className="signup-text07">
          <span>English(UK)</span>
        </span>
        <span className="signup-text09">
          <span>Create Account</span>
        </span>
        <img
          alt="Rectangle2327"
          src="/playground_assets/rectangle2327-apft-200h.png"
          className="signup-rectangle2"
        />
        <img
          alt="Rectangle4344"
          src="/playground_assets/rectangle4344-g4hb-200h.png"
          className="signup-rectangle4"
        />
        <img
          alt="IMAGE2993685brandbrandsgooglelogologosicon1328"
          src="/playground_assets/image2993685brandbrandsgooglelogologosicon1328-0oq-200h.png"
          className="signup-i-m-a-g-e2993685brandbrandsgooglelogologosicon1"
        />
        <span className="signup-text11">
          <span>Sign up with Google</span>
        </span>
        <img
          alt="Rectangle3331"
          src="/playground_assets/rectangle3331-wusp-200h.png"
          className="signup-rectangle3"
        />
        <span className="signup-text13">
          <span>Sign up with Facebook</span>
        </span>
        <img
          alt="IMAGE834722facebookicon1334"
          src="/playground_assets/image834722facebookicon1334-d00n-200h.png"
          className="signup-i-m-a-g-e834722facebookicon1"
        />
        <span className="signup-text15">-OR-</span>
        <img
          alt="Line1336"
          src="/playground_assets/line1336-c9pd.svg"
          loading="eager"
          className="signup-line1"
        />
        <span className="signup-text16">
          <span>Email Address</span>
        </span>
        <img
          alt="Line2338"
          src="/playground_assets/line2338-uwe65.svg"
          loading="eager"
          className="signup-line2"
        />
        <span className="signup-text18">
          <span>Full Name</span>
        </span>
        <span className="signup-text20">
          <span>Create Account</span>
        </span>
      </div>
    </div>
  )
}

export default Signup
