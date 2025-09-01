export default function TarjetaDinamica({ titulo, contenido, colorFondo, colorTexto, ancho, activo }) {
  const estilo = {
    backgroundColor: colorFondo,
    color: colorTexto,
    width: ancho,
    padding: "12px",
    margin: "10px",
    borderRadius: "10px",
    border: activo ? "2px solid black" : "1px dashed gray",
    boxShadow: activo ? "0 4px 10px rgba(0,0,0,0.3)" : "none"
  };

  return (
    <div style={estilo}>
      <h3>{titulo}</h3>
      <p>{contenido}</p>
    </div>
  );
}
