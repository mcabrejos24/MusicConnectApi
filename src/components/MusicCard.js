import '../assets/styles/components/music-card.scss';
import CustomInputBar from './CustomInputBar';

export default function MusicCard(props) {
    const { service } = props;
    const { link } = props;
    const { linkName } = props;

    if (!service || !link ||! linkName) {
        console.error('No service, link or linkName was given. Check MusicCard.js');
        return;
    }

    return(
        <div className={`music-wrapper music-wrapper-${service}`}>
            <div className="music-header text-5xl">
                <a href={ link }>{ linkName }</a>
            </div>
            <div className={`authorizer-button-wrapper authorizer-button-wrapper-${service}`}>
                {props.children}
            </div>
            <div className="playlist-checker hidden">
                <p>Enter the playlist you want to link, if empty then we will create a default one for you.</p>
                <CustomInputBar service={service}/>
            </div>
        </div>
    );
}
