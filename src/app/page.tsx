import TarjetaGlobal from "./components/TarjetaGlobal";
import TarjetaModulo from "./components/TarjetaModulo";
import TarjetaDinamica from "./components/TarjetaDinamica";
import TarjetaTailwind from "./components/TarjetaTailwind";

export default function Page() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Demostración de Tarjetas</h1>

      <section>
        <h2>1. Tarjeta con CSS Global</h2>
        <TarjetaGlobal titulo="Global Card" contenido="Ejemplo con estilos globales." color="blue" />
      </section>

      <section>
        <h2>2. Tarjeta con CSS Modules</h2>
        <TarjetaModulo
          nombre="Tarjeta Básica"
          descripcion="Esto es una tarjeta con CSS Modules."
          categoria="General"
          variante="tarjetaPrimaria"
        />
      </section>

      <section>
        <h2>3. Tarjeta Dinámica en Línea</h2>
        <TarjetaDinamica
          titulo="Inline Card"
          contenido="Estilos definidos con props."
          colorFondo="lightyellow"
          colorTexto="black"
          ancho="250px"
          activo={true}
        />
      </section>

      <section>
        <h2>4. Tarjeta con Tailwind CSS</h2>
        <TarjetaTailwind
          titulo="Tailwind Card"
          descripcion="Card moderna usando clases Tailwind."
          imagen="https://via.placeholder.com/150"
          etiqueta="Etiqueta demo"
        />
      </section>
    </main>
  );
}
