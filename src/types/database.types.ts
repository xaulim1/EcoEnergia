export type User = {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  cep: string;
  created_at: string;
};

export type Ranking = {
  id: string;
  user_id: string;
  score: number;
  level: number;
  created_at: string;
  user: User;
}; 