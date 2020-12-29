import ConnectOptions from './components/ConnectOptions';
import cool_guitar from './../../../assets/img/cool_guitar.jpg';
import cool_piano from './../../../assets/img/cool_piano.jpg';
import cool_drum from './../../../assets/img/cool_drum.jpg';

export default function Home() {
    return (
        <div className="content">
            <div className="text-center">
                <div className="mt-24 text-6xl font-semibold">Playlist Connect</div>
                <div className="mt-10 mb-14 text-2xl font-light">Collaborate instantly with peers on Apple Music and Spotify</div>
            </div>
            <div className="options-wrapper">
                <ConnectOptions description="Pair both playlists on here" image={cool_guitar} imageAlt="Cool Guitar" url="/on-here"/>
                <ConnectOptions description="Pair via sending email to a friend" image={cool_piano} imageAlt="Cool Piano" url="email"/>
                <ConnectOptions description="Pair via sending text to a friend" image={cool_drum} imageAlt="Cool Drum" url="texting"/>
            </div>
        </div>
    );
}
