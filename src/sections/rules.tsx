import { useState } from "react";
import { SectionTitle } from "../componets/title.tsx";

type Rule = {
  number: string;
  title: string;
  content: React.ReactNode;
};

const rules: Rule[] = [
  {
    number: "01",
    title: "ORGANIZACIÓN",
    content: (
      <p>
        El concurso es organizado por <strong>Grandes Oportunidades</strong> con
        motivo de la celebración de su aniversario. La participación es
        completamente gratuita y no requiere ningún pago adicional.
      </p>
    ),
  },

  {
    number: "02",
    title: "DOS FORMAS DE PARTICIPAR",
    content: (
      <div className="space-y-5">
        <div>
          <h4
            className="font-black text-sm tracking-wide mb-2"
            style={{ color: "#D4A72C" }}
          >
            A. PARTICIPACIÓN EN REDES SOCIALES
          </h4>

          <p>
            Podrás participar a través de las publicaciones oficiales del
            concurso en <a
              href="https://www.facebook.com/p/Grandes-Oportunidades-Orihuela-100044479254829/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition-colors hover:opacity-70"
              style={{ color: "#D90416" }}
            >
              Facebook
            </a> e <a
              href="https://www.instagram.com/go_orihuela?igshid=MzRlODBiNWFlZA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition-colors hover:opacity-70"
              style={{ color: "#D90416" }}
            >
              Instagram
            </a>. Para que una participación sea
            válida, deberá cumplir las instrucciones indicadas en la
            publicación correspondiente, como seguir nuestra cuenta, indicar
            "Me gusta", comentar o etiquetar a otras personas.
          </p>

          <p className="mt-2">
            Los <strong>25 ganadores de esta modalidad</strong> serán
            seleccionados mediante una herramienta de selección aleatoria entre
            todas las participaciones que cumplan las condiciones establecidas.
          </p>
        </div>

        <div
          className="pt-5"
          style={{ borderTop: "1px solid var(--border-subtle)" }}
        >
          <h4
            className="font-black text-sm tracking-wide mb-2"
            style={{ color: "#D4A72C" }}
          >
            B. PARTICIPACIÓN EN TIENDA
          </h4>

          <p>
            También podrás participar presencialmente depositando tu ticket
            cumplimentado en el <strong>buzón habilitado en nuestra tienda</strong>.
          </p>

          <p className="mt-2">
            Los <strong>25 ganadores de esta modalidad</strong> serán
            seleccionados mediante la extracción aleatoria de 25 tickets del
            buzón.
          </p>
        </div>
      </div>
    ),
  },

  {
    number: "03",
    title: "SORTEO",
    content: (
      <div>
        <p>
          El sorteo se realizará el{" "}
          <strong>12 de diciembre de 2026</strong>.
        </p>

        <p className="mt-3">
          Se seleccionarán un total de <strong>50 personas ganadoras</strong>:
        </p>

        <ul className="mt-3 space-y-2 list-none">
          <li className="flex gap-2">
            <span style={{ color: "#D4A72C" }}>✦</span>
            <span>25 ganadores mediante redes sociales.</span>
          </li>

          <li className="flex gap-2">
            <span style={{ color: "#D4A72C" }}>✦</span>
            <span>25 ganadores mediante tickets físicos.</span>
          </li>
        </ul>

        <p className="mt-3">
          La selección será realizada de forma aleatoria, sin intervención
          subjetiva en la elección de las personas ganadoras.
        </p>
      </div>
    ),
  },

  {
    number: "04",
    title: "PREMIOS",
    content: (
      <p>
        El concurso contará con <strong>50 tickets</strong>, distribuidos entre
        las dos modalidades de participación por valor de <strong>50 €</strong> para canjear en nuestra tienda. Cada ticket es válido para un único uso y no es transferible ni canjeable por dinero en efectivo.
      </p>
    ),
  },

  {
    number: "05",
    title: "PERSONAS GANADORAS",
    content: (
      <div>
        <p>
          Grandes Oportunidades contactará con las personas ganadoras mediante
          los datos facilitados durante la participación.
        </p>

        <p className="mt-3">
          En el caso de las redes sociales, el contacto podrá realizarse
          mediante mensaje privado a través de la plataforma correspondiente.
        </p>

        <p className="mt-3">
          En el caso de los tickets físicos, el contacto se realizará utilizando
          los datos facilitados en el ticket ganador.
        </p>

        <p className="mt-3">
          Si una persona ganadora no pudiera ser localizada, no aceptara el
          premio o no cumpliera los requisitos establecidos, podrá recurrirse a
          una persona suplente.
        </p>
      </div>
    ),
  },

  {
    number: "06",
    title: "PARTICIPACIONES NO VÁLIDAS",
    content: (
      <div>
        <p>
          Podrán ser anuladas aquellas participaciones que incumplan las
          condiciones del concurso o presenten indicios de fraude o
          manipulación.
        </p>

        <ul className="mt-3 space-y-2 list-none">
          <li className="flex gap-2">
            <span style={{ color: "#D4A72C" }}>—</span>
            Datos falsos o incompletos.
          </li>

          <li className="flex gap-2">
            <span style={{ color: "#D4A72C" }}>—</span>
            Participaciones duplicadas en redes sociales, sólo ganaras una vez en cada plataforma.
          </li>

          <li className="flex gap-2">
            <span style={{ color: "#D4A72C" }}>—</span>
            Uso de sistemas automatizados o fraudulentos.
          </li>

          <li className="flex gap-2">
            <span style={{ color: "#D4A72C" }}>—</span>
            Incumplimiento de las instrucciones de participación.
          </li>
        </ul>
      </div>
    ),
  },

  {
    number: "07",
    title: "PROTECCIÓN DE DATOS",
    content: (
      <div>
        <p>
          Los datos personales facilitados serán tratados únicamente en la
          medida necesaria para gestionar el concurso, validar las
          participaciones, contactar con las personas ganadoras y gestionar la
          entrega de los premios.
        </p>

        <p className="mt-3">
          El tratamiento de los datos se realizará conforme al{" "}
          <strong>Reglamento General de Protección de Datos (RGPD)</strong> y a
          la normativa española aplicable en materia de protección de datos.
        </p>

        <p className="mt-3">
          Solo se solicitarán los datos necesarios para las finalidades
          indicadas. La participación en el concurso no implica automáticamente
          la aceptación de comunicaciones comerciales.
        </p>

        <p className="transition-colors hover:text-[#D4A72C]"
            style={{ color: "#D4A72C" }}
        >Despues de la finalización del concurso, los datos personales serán eliminados.
        </p>
      </div>
    ),
  },

  {
    number: "08",
    title: "REDES SOCIALES",
    content: (
      <p>
        El concurso no está patrocinado, avalado, administrado ni asociado con
        Instagram, Facebook u otras plataformas utilizadas para su
        difusión. Las plataformas quedan exoneradas de cualquier responsabilidad
        relacionada con la organización y desarrollo del concurso.
      </p>
    ),
  },

  {
    number: "09",
    title: "ACEPTACIÓN DE LAS BASES",
    content: (
      <p>
        La participación en cualquiera de las modalidades implica la aceptación
        de las presentes bases y del procedimiento de participación, selección
        de ganadores y entrega de premios descrito en ellas.
      </p>
    ),
  },
];

function RuleCard({
  rule,
  isOpen,
  onToggle,
}: {
  rule: Rule;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      className="rounded-sm overflow-hidden transition-all duration-300"
      style={{
        background: "var(--bg-card-2)",
        border: isOpen
          ? "1px solid rgba(212,167,44,0.55)"
          : "1px solid var(--border-subtle)",
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center gap-4 md:gap-6 p-5 md:p-6 text-left"
        aria-expanded={isOpen}
      >
        <span
          className="text-xs md:text-sm font-black tracking-widest min-w-[32px]"
          style={{
            color: isOpen ? "#D4A72C" : "var(--text-muted)",
          }}
        >
          {rule.number}
        </span>

        <span
          className="flex-1 text-sm md:text-base font-black tracking-wide"
          style={{ color: "var(--text-primary)" }}
        >
          {rule.title}
        </span>

        <span
          className="w-8 h-8 flex items-center justify-center rounded-full text-lg transition-transform duration-300"
          style={{
            color: "#D4A72C",
            background: "rgba(212,167,44,0.08)",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-300"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <div
            className="px-5 pb-6 md:px-6 md:pb-7 ml-8 md:ml-14 text-sm leading-relaxed"
            style={{
              color: "var(--text-muted)",
              borderTop: "1px solid var(--border-subtle)",
              paddingTop: "20px",
            }}
          >
            {rule.content}
          </div>
        </div>
      </div>
    </article>
  );
}

export function RulesSection() {
  const [openRule, setOpenRule] = useState<number | null>(null);

  const toggleRule = (index: number) => {
    setOpenRule((current) => (current === index ? null : index));
  };

  return (
    <section
      id="bases"
      className="py-20 md:py-28 overflow-hidden"
      style={{
        background: "var(--bg-page-alt)",
        borderTop: "1px solid var(--border-gold)",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* CABECERA */}
        <SectionTitle
          label="Concurso de aniversario"
          title="BASES DEL"
          titleGold="CONCURSO"
        />

        <p
          className="max-w-2xl mx-auto text-center text-sm md:text-base leading-relaxed mt-6"
          style={{ color: "var(--text-muted)" }}
        >
          Consulta las condiciones de participación, el procedimiento del
          sorteo y toda la información necesaria antes de participar.
        </p>

        {/* RESUMEN */}
        <div
          className="grid grid-cols-3 sm:grid-cols-3 gap-px mt-12 rounded-sm overflow-hidden"
          style={{
            background: "var(--border-subtle)",
            border: "1px solid var(--border-subtle)",
          }}
        >
          <div
            className="p-5 md:p-6 text-center"
            style={{ background: "var(--bg-card-2)" }}
          >
            <span
              className="block text-2xl md:text-3xl font-black"
              style={{ color: "#D4A72C" }}
            >
              50
            </span>

            <span
              className="block text-[10px] md:text-xs font-bold tracking-widest mt-1"
              style={{ color: "var(--text-muted)" }}
            >
              GANADORES
            </span>
          </div>

          <div
            className="p-5 md:p-6 text-center"
            style={{ background: "var(--bg-card-2)" }}
          >
            <span
              className="block text-2xl md:text-3xl font-black"
              style={{ color: "#D4A72C" }}
            >
              25 + 25
            </span>

            <span
              className="block text-[10px] md:text-xs font-bold tracking-widest mt-1"
              style={{ color: "var(--text-muted)" }}
            >
              ONLINE + TIENDA
            </span>
          </div>

          <div
            className="p-5 md:p-6 text-center"
            style={{ background: "var(--bg-card-2)" }}
          >
            <span
              className="block text-2xl md:text-3xl font-black"
              style={{ color: "#D4A72C" }}
            >
              12 DIC
            </span>

            <span
              className="block text-[10px] md:text-xs font-bold tracking-widest mt-1"
              style={{ color: "var(--text-muted)" }}
            >
              DÍA DEL SORTEO
            </span>
          </div>
        </div>
      

        {/* BASES */}
        <div className="mt-8 space-y-3">
          {rules.map((rule, index) => (
            <RuleCard
              key={rule.number}
              rule={rule}
              isOpen={openRule === index}
              onToggle={() => toggleRule(index)}
            />
          ))}
        </div>

        {/* NOTA FINAL */}
        <div
          className="mt-10 p-5 md:p-6 rounded-sm text-center"
          style={{
            background: "rgba(212,167,44,0.05)",
            border: "1px solid rgba(212,167,44,0.2)",
          }}
        >
          <p
            className="text-xs md:text-sm leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            <strong style={{ color: "var(--text-primary)" }}>
              Participación gratuita.
            </strong>{" "}
            Consulta siempre las bases completas y las condiciones específicas
            indicadas en cada publicación oficial del concurso.
          </p>
        </div>

      </div>
    </section>
  );
}