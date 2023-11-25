import styled from "styled-components";


export const Container = styled.div`
margin-top: 10px;
`

export const List = styled.ul`
display: flex;
flex-direction: column;
    flex-wrap: wrap;
margin-top: 10px;
gap: 10px;

`
export const Item = styled.li`
display: flex;
gap: 10px;
    align-items: center;

`
export const Btn = styled.button`
  text-decoration: none;
  display: inline-block;
  width: 60px;
  height: 30px;
  line-height: 20px;
  border-radius: 30px;
  font-family: 'Montserrat', sans-serif;
  font-size: 7.5px;
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