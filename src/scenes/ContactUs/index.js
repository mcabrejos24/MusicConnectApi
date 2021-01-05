import React from 'react';

export default function ContactUs() {
    function submit(){
        console.log("yeet");
    };
    return (
        
        <div className="content">
            <p className="">If you have any questions or concerns, please contact us using the comment box below:</p>
            <br></br>
        <div className="space-y-1.5 flex">

            <form className="object-center">
                <label for="name">Name: </label>
                <br></br>
                    <input 
                        type="text" 
                        id="name" 
                        name="name"
                        className="border-2 border-indigo-600"/>
                <br></br>
                <label for="email" >Email: </label>
                <br></br>
                <input 
                    type="text" 
                    id="email" 
                    name="email"
                    className="border-2 border-indigo-600"/>
                <br></br>
                <label for="description">Description: </label>
                <br></br>
                <textarea
                    type="text" 
                    id="description" 
                    name="description"
                    className="border-2 border-indigo-600 h-56 w-52 break-words"/>
                <br></br>
                <br></br>
                <br></br>
                <button
                    type="button" 
                    value="Submit"
                    onClick={submit}
                    className="border-2 border-black h-10 w-20 bg-blue-600 hover:bg-blue-400 text-white"
                    >Submit</button>
            </form>
            </div>
        </div>
    );

}
