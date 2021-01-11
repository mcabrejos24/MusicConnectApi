import { useEffect } from 'react';
import '../assets/styles/components/authorizer.scss';
import { setAuthValue } from '../variables/authValues';

export default function Authorizer_Spotify(props) {
    const {
        REACT_APP_CLIENT_ID,
        REACT_APP_AUTHORIZE_URL,
        REACT_APP_REDIRECT_URL
    } = process.env;

    const url = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&response_type=token&redirect_uri=${REACT_APP_REDIRECT_URL}&show_dialog=true`;

    useEffect(() => {
        const { setter } = props;

        window.spotifyCallback = (payload) => {
            window.$popup.close();
            setter(true); // maybe instead of setter, it changing the styles right here, making it hidden or not
            let successSettingPayload = setAuthValue('spotify', payload);
            if(!successSettingPayload) console.error('Failed to set Auth Value');
        }

    },[props]);

    function login() {
        window.$popup = window.open(
            url,
            'Login with Spotify',
            'width=500,height=650,left=-250'
        )
    }
    
    return (
        <div className="text-xl">
            <button variant="info" type="submit" onClick={login} className="authorizer authorizer-spotify">
                Authorize with Spotify
            </button>
        </div>
    );
}
