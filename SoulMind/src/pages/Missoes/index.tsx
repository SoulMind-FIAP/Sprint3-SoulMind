import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRecycle, FaBicycle, FaBolt, FaCheck } from "react-icons/fa";
  import {FaDroplet} from "react-icons/fa6";
import { missoes } from "../../data/DadosMissao";
import reciclagemImg from "../../assets/reciclagem.png";
import aguaImg from "../../assets/agua.png";
import transporteImg from "../../assets/transporte.png";
import luzImg from "../../assets/luz.png";

const icones = {
  reciclagem: {
    Icon: FaRecycle,
    foto: reciclagemImg,
    cor: "text-emerald-600",
    tag: "bg-emerald-100 text-emerald-700",
    nome: "Reciclagem",
  },
  agua: {
    Icon: FaDroplet,
    foto: aguaImg,
    cor: "text-sky-500",
    tag: "bg-sky-100 text-sky-700",
    nome: "Água",
  },
  transporte: {
    Icon: FaBicycle,
    foto: transporteImg,
    cor: "text-primary",
    tag: "bg-primary/10 text-primary",
    nome: "Transporte",
  },
  energia: {
    Icon: FaBolt,
    foto: luzImg,
    cor: "text-primary",
    tag: "bg-primary/10 text-primary",
    nome: "Energia",
  },
};

export default function Missoes() {
  const navigate = useNavigate();

  const [concluidas, setConcluidas] = useState<number[]>([]);

  const alternarMissao = (id: number) => {
    setConcluidas((atual) =>
      atual.includes(id)
        ? atual.filter((item) => item !== id)
        : [...atual, id]
    );
  };

  const totalMissoes = missoes.length;

  const quantidadeConcluidas = concluidas.length;

  const xpGanho = missoes
    .filter((missao) => concluidas.includes(missao.id))
    .reduce((soma, missao) => soma + missao.xp, 0);

  const porcentagem =
    totalMissoes > 0
      ? (quantidadeConcluidas / totalMissoes) * 100
      : 0;

  return (
    <div>
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">

        <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
          Missões
        </h2>

        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Complete os desafios e cuide do planeta!
        </p>

        <div className="mt-8 rounded-2xl bg-card p-6 shadow-soft sm:mt-10 sm:p-8">

          <div className="flex flex-wrap items-center justify-between gap-2">

            <p className="text-sm font-bold sm:text-base">
              Progresso semanal
            </p>

            <p className="text-sm font-bold text-primary sm:text-base">
              {quantidadeConcluidas} de {totalMissoes} concluídas · {xpGanho} XP
            </p>

          </div>

          <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-primary/10">
            <div
              className="h-full rounded-full bg-primary transition-all duration-300"
              style={{ width: `${porcentagem}%` }}
            />
          </div>

        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {missoes.map((missao) => {
            const { Icon, foto, cor, tag, nome } = icones[missao.icone];
            const concluida = concluidas.includes(missao.id);

            return (
              <div
                key={missao.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
              >
                <div className="relative h-28">
                  <img src={foto} alt={nome} className="h-full w-full object-cover" />
                  <span
                    className={`absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-card shadow-soft ${cor}`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <span className={`inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold ${tag}`}>
                    {nome}
                  </span>

                  <h3 className="mt-3 text-sm font-bold sm:text-base">{missao.titulo}</h3>
                  <p className="mt-1 flex-1 text-xs text-muted-foreground sm:text-sm">
                    {missao.descricao}
                  </p>
                  <p className="mt-2 text-xs font-bold text-primary sm:text-sm">
                    +{missao.xp} pontos
                  </p>

                  <button
                    onClick={() => alternarMissao(missao.id)}
                    className={`mt-4 inline-flex items-center justify-center gap-1.5 rounded-xl px-5 py-2.5 text-xs font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 sm:text-sm ${
                      concluida ? "bg-emerald-500" : "bg-primary"
                    }`}
                  >
                    {concluida && <FaCheck className="h-4 w-4" />}
                    {concluida ? "Concluída" : "Fazer missão"}
                  </button>

                  <button
                    onClick={() => navigate(`/missoes/${missao.id}`)}
                    className="mt-2.5 inline-flex items-center justify-center rounded-xl border border-primary px-5 py-2.5 text-xs font-semibold text-primary transition hover:bg-primary/10 sm:text-sm"
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            );
          })}

        </div>
      </section>
    </div>
  );
}