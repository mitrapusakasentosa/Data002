
export interface TaskData {
  idAkun: string;
  hargaProduk: number;
  komisi: number;
  pilihanTugas: number;
}

export const TASK_OPTIONS = [
  { id: 1, label: "1 pesanan", desc: "satu pesanan satu produk total satu pesanan" },
  { id: 2, label: "2 pesanan", desc: "satu pesanan dua produk total dua pesanan" },
  { id: 3, label: "3 pesanan", desc: "satu pesanan tiga produk total tiga pesanan" },
  { id: 4, label: "4 Pesanan", desc: "satu pesanan empat produk total empat pesanan" },
  { id: 5, label: "5 Pesanan", desc: "satu pesanan lima produk total lima pesanan" },
];
