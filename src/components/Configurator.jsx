import {useCustomization} from "../contexts/Customization";

const Configurator = () => {
    const {
        material,
        materials,
        setMaterial,
        form,
        setForm,
        cakeColors,
        cakeColor,
        setCakeColor,
        cushionColors,
        cushionColor,
        setCushionColor,
    } = useCustomization();

    return (
        <div className="configurator">
            <div className="configurator__section">
                <div className="configurator__section__title">Chair material</div>
                <div className="configurator__section__values">
                    {materials.map((item) => (
                            <div
                                className={`item ${material === item ? "item--active" : ""}`}
                                onClick={() => setMaterial(item)}
                            >
                                <div className="item__label">{item.replace('_', ' ')}</div>
                            </div>
                        )
                    )}
                </div>
            </div>
            <div className="configurator__section">
                <div className="configurator__section__title">Cake color</div>
                <div className="configurator__section__values">
                    {cakeColors.map((item, index) => (
                        <div
                            key={index}
                            className={`item ${
                                item.color === cakeColor.color ? "item--active" : ""
                            }`}
                            onClick={() => setCakeColor(item)}
                        >
                            <div
                                className="item__dot"
                                style={{backgroundColor: item.color}}
                            />
                            <div className="item__label">{item.name}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="configurator__section">
                <div className="configurator__section__title">Cushion color</div>
                <div className="configurator__section__values">
                    {cushionColors.map((item, index) => (
                        <div
                            key={index}
                            className={`item ${
                                item.color === cushionColor.color ? "item--active" : ""
                            }`}
                            onClick={() => setCushionColor(item)}
                        >
                            <div
                                className="item__dot"
                                style={{backgroundColor: item.color}}
                            />
                            <div className="item__label">{item.name}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="configurator__section">
                <div className="configurator__section__title">Form</div>
                <div className="configurator__section__values">
                    <div
                        className={`item ${form === 1 ? "item--active" : ""}`}
                        onClick={() => setForm(1)}
                    >
                        <div className="item__label">Round</div>
                    </div>
                    <div
                        className={`item ${form === 2 ? "item--active" : ""}`}
                        onClick={() => setForm(2)}
                    >
                        <div className="item__label">Heart</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Configurator;
