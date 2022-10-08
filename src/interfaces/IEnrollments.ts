export default interface IEnrollments {
  id: number;
  course_name: string;
  total_value: string;
  due_date: number;
  bills_quantity: number;
  institution_id: number;
  student_id: number;
  created_at?: string;
  updated_at?: string;
}
