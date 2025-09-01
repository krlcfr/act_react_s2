export default function TarjetaTailwind({ titulo, descripcion, imagen, etiqueta }) {
  return (
    <div className="flex flex-col p-4 m-2 w-64 bg-white text-gray-800 border border-gray-200 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300">
      {imagen && <img src={imagen} alt={titulo} className="rounded-lg mb-3" />}
      <h3 className="text-lg font-bold mb-2">{titulo}</h3>
      <p className="text-sm text-gray-600 mb-2">{descripcion}</p>
      <span className="text-xs text-gray-500">{etiqueta}</span>
    </div>
  );
}
