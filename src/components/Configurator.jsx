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
        creamColors,
        creamColor,
        setCreamColor,
        setCandle,
        candle,
        setBalls,
        balls,
        setChocolate,
        chocolate,
        setNuts,
        nuts
    } = useCustomization();

    return (
        <div className="configurator">
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
            <div className="configurator__section">
                <div className="configurator__section__title">Cake material</div>
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
            <div className="configurator__section" hidden={form === 1}>
                <div className="configurator__section__title">Cream color</div>
                <div className="configurator__section__values">
                    {creamColors.map((item, index) => (
                        <div
                            key={index}
                            className={`item ${
                                item.color === creamColor.color ? "item--active" : ""
                            }`}
                            onClick={() => setCreamColor(item)}
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
                <div className="configurator__section__title">Decorations</div>
                <div className="configurator__section__values">
                    <div className="item">
                    <label className="checkBox">
                    <input id="ch_nuts" type="checkbox"
                           onChange={(event) => setNuts(event.target['checked'])}/>
                        <div className="transition"></div>
                    </label>
                        <div className="item__label">Nuts</div>
                    </div>
                    <div className="item">
                        <label className="checkBox">
                            <input id="ch_chocolate" type="checkbox"
                                   onChange={(event) => setChocolate(event.target['checked'])}/>
                            <div className="transition"></div>
                        </label>
                        <div className="item__label">Chocolate</div>
                    </div>
                    <div className="item">
                        <label className="checkBox">
                            <input id="ch_balls" type="checkbox"
                                   onChange={(event) => setBalls(event.target['checked'])}/>
                            <div className="transition"></div>
                        </label>
                        <div className="item__label">Balls</div>
                    </div>
                    <div className="item">
                        <label className="checkBox">
                            <input id="ch_candle" type="checkbox"
                                   onChange={(event) => setCandle(event.target['checked'])}/>
                            <div className="transition"></div>
                        </label>
                        <div className="item__label">Candle</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Configurator;
