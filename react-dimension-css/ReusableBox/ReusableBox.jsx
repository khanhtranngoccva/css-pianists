import classes from "../DimensionCSS.module.css";


export default function ReusableBox(props) {
    console.log("Rendered");
    return <div className={`${classes.box} ${props.className || ""}`} style={{
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