
export interface StaffInterface{
  id: number;
  email: string;
  civility: string;
  first_name: string;
  last_name: string;
  company: {
    name: string,
    user_type: string
  };
  user_status: string;
  count_document: number;
  position: string;
  office_phone: string;
  direct_line: string;
  mobile_phone: string;
}
