import './../styles.scss';

export default function ConnectOptions(props) {
    const { description } = props;
    const { image } = props;
    const { imageAlt } = props;
    const { url } = props;

    return (
        <div className="Connect-Options rounded-lg h-60 md:h-48 lg:h-64 xl:h-80">
            <a href={url}>
                <img src={image} alt={imageAlt} className="connect-options-img rounded-lg w-full h-full"/>
                <p className="options-description text-gray-100 text-2xl md:text-xl lg:text-2xl xl:text-4xl">{description}</p>
            </a>
        </div>
    );
}
