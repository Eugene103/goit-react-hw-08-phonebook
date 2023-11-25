import styled from "styled-components";


export const Container = styled.div`
display: flex;
    flex-wrap:wrap;
    align-content: center;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    font-size:20px;
`
export const Btn = styled.button`
  text-decoration: none;
  display: inline-block;
  width: 105px;
  height: 30px;
  line-height: 30px;
  border-radius: 30px;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
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