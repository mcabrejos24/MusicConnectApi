import { NavLink } from "react-router-dom";

export default function BackButton() {
    return (
        <div className="btn-container">
            <NavLink to={ "/" }>
                <span className="back-btn">BACK</span>
            </NavLink>
        </div>
    )
}
