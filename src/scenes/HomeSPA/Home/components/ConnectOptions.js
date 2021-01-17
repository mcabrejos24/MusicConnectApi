import { NavLink } from 'react-router-dom';
import '../styles.scss';

export default function ConnectOptions(props) {
    const { description } = props;
    const { image } = props;
    const { imageAlt } = props;
    const { url } = props;

    return (
        <div className="Connect-Options rounded-lg h-60 md:h-48 lg:h-64 xl:h-80">
            <NavLink to={ url }>
                <img src={image} alt={imageAlt} className="connect-options-img rounded-lg w-full h-full"/>
                <p className="options-description text-gray-100 text-xl sm:text-2xl md:text-base lg:text-2xl xl:text-3xl">{description}</p>
            </NavLink>
        </div>
    );
}
