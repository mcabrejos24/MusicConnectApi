import ConnectOptions from '../../../components/ConnectOptions';
import pair_on_laptop from './../../../assets/img/pair_on_laptop.png';
import pair_via_phone from './../../../assets/img/pair_via_phone.png';
import pair_with_id from './../../../assets/img/pair_with_id.png';

export default function Home() {
    return (
        <div className="content">
            <div className="text-center">
                <div className="mt-24 text-6xl font-semibold">Playlist Pair</div>
                <div className="mt-10 mb-14 text-2xl font-light">Collaborate instantly with peers on Apple Music and Spotify</div>
            </div>

            <div className="options-wrapper">
                <ConnectOptions description="Pair both playlists here" image={pair_on_laptop} imageAlt="Cool Guitar" url="/on-here"/>
                <ConnectOptions description="Pair playlists on your phone" image={pair_via_phone} imageAlt="Cool Piano" url="email"/>
                <ConnectOptions description="Have a syncID already?" image={pair_with_id} imageAlt="Cool Drum" url="texting"/>
            </div>

            <div className="how-it-works">
                <h1 className="how-it-works-title">How it works</h1>

                <div className="point problem">
                    <h2 className="point-title">What is Playlist Pair?</h2>
                    <div className="point-description">
                        <p>We noticed a problem. A dire one indeed. Not everyone has the same music service! So what does that mean?
                            <br/><br/>
                            That means if you have a friend whom you want to share a music playlist with, such as a "gym playlist" or a "party playlist", but they have a different service than you do, then you simply cannot.
                            <br/><br/>
                            Okay then how do we fix this problem?
                            <br/><br/>
                            That's where we come in! How we solve this problem is that we create a service that allows you to sync your playlists cross platform.
                            <br/><br/> 
                            Welcome <u>Playlist Pair</u>.
                            <br/><br/>
                        </p>
                    </div>
                </div>

                <div className="point need">
                    <h2 className="point-title">How we sync.</h2>
                    <div className="point-description">
                        <p>We ask you to fill an application and then an AI does it all for you.
                            <br /><br />
                            Nah jk.
                            <br /><br />
                            We simply ask you and the peer whom you want to pair your playlist with to authorize your music account and then we ask 
                            you to provide us with the name of the playlist that you would like to sync.
                            <br /><br />
                            Once you and you peer have each authorized and chosen a playlist to share, all you have to do is click the sync/submit button and you are good to go.
                            <br /><br />
                            That's it you ask?
                            <br /><br />
                            Yup! That's all you need to do! You and your peer's playlists will now be syncing at all times.
                            <br /><br />
                            Above you can click on "Pair both playlists here" to go ahead and sync.
                        </p>
                    </div>
                </div>

                <div className="point anotheruse">
                    <h2 className="point-title">Another use.</h2>
                    <div className="point-description">
                        <p>Another optional use for this site is to simply port over your Spotify playlists to Apple.
                            <br /><br />
                            Or vice versa.
                            <br /><br />
                            You can individually enter each playlist name and press the sync button.
                            <br /><br />
                            And then just keep on entering all your playlists until you're done.
                            <br /><br />
                            Happy syncing!
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
