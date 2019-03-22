import React from 'react'
import PropTypes from 'prop-types'

import pic02 from '../images/pic02.jpg'
import Headshot from '../images/Headshot.jpg'
import GardenSpaceWalkThrough4K from '../images/GardenSpaceWalkThrough4K.mp4'
// import GSShopDashboard from '../images/GSShopDashboard.png'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <p>After some time of indecision about what to do with my career path, I stumbled upon the tech industry and inevitably fell into the rabbit hole of programming. I decided to invest in my future by attending DevMountain where I've learned the foundations of web development and how to approach future learning in the field. </p>
          <p>Having studied psychology for the past few years, I'm well-versed in human relations and emotional intelligence. I love group dynamics and am a great addition to any team! My hobbies outside the office include dance, park dates with my pup, and eating.</p>
          <span className="image main"><img src={Headshot} alt=""/></span>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Skills</h2>
          {/* <span className="image main"><img src={pic02} alt="" /></span> */}
          <p style={{letterSpacing: '2px', textAlign: 'center', fontSize: '22px'}} className='skillset'>REACT.JS&ensp;|&ensp;NODE.JS&ensp;|&ensp;POSTGRESQL&ensp;|&ensp;CSS<br/>JAVASCRIPT&ensp;|&ensp;HTML&ensp;|&ensp;REDUX&ensp;|&ensp;SASS&ensp;|&ensp;GIT</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Projects</h2>
          <span className="image main">
            {/* <img src={GSShopDashboard} alt="" /> */}
            <video width="100%" controls>
              <source src={GardenSpaceWalkThrough4K} type='video/mp4'/>
            </video>
          </span>
          <p>
            <i><p style={{fontSize: '28px'}}>GardenSpace:</p></i>
            <p style={{fontSize: '14px'}}>React.js | Node.js | PostgreSQL | Bootstrap | Redux | HTML5 | CSS3 | Axios | Express | Bcryptjs | Stripe</p>
            A personally developed eCommerce web application where users can view categories, products, and interact with a shopping cart to purchase products. Media queries are used to optimize the mobile experience for a user. Authentication is included utilizing bcrypt for information security.
          </p>
          <p style={{fontSize: '16px'}}>Live site:&emsp;<i><a href='https://gardenspace.xyz/#/shop/category' target="_blank" rel="noopener noreferrer">gardenspace.xyz</a></i><br/>GitHub Repo:&emsp;<i><a href='https://github.com/vspits/personal-project' target='_blank' rel="noopener noreferrer">https://github.com/vspits/personal-project</a></i></p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <ul className="icons">
            <li><a href="https://www.linkedin.com/in/vivianspits/" className="icon fa-linkedin" target="_blank" rel="noopener noreferrer"><span className="label">LinkedIn</span></a></li>
            <span><a href="https://www.linkedin.com/in/vivianspits/" target="_blank" rel="noopener noreferrer">linkedin.com/vivianspits</a></span>
            <br/>
            <br/>
            {/* <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li> */}
            <li><a href="https://github.com/vspits" className="icon fa-github" target="_blank" rel="noopener noreferrer"><span className="label">GitHub</span></a></li>
            <span><a href="https://github.com/vspits" target="_blank" rel="noopener noreferrer">github.com/vspits</a></span>
            <br/>
            <br/>
            <li><a href="mailto:spits.vivian@gmail.com?Subject=Portfolio%20Inquiry" className='icon fa-envelope' target='_blank' rel='noopener noreferrer'><span className='label'>Email</span></a></li>
            <span><a ref="mailto:spits.vivian@gmail.com?Subject=Portfolio%20Inquiry" target='_blank' rel='noopener noreferrer'>spits.vivian@gmail.com</a></span>
          </ul>
          {/* <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form> */}
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main