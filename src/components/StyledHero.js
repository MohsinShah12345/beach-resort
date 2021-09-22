import styled from 'styled-components';
import defaultImg from '../Images/Room1.jpg'
const StyledHero= styled.header`

min-height:60vh;
background:url(${props=>props.img} ) center/cover no-repeat;
display:flex;
align-items: center;
justify-content: center;`
;

/*const orange='#f15025'
const SimpleButton = styled.button`
color:${orange};
background:blue;
font-size:3rem;
`;*/
export default StyledHero;