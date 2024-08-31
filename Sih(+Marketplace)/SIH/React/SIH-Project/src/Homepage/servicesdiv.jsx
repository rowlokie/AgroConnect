import "./servicesdiv.css";


export default function ServicesDiv({ img, title, info }) {
  return (
    <div id="serviceDiv">
      <div id="serviceImg" style={{ backgroundImage: `url(${img})`}}></div>

      <div id="serviceTitle">
        <h4>{title}</h4>
      </div>
      <div id="serviceInfo">
        <p>{info}</p>
      </div>
    </div>
  );
}
