import React from "react";
import './aboutUs.css'

class MarioComponent extends React.Component {
    render() {
        return (
            <div>
            <h1 id="marioName">Mario Robaina</h1>
            <div className="marioContainer">
                <img src="https://marketplace.canva.com/EAE6OH6DF2w/1/0/1600w/canva-moon-astronaut-character-twitch-profile-picture-0kkgyJSodt4.jpg" alt="display image" id="img"/>
                <h1 id="text">

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                </h1>
            </div>
            </div>
        );
    }
}

export default MarioComponent;