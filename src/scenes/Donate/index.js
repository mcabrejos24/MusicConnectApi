import React from 'react';
import './styles.scss';

export default function Donate() {

    return (
        <div className="content">
            <p className="bg-purple-600"> <strong>Donate Page</strong></p>
            <br></br>
            <br></br>
            <p className="text-xl">Thank you for using our web app. If you liked our service and would like to support us  by donating, our Venmo and cashapps are listed below!</p>
            <br></br>
            <div className="pictures">
                <div className="picture1">
                    <img src="data:image/png;base64,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" width="200" height="200" alt="Venmo QR" />
                </div>
                <div className="picture2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Square_Cash_app_logo.svg/1200px-Square_Cash_app_logo.svg.png" width="200" height="200" alt="Cashapp QR"/>
                    <br></br>
                </div>
            </div>
            
            <div className="usernames">
                <div className="username1">
                    <p className="text-xl">Venmo:</p>
                </div>
                <div className="cashAppUsername"> 
                    <p className="text-xl">CashApp:</p>
                </div>
            </div>
            <br></br>
            
            <p className="text-xl"><strong className="italic">OR</strong> if you would like to suppport us by buying us a coffee, then click here <a href="https://chamberlaincoffee.com/"><button type="button" className="bg-yellow-700 border-2 border-yellow-900">Coffee!!</button></a></p> 
        </div>
        
    );
}
