import './styles/back-button.scss';
import { NavLink } from 'react-router-dom';

export default function BackButton() {

    return (
        <div className="btn-container">
            <NavLink to={ "/" }>
                <button className="back-btn">BACK</button>
            </NavLink>
        </div>
    )
}
