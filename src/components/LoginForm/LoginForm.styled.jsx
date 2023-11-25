const { default: styled } = require("styled-components");


export const Container = styled.section`
padding: 40px 20px 40px 20px;
box-shadow: 0px 5px 8px 13px rgba(34, 60, 80, 0.21);
`
export const Form = styled.form`
display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    gap:15px;
`
export const Label = styled.label`
display:flex;
flex-direction: column;
    flex-wrap: wrap;
    gap: 5px;
`
export const Btn = styled.button`
text-decoration: none;
  display: inline-block;
  width: 80px;
  height: 40px;
  line-height: 30px;
  border-radius: 30px;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  color: #524f4e;
  background: white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, .1);
  transition: .3s;
&:hover {
  background: orange;
  box-shadow: 0 15px 20px orange;
  color: white;
  transform: translateY(-7px);
}
`