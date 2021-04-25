import React, { Component } from 'react'
import './Footer.css';
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineGithub} from "react-icons/ai";

export default class Footer extends Component {
    render() {
        return (
            <div className='icons'>
               <a href="https://www.linkedin.com/in/benjamin-greutman-phr-7a7b93ab/">
 <AiFillLinkedin> </AiFillLinkedin></a>

 <a href="https://github.com/Bgreuty">

                <AiOutlineGithub> </AiOutlineGithub></a>
            </div>
        )
    }
}
