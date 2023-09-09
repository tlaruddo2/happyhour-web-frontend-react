import styled from "styled-components";
import  Form  from "react-bootstrap/Form";
import { days } from "../../../data/const";

interface DatePickerProps{
  setDate: React.Dispatch<React.SetStateAction<string>>
}
const DatePicker = ({ setDate }: DatePickerProps) => {
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => { 
    let dayNumber = new Date(e.target.value).getDay();
    setDate(days[dayNumber]);
  }
  
  return ( 
      <Container>
        <Form.Control
          type="date"
          className="modalTextField"
          style={{ paddingRight: "6px" }}
          onChange={handleChange}
        />
      </Container>
  )
}

const Container = styled.div`
  height: 100px;
  width: 400px;
  margin: 20px;
`

export default DatePicker