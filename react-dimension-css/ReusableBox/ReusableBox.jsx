import classes from "../DimensionCSS.module.css";

/**
 *
 * @param props.width
 * @param props.height
 * @param props.length
 * @param props.topBackground
 * @param props.leftBackground
 * @param props.rightBackground
 * @param props.bottomBackground
 * @param props.backBackground
 * @param props.style
 * @return {JSX.Element}
 * @constructor
 */
export default function ReusableBox(props) {
    return <div className={`${classes.box} ${props.className || ""}`} style={{
        ...props.style,
        "--width": props.width,
        "--height": props.height,
        "--length": props.length,
        "--topBackground": props.topBackground,
        "--leftBackground": props.leftBackground,
        "--rightBackground": props.rightBackground,
        "--bottomBackground": props.bottomBackground,
        "--frontBackground": props.frontBackground,
        "--backBackground": props.backBackground,
    }}>
        <div className={`${classes.boxFace} ${classes.boxBack}`}></div>
        <div className={`${classes.boxFace} ${classes.boxFront}`}></div>
        <div className={`${classes.boxFace} ${classes.boxLeft}`}></div>
        <div className={`${classes.boxFace} ${classes.boxRight}`}></div>
        <div className={`${classes.boxFace} ${classes.boxBottom}`}></div>
        <div className={`${classes.boxFace} ${classes.boxTop}`}></div>
    </div>
}