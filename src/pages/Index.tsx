import { DanceFitButton } from "@/components/DanceFitButton";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Home, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Hero Section */}
      <header className="bg-purple-gradient text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo with house icon */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="relative">
              <Home className="w-16 h-16 text-white" />
              <Heart className="w-8 h-8 text-accent absolute -top-2 -right-2" />
            </div>
            <div>
              <h1 className="font-bold-caps text-6xl text-shadow leading-tight">
                <span className="text-yellow-highlight">ADELGAZA</span>
                <br />
                <span className="text-white">SIN SALIR</span>
                <br />
                <span className="text-white">DE </span>
                <span className="text-yellow-highlight">CASA</span>
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="bg-secondary text-secondary-foreground py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bold-caps text-2xl mb-8 text-shadow">
            <span className="text-yellow-highlight">DESCUBRE</span> COMO PODER{" "}
            <span className="text-yellow-highlight">ESTAR EN FORMA</span> Y TENER UNA{" "}
            <span className="text-yellow-highlight">VIDA SALUDABLE</span>,<br />
            SIN NECESIDAD DE GASTAR DINERO EN GIMNASIOS, CON{" "}
            <span className="text-yellow-highlight">RESULTADOS</span> A PARTIR DE LA TERCER SEMANA.
          </h2>

          <div className="text-yellow-highlight text-lg font-bold mb-8">
            👇 Mira este video de 1 MINUTO para saber como
          </div>

          {/* Video Section */}
          <div className="max-w-2xl mx-auto mb-12">
            <VideoPlaceholder 
              title="¿CÓMO ADELGAZAR SIN SALIR DE CASA?" 
              duration="01:23"
              className="mb-4"
            />
          </div>
        </div>
      </section>

      {/* Success Message */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-bold-caps text-2xl text-secondary mb-8">
            SI DESEAS LLEGAR A TU <span className="text-yellow-highlight">PESO IDEAL</span>, 
            AUMENTAR <span className="text-yellow-highlight">MASA MUSCULAR</span>, 
            TENER UN <span className="text-yellow-highlight">ABDOMEN PLANO</span> Y 
            SENTIRTE MUCHO MEJOR CONTIGO MISM@, ENTONCES ESTE PROGRAMA DEFINITIVAMENTE ES PARA TI.
          </h3>

          <div className="bg-accent/10 p-4 rounded-lg mb-8">
            <h4 className="text-lg font-bold text-secondary">
              📋 Recomendación: Mirar esta página completa para saber toda la información🤗
            </h4>
          </div>

          {/* Testimonials Collage Placeholder */}
          <div className="mb-12">
            <ImagePlaceholder 
              title="COLLAGE DE TESTIMONIOS - Antes y Después"
              aspectRatio="wide"
              className="mb-4"
            />
          </div>

          <h3 className="font-bold-caps text-2xl text-secondary mb-8">
            CADA DÍA SON MÁS PERSONAS QUE SE UNEN A NUESTRA COMUNIDAD{" "}
            <span className="text-yellow-highlight">«ADELGAZA SIN SALIR DE CASA»</span>{" "}
            Y ESTÁN TOTALMENTE FELICES Y MUY AGRADECIDOS CON LOS RESULTADOS OBTENIDOS CON NUESTRA METODOLOGÍA.
          </h3>
        </div>
      </section>

      {/* Course Formats */}
      <section className="bg-secondary py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <ImagePlaceholder 
              title="CURSO EN VARIOS FORMATOS - Desktop, Mobile, Tablet"
              aspectRatio="wide"
              className="mb-4"
            />
          </div>

          <h3 className="font-bold-caps text-2xl text-secondary-foreground mb-12">
            TENDRÁS <span className="text-yellow-highlight">CLASES DE LUNES A VIERNES</span>{" "}
            POR TODO EL AÑO Y EL <span className="text-yellow-highlight">HORARIO LO PONES TÚ</span>
          </h3>

          {/* Exercise Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <ImagePlaceholder 
                title="ABDOMEN - Ejercicios para abdomen plano"
                aspectRatio="square"
                className="mb-4"
              />
              <h4 className="font-bold-caps text-yellow-highlight text-lg">ABDOMEN</h4>
            </div>
            <div className="text-center">
              <ImagePlaceholder 
                title="GLÚTEOS - Ejercicios para glúteos firmes"
                aspectRatio="square"
                className="mb-4"
              />
              <h4 className="font-bold-caps text-yellow-highlight text-lg">GLÚTEOS</h4>
            </div>
            <div className="text-center">
              <ImagePlaceholder 
                title="BRAZOS - Ejercicios para brazos tonificados"
                aspectRatio="square"
                className="mb-4"
              />
              <h4 className="font-bold-caps text-yellow-highlight text-lg">BRAZOS</h4>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-gradient py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bold-caps text-4xl text-white text-shadow mb-8">
            ¡<span className="text-yellow-highlight">ÚNETE AHORA</span> A NUESTRA COMUNIDAD!
          </h2>
          
          <p className="text-xl text-white mb-8 text-shadow">
            Transforma tu cuerpo desde la comodidad de tu hogar
          </p>

          <DanceFitButton variant="accent" size="xl" className="mb-4">
            EMPEZAR AHORA
          </DanceFitButton>

          <div className="text-yellow-highlight font-bold text-lg">
            ⭐ Resultados garantizados desde la 3ra semana ⭐
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;