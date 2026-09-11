import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaRecycle,  FaBicycle, FaBolt, FaCheck } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { missoes } from "../../data/DadosMissao";
import reciclagemImg from "../../assets/reciclagem.png";
import aguaImg from "../../assets/agua.png";
import transporteImg from "../../assets/transporte.png";
import luzImg from "../../assets/luz.png";

const icones = {
  reciclagem: { Icon: FaRecycle, foto: reciclagemImg, cor: "text-emerald-600", tag: "bg-emerald-100 text-emerald-700", nome: "Reciclagem" },
  agua: { Icon: FaDroplet, foto: aguaImg, cor: "text-sky-500", tag: "bg-sky-100 text-sky-700", nome: "Água" },
  transporte: { Icon: FaBicycle, foto: transporteImg, cor: "text-primary", tag: "bg-primary/10 text-primary", nome: "Transporte" },
  energia: { Icon: FaBolt, foto: luzImg, cor: "text-primary", tag: "bg-primary/10 text-primary", nome: "Energia" },
};

export default function MissaoDetalhes() {
  const { id } = useParams();
  const navigate = useNavigate();

  const missao = missoes.find((missao) => missao.id === Number(id));

  if (!missao) {
    return (
      <div>
        <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <FaCheck className="h-9 w-9 text-primary" />
          </div>

          <h1 className="mt-6 text-2xl font-bold sm:text-3xl">Missão não encontrada</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Ela pode ter sido removida ou o link está incorreto.
          </p>

          <button
            onClick={() => navigate("/missoes")}
            className="mt-8 inline-flex items-center gap-1.5 rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <FaArrowLeft className="h-4 w-4" />
            Voltar para missões
          </button>
        </section>
      </div>
    );
  }

  const { Icon, foto, cor, tag, nome } = icones[missao.icone];

  return (
    <div>
      <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <button
          onClick={() => navigate("/missoes")}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
        >
          <FaArrowLeft className="h-4 w-4" />
          Voltar para missões
        </button>

        <div className="mt-6 overflow-hidden rounded-3xl bg-card shadow-soft sm:mt-8">
          <div className="relative h-48 sm:h-64">
            <img src={foto} alt={nome} className="h-full w-full object-cover" />
            <span
              className={`absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-card shadow-soft ${cor}`}
            >
              <Icon className="h-6 w-6" />
            </span>
          </div>

          <div className="p-6 sm:p-10">
            <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${tag}`}>
              {nome}
            </span>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h1 className="text-2xl font-bold sm:text-3xl">{missao.titulo}</h1>
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm font-bold text-emerald-600">
                +{missao.xp} pontos ao concluir
              </span>
            </div>

            <h2 className="mt-8 text-sm font-bold uppercase tracking-wide text-muted-foreground">
              Sobre a missão
            </h2>
            <p className="mt-3 text-base leading-relaxed text-foreground/80 sm:text-lg">
              {missao.descricao}
            </p>

            <div className="mt-8 flex flex-col gap-4 border-t border-primary/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className={`flex h-11 w-11 items-center justify-center rounded-full ${tag}`}>
                  <Icon className={`h-5 w-5 ${cor}`} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Recompensa
                  </p>
                  <p className="text-sm font-bold">{missao.xp} pontos de experiência</p>
                </div>
              </div>

              <button
                onClick={() => navigate("/missoes")}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                <FaCheck className="h-4 w-4" />
                Concluir missão
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}