export type UnidadesType = {
  id: number;
  nome: string;
  bloco: string;
  valor: number;
  status: "disponivel" | "vendida" | "reservada";
};
