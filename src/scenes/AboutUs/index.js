import React from 'react';

export default function AboutUs() {

    return (
        <div className="content">
           <p className = "bg-blue-300"><strong>About Us Page</strong></p>
        <br></br>
            {/* add a general description of the page ig */}
            <p className="text-xl"><center><strong>MEET THE CREATORS</strong></center></p>
            <center><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></center>

            <br></br>
            <br></br>
            
            <div className= "creatorsNamesRow1">
                <div className="manuelsName">
                    <p className="text-xl"> Manuel Cabrejos</p>
                </div>
                <div className="vijaysName"> 
                    <p className="text-xl">Vijay Rachakonda</p>
                </div>
                <div className="gisellesName">
                    <p className="text-xl">Giselle Cabrejos</p>
                </div>
            </div>
            
            {/* this will have pictures of everyones face once it is finalized */}
            <div className="picturesOfCreatorsRow1">
                <div className="pictureOfManuel">
                    <img src="https://i.pinimg.com/474x/0c/90/e1/0c90e1f41f694ae49d427318bf5bacb7.jpg" alt="Manuel" width="200"/>
                </div>
                <div className="pictureOfVijay">
                    <img src="https://i.pinimg.com/originals/28/18/83/281883997896b9c636bc9140e34b8927.jpg" alt="Vijay" width="200"/>
                </div>
                <div className="pictureOfGiselle">
                    <img src="https://i.pinimg.com/originals/04/7c/b6/047cb6a6a78dfeb043f26e72b66a090c.jpg" alt="Giselle" width="200"/>
                    
                </div>

            </div>

            <br></br>

            {/* figure out how to have a paragraph but collapsed so its not just in once line */}
            <div className="descriptions">
                <div className="manuelsDescription">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="vijaysDescription">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="gisellesDescription">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

            </div>

            <div className="socialButtons">
                <div className="manuelsButtons"> 
                        <a className="linkden1" href="https://www.nike.com/"><button type="button" className="bg-red-500 border-2 border-black ">Linkden</button></a>
                        
                        <a className="gitHub1"href="https://www.amazon.com/?ref_=nav_signin"><button type="button" className="bg-red-500 border-2 border-black">Github</button></a>
                </div>
                <div className="vijaysButtons"> 
                        <a className="linkden2" href="https://cynthiagale.com/"><button type="button" className="bg-red-500 border-2 border-black ">Linkden</button></a>
                        
                        <a className="gitHub2" href="https://www.danielwellington.com/us/"><button type="button" className="bg-red-500 border-2 border-black">Github</button></a>
                </div>
                <div className="gisellesButtons"> 
                        <a className="linkden3" href="https://brandpierre.com/"><button type="button" className="bg-red-500 border-2 border-black ">Linkden</button></a>
                        
                        <a className="gitHub3" href="https://www.fender.com/"><button type="button" className="bg-red-500 border-2 border-black">Github</button></a>
                </div>
            </div>
        

            <br></br>
            <br></br>

            <div>
                <center><img src="https://www.newsobserver.com/latest-news/ivt0w7/picture237362514/alternates/FREE_1140/congressional%20map%2011-15-19.JPG" alt="map of NC"  width="600"/></center>
            </div>

            <br></br>
            <br></br>

            <center><p className="text-xl">Thank you for learning more about our wonderful team, if you have any questions, comments, or concerns about the website please visit our <a href="http://localhost:3000/contact-us"><u>contact</u></a> page!</p></center>

            <br></br>

            <center><p className="text-xl">And, if you would like to donate to our team, please check out our <a href="/donate"><u>donate</u></a> page</p></center>

            <br></br>
            <br></br>
        </div>
    );
}
