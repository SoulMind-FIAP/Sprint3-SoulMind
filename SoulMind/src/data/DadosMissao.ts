import type { TipoMissao } from "../types/TipoMissao";
import reciclagemImg from "../assets/reciclagem.png";
import aguaImg from "../assets/agua.png";
import transporteImg from "../assets/transporte.png";
import luzImg from "../assets/luz.png";
export const missoes: TipoMissao[] = [
  {
    id: 1,
    foto: reciclagemImg,
    titulo: "Recicle 3 itens de plástico",
    descricao: "Descarte corretamente 3 itens de plástico no ponto de coleta mais próximo.",
    xp: 50,
    icone: "reciclagem",
  },
  {
    id: 2,
    foto: aguaImg,
    titulo: "Economize 10L de água",
    descricao: "Tome banhos mais curtos e feche a torneira enquanto escova os dentes.",
    xp: 40,
    icone: "agua",
  },
  {
    id: 3,
    foto: transporteImg,    
    titulo: "Use transporte sustentável",
    descricao: "Vá de bike ou a pé para algum lugar que normalmente iria de carro.",
    xp: 60,
    icone: "transporte",
  },
  {
    id: 4,
    foto: luzImg,
    titulo: "Desligue as luzes",
    descricao: "Evite o consumo desnecessário de energia.",
    xp: 45,
    icone: "energia",
  },
];