import { useState } from "react";
import {FaStar,FaBullseye,FaTrophy,FaSeedling,FaTint,FaRecycle,FaChartLine,FaLock,FaCheck,FaUndo,FaHeart,} from "react-icons/fa";
import {avatares,niveis} from "../../data/DadosAvatar";

export default function Avatar() {
  const pontosUsuario = 350;
  const [avatarEscolhido, setAvatarEscolhido] = useState(1);
  const nivelAtual =
    [...niveis]
      .reverse()
      .find((nivel) => pontosUsuario >= nivel.min) ??
    niveis[0];
  const indiceNivel = niveis.findIndex(
    (nivel) => nivel.nome === nivelAtual.nome
  );
  const proximoNivel = niveis[indiceNivel + 1];
  const progressoNivel = proximoNivel
    ? ((pontosUsuario - nivelAtual.min) /
        (proximoNivel.min - nivelAtual.min)) *
      100
    : 100;
  const avatarAtual = avatares.find(
    (avatar) => avatar.id === avatarEscolhido
  );
  const progressoGeral = 72;
  const raio = 52;
  const circunferencia = 2 * Math.PI * raio;
  const deslocamento =
    circunferencia * (1 - progressoGeral / 100);
  return (
    <div className=" mt-8 min-h-screen bg-background w-9/10 m-auto">
        <section className="  grid gap-5 sm:grid-cols-3">
          <div className="rounded-3xl bg-card p-6 shadow-soft">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <FaStar className="h-6 w-6 fill-primary text-primary" />
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">
                  {pontosUsuario}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Pontos
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-card p-6 shadow-soft">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <FaBullseye className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">
                  24
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Missões
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-card p-6 shadow-soft">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <FaTrophy className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">
                  8
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Conquistas
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-5 grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl bg-card p-6 shadow-soft sm:p-8">
            <div className="flex flex-col items-center gap-6 sm:flex-row">
              <div className="relative h-32 w-32 shrink-0">
                <svg
                  viewBox="0 0 120 120"
                  className="h-full w-full -rotate-90">
                  <circle
                    cx="60"
                    cy="60"
                    r={raio}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="12"
                    className="text-primary/10"/>
                  <circle
                    cx="60"
                    cy="60"
                    r={raio}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={circunferencia}
                    strokeDashoffset={deslocamento}
                    className="text-primary"/>
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-primary">
                  {progressoGeral}%
                </span>
              </div>
                <div className="mt-4">
                  <div className="mb-2 flex items-center justify-between gap-4 text-xs font-semibold">
                    <span className="flex items-center gap-1.5 text-primary">
                      <FaChartLine className="h-4 w-4" />
                      Nível: {nivelAtual.nome}
                    </span>
                    {proximoNivel && (
                      <span className="text-muted-foreground">
                        {pontosUsuario} / {proximoNivel.min}
                      </span>
                    )}
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-primary/10">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{
                        width: `${Math.min(
                          progressoNivel,
                          100
                        )}%`,
                      }}
                    />
                  </div>
                  {proximoNivel && (
                    <p className="mt-2 text-xs text-muted-foreground">
                      {pontosUsuario} / {proximoNivel.min} para{" "}
                      {proximoNivel.nome}
                    </p>
                  )}
                </div>
              </div>
            </div>
          <div className="rounded-3xl bg-card p-6 shadow-soft sm:p-8">
            <h2 className="text-xl font-bold">
              Conquistas recentes
            </h2>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10">
                  <FaSeedling className="h-7 w-7 text-emerald-500" />
                </div>
                <span className="text-xs font-semibold sm:text-sm">
                  Plantador
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500/10">
                  <FaTint className="h-7 w-7 text-sky-500" />
                </div>
                <span className="text-xs font-semibold sm:text-sm">
                  Poupador de água
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <FaRecycle className="h-7 w-7 text-primary" />
                </div>
                <span className="text-xs font-semibold sm:text-sm">
                  Reciclador
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
  );   
}