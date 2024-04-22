// import { FaGithub } from "react-icons/fa"

// function Navbar() {
//     return (
//         <div className="navbar">
//             <FaGithub className="github-icon"/>
//             <h1 className="title-header">Sixtusdev</h1>

//             <div className="InputContainer">
//                 <input type="text" name="text" className="input" id="input" placeholder="Search">
    
//                 <label for="input" className="labelforsearch">
//                   <svg viewBox="0 0 512 512" className="searchIcon"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
//                 </label>
//                 <div class="border"></div>

//                 <button className="micButton"><svg viewBox="0 0 384 512" className="micIcon"><path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"></path></svg>
//                 </button>

//             </div>
//         </div>
//     )

// }

// export default Navbar

import { FaGithub } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import ProfileImg from '../images/profile.png';

function Navbar() {
  return (
    <div className="nav-wrapper">
        <div className="navbar">
            <div className="nav-items">
                <FaBars className="menu-icon" />
                <FaGithub className="github-icon" />
                <h1 className="title-header">Sixtusdev</h1>
            </div>
           
            <div className="right-side-items">
                <div className="InputContainer">
                    {/* Updated input tag */}
                    <input
                    type="text"
                    name="text"
                    className="input"
                    id="input"
                    placeholder="Search"
                    />

                    {/* Updated label tag with htmlFor */}
                    <label htmlFor="input" className="labelforsearch">
                    <svg viewBox="0 0 512 512" className="searchIcon">
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                    </svg>
                    </label>

                    {/* Using className instead of class */}
                    <div className="border"></div>

                    <button className="micButton">
                    <svg viewBox="0 0 384 512" className="micIcon">
                        <path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"></path>
                    </svg>
                    </button>
                </div>
                <div className="side-items">
                   <button>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg> Create
                        </span>
                    </button>
                    <img className="profile-img" src={ProfileImg} alt="Profile Image" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;




