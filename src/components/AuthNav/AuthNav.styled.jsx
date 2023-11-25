import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
display: flex;
    flex-wrap:wrap;
    align-content: center;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
`
export const Link = styled(NavLink)`
text-decoration:none;
color: black;
&.active{
  color: orange;
}
 `