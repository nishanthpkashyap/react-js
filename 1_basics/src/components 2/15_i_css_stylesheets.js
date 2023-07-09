import "./15_i_stylesheet.css"

export function Stylesheets({primary})
{
    const className = primary ? "primary" : ""
    return (
        <div>
            <h1 className={`${className} font_xl`}>Stylesheets</h1>
        </div>
    )
}