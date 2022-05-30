import React from 'react'
import './Apple.css'
import SearchIcon from '@mui/icons-material/Search';
import LockIcon from '@mui/icons-material/Lock';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Gradient } from '@mui/icons-material';
import { fontSize } from '@mui/system';
// import MdKeyboardArrowRightIcon from '@mui/icons-material/MdKeyboardArrowRight';
function Apple() {
  return (
    <div>
      <div className='nav-main'>

        <nav>
        <input id="nav-toggle" type="checkbox" />
          {/* <input id="nav-toggle" type="checkbox" /> */}

         

          <ul class="links">
          <i style={{color:"white"}} id="cart-icon" class="fa fa-apple"></i>
            <li><a href="#home">Store</a></li>
            <li><a href="#about">Mac</a></li>
            <li><a href="#work">iPad</a></li>
            <li><a href="#projects">iPhone</a></li>
            <li><a href="#projects">Watch</a></li>
            <li><a href="#projects">AirPods</a></li>
            <li><a href="#projects">TV & Home</a></li>
            <li><a href="#projects">Only on Apple</a></li>
            <li><a href="#projects">Accessories</a></li>
            <li><a href="#projects">Support</a></li>
            <li><a href="search"><SearchIcon/> </a></li>
            <li><a href="lock"><LockIcon/> </a></li>
            
          </ul>
          <label for="nav-toggle" class="icon-burger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </label>
        </nav>
        <p className='apple-mobile' style={{paddingTop:"50px",textAlign:"center"}}><b style={{fontSize:"30px"}}>unicef</b> <img style={{width:"20px",marginRight:"5px"}} src="images.png"/>  <span style={{color:"blue"}}>Donate to support families affected by the war in Ukraine</span></p>

      </div>
    
        
            <div className="iphone">
          
                <h1>iPhone 13 Pro</h1>
                  <h2>Oh.So.Pro</h2>
                  <h3>Learn more <ChevronRightIcon/> Buy Now <ChevronRightIcon/></h3>
              
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWjv4pFA-Yb0I5DNZx_qJXwGL4bsGCjOPlsg&usqp=CAU"
                  alt="Feature image"/>
            </div>
    
            <div className="phone">
          
          <h1>The New</h1>
            <h2>iPhone SE</h2>
            <h3>Love the power.Love the price</h3>
            <h4>Learn more <ChevronRightIcon/> Buy Now <ChevronRightIcon/></h4>
            <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvUO6hmIQOdM6KcSqp8zV3NboEhwHs306gkw&usqp=CAU"
          alt="Feature image"/>


      </div>


          <div className="row">
            <div className="left">
              <img src="img.jpg"/>
              <h1> WWDC22 </h1>
              <p>The Worldwide Developers Conference<br></br>
            is coming.Join us online June 6-10.<br></br>
            <span style={{color:"blue"}}>Learn more <i style={{color:"white"}}class="bi bi-arrow-up-right"></i></span></p>
            </div>
            <div className="right">
            <h1>Now through May 31</h1> 
            <p>Enjoy great savings <br></br>
               and extra credit.1</p>
            <h3>Benifit from incredible savings and <br></br>
               more credit with Apple Trade In.</h3>
            <h4>Learn more <ChevronRightIcon/></h4>
            <img src="image.jpg"/>
           
          
            </div>
          </div>

          <div className="row1">
            <div className="left1">
        
               <h1> Threads of </h1>
               <h2 style={{color:"pink" ,fontSize:"40px"}}><i>Pride.</i></h2>
              <h5 style={{color:"blue"}}>Shop new pride edition bands<ChevronRightIcon/> </h5>
              <img src="Apple-Watch-Pride-faces-2022.png"/>
            </div>
            <div className="right1">
           
            <h1>WATCH</h1> 
            <h3>SERIES 7</h3>
            <p>It's our largest display yet.<br></br>
            <h4>Learn more <ChevronRightIcon/> Buy Now <ChevronRightIcon/></h4>
            </p>
            <img src="im-415755.jpg"/>
            </div>
          </div>


          <div className="row3">
            <div className="left3">
            <h1> Privacy.That's iPhone </h1>
              <h5>Learn more</h5>
              {/* <img src="apple-watch-s7-og-202203.jpg"/> */}
           
            </div>
            <div className="right3">
            <h1>App Store</h1> 
            <h3>SERIES 7</h3>
            <p>Be any legend anywhere with <br></br>
            Apex Legends Mobile</p>
            <h4>Play now<ChevronRightIcon/> </h4>
            <img src="apple_card-620x400.jpg"/>
        
            </div>
          </div>



          <div className="footer">
            <p>
            1. Get extra trade-in credit when you trade in an eligible iPhone, iPad, Mac, or Apple Watch and purchase a new Apple device through May 31, 2022. The extra trade-in credit
            <br></br> 
            may range from $10 to $50 for iPhone, $10 to $50 for iPad, $10 for Mac, and $20 to $40 for Apple Watch. Additional terms from Apple or Apple's trade-in partners may
            <br></br> 
            apply.<br></br>
            <br></br>

Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years
<br></br> old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward a qualifying new device purchase, or added to an Apple Gift Card.
<br></br>
 Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new<br></br>
  device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may <br></br>
  vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any <br></br>
  trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may <br></br>
  apply.<br></br><br></br>
    New subscribers only. $4.99/month after free trial. Plan automatically renews until cancelled. Terms apply.<br></br><br></br>
    Includes optional in-game purchases (includes random items). Apex Legends © 2022 Electronic Arts Inc. Apex Legends is a trademark of Electronic Arts Inc.<br></br>

                </p>
                <br></br>
                <hr></hr>
                <br></br>
                <div class="footer-content">
  <div class="footer-menu">
    <div class="footer-col">
      <div class="item">
        <input className='check' type="checkbox" id="products"/>
        <div class="col-section">
          <label for="products">
          <h3>Shop and learn</h3>  
        </label>
          <ul class="product-list">
          <li><a href="#">Store</a></li>
            <li><a href="#">Mac</a></li>
            <li><a href="#">iPad</a></li>
            <li><a href="#">iPhone</a></li>
            <li><a href="#">Watch</a></li>
            <li><a href="#">Airpods</a></li>
            <li><a href="#">TV & Home</a></li>
            <li><a href="#">AirTag</a></li>
            <li><a href="#">Accessories</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-col">
      <div class="item">
        <input className='check' type="checkbox" id="store"/>
        <div class="col-section">
          <label for="store">
          <h3>Apple Store</h3>  
        </label>
          <ul class="product-list">
            <li><a href="#">Wants to Buy</a></li>
            <li><a href="#">Apple Trade In</a></li>
            <li><a href="#">Recycling Programme</a></li>
            <li><a href="#">Order Status</a></li>
            <li><a href="#">Shopping Help</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-col">
      <div class="item">
        <input className='check' type="checkbox" id="education"/>
        <div class="col-section">
          <label for="education">
          <h3>For Education</h3>  
        </label>
          <ul class="product-list">
            <li><a href="#">Apple and Education</a></li>
            <li><a href="#">Shop for College</a></li>
          </ul>
        </div>
      </div>
      <div class="item item-padding-top">
        <input className='check' type="checkbox" id="business"/>
        <div class="col-section">
          <label for="business">
          <h3>For Business</h3>  
        </label>
          <ul class="product-list">
            <li><a href="#">Apple and Business</a></li>
            <li><a href="#">Shop for Business</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-col">
      <div class="item">
        <input className='check' type="checkbox" id="acccount"/>
        <div class="col-section">
          <label for="acccount">
          <h3>Account</h3>  
        </label>
          <ul class="product-list">
            <li><a href="#">Manage Your Apple ID</a></li>
            <li><a href="#">Apple Store Account</a></li>
            <li><a href="#">iCloud.com</a></li>
          </ul>
        </div>
      </div>
      <div class="item item-padding-top">
        <input className='check' type="checkbox" id="values"/>
        <div class="col-section">
          <label for="values">
          <h3>Apple Values</h3>  
        </label>
          <ul class="product-list">
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Education</a></li>
            <li><a href="#">Environment</a></li>
            <li><a href="#">Inclusion and Diversity</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Supplier Responsibility</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-col">
      <div class="item">
        <input className='check' type="checkbox" id="about"/>
        <div class="col-section">
          <label for="about">
          <h3>About Apple</h3>  
        </label>
          <ul class="product-list">
            <li><a href="#">Newsroom</a></li>
            <li><a href="#">Apple Leadership</a></li>
            <li><a href="#">Job Opportunities</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Contact Apple</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <section class="footer-base">
    <div class="footer-more-ways" x-ms-format-detection="none">
		More ways to shop: Visit an <a href="/retail/">Apple Store</a>, <span class="nowrap">call 1-800-MY-APPLE, or <a href="#">find a reseller</a></span>.
	</div>
    <div class="footer-legal">
		  <div class="footer-legal-copyright">Copyright © 2018 Apple Inc. All rights reserved.</div>
		  <div class="footer-legal-links">
			  <a href="#">Privacy Policy</a>
			  <a href="#">Terms of Use</a>
			  <a href="#">Sales and Refunds</a>
			  <a href="#">Legal</a>
			  <a href="#">Site Map</a>
		  </div>
	  </div>
  </section>
    </div>

    <label htmlFor="nav-toggle" class="icon-burger">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </label>
          {/* <div className="data">
            <div className="shop">
              <h3>Shop and Learn</h3>
            <h5>Store</h5>
            <h5>Mac</h5>
            <h5>ipad</h5>
            <h5>iphone</h5>
            <h5>Watch</h5>
            <h5>Airpods</h5>
            <h5>Tv & Home</h5>
            <h5>ipod Touch</h5>
            <h5>airtag</h5>
            <h5>Accessories</h5>
            <h5>Gift cards</h5>
            </div>

            <div className="services">
              <h3>Services</h3>
            <h5>Apple Music</h5>
            <h5>Apple TV+</h5>
            <h5>Apple Fitness+</h5>
            <h5>Apple News+</h5>
            <h5>Apple Arcade</h5>
            <h5>icloud</h5>
            <h5>Apple One</h5>
            <h5>Apple card</h5>
            <h5>Apple Books</h5>
            <h5>Apple Podcasts</h5>
            <h5>App Store</h5>
                 <br></br>
            <h3>Account</h3>
            <h5>Manage your Apple ID</h5>
            <h5>Apple Store Account</h5>
            <h5>icloud.com</h5>
            </div>

            <div className="applestore">
              <h3>Apple Store</h3>
            <h5>Find a store</h5>
            <h5>Genius Bar</h5>
            <h5>Today at Apple</h5>
            <h5>Apple Camp</h5>
            <h5>Apple Store App</h5>
            <h5>Refurbished and clearance</h5>
            <h5>Financing</h5>
            <h5>Apple Trade In</h5>
            <h5>Order status</h5>
            <h5>Shopping Help</h5>
            </div>

            <div className="business">
              <h3>For Business</h3>
            <h5>Apple and Business</h5>
            <h5>Shop for Business</h5>
            <br></br>
               <h3>For Education</h3>
            <h5>Apple and Education</h5>
            <h5>Shop for K-12</h5>
            <h5>Shop for College</h5>
            <br></br>
            <h3>For Healthcare</h3>
            <h5>Apple in Healthcare</h5>
            <h5>Health on apple Watch</h5>
            <h5>Health Record on iPhone</h5>
            <br></br>
            <h3>For Government</h3>
            <h5>Shop for Government</h5>
            <h5>Shop for Veterans and Military</h5>
            </div>

            <div className="values">
              <h3>Apple Values</h3>
            <h5>Accessibility</h5>
            <h5>Education</h5>
            <h5>Environment</h5>
            <h5>Inclusion and Diversity</h5>
            <h5>Privacy</h5>
            <h5>Racial Equity and Justice</h5>
            <h5>Supplier Responsibility</h5>
            <br></br>
            <h3>About Apple</h3>
            <h5>Newsroom</h5>
            <h5>Apple Leadership</h5>
            <h5>Career Oppurtunities</h5>
            <h5>Investors</h5>
            <h5>Ethics and Complaince</h5>
            <h5>Events</h5>
            <h5>Contact Apple</h5>
            </div>
           
          </div> */}

</div>


      </div>

    
  

  )
}

export default Apple