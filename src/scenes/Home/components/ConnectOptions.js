import './..//styles.scss';

export default function ConnectOptions(props) {
    const { description } = props;
    const { image } = props;
    const { imageAlt } = props;
    const { url } = props;

    return (
        <div className="Connect-Options text-gray-100 rounded-lg">
            <a href={url}>
                <img src={image} alt={imageAlt} className="connect-options-img rounded-lg"/>
                <p className="description">{description}</p>
            </a>
        </div>
    );
}
