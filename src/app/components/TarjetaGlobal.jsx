// app/components/TarjetaGlobal.js
export default function TarjetaGlobal({ titulo, contenido, color = "#ccc" }) {
  return (
    <div className="tarjeta-global" style={{ borderColor: color }}>
      <h2 className="titulo-global">{titulo}</h2>
      <p className="contenido-global">{contenido}</p>
    </div>
  );
}
