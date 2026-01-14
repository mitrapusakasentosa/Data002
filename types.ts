
export interface TaskData {
  idAkun: string;
  hargaProduk: number;
  komisi: number;
  pilihanTugas: number;
}

export const TASK_OPTIONS = [
  { id: 1, label: "1 pesanan", desc: "1 PESANAN" },
  { id: 2, label: "2 pesanan", desc: "2 PESANAN" },
  { id: 3, label: "3 pesanan", desc: "3 PESANAN" },
  { id: 4, label: "4 Pesanan", desc: "4 PESANAN" },
  { id: 5, label: "5 Pesanan", desc: "5 PESANAN" },
];
