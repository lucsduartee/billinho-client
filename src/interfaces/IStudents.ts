export default interface IStudents {
  id: number;
  name: string;
  cpf: string;
  gender: string;
  payment_way: string;
  birthday: string;
  cellphone: number | null;
  created_at?: string;
  updated_at?: string;
}
