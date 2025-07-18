import styled from 'styled-components';
import { motion } from 'framer-motion';

import breakpoints from '../../styles/BreakPoints';

export const Container = styled.div`
    width: 100vw;

    
    
    
    
`;

export const ButtonUp = styled.button`
    
    background: #FF6600;
    border: 1px solid transparent;
    font-size: 30px;
    color: #fff;
    border-radius: 40%;
    padding: 10px 20px;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    cursor: pointer;
    opacity: ${(props) => (props.$visible ? '1' : '0')};
    transition: opacity 0.7s ease-in-out;


    &:hover{
        background: transparent;
        border: 1px solid #FF6600;
    }
    
    &:active{
        color:rgb(114, 49, 6);
    }


    @media (${breakpoints.sl3}){
        right: 3rem;
            
        
        
    }
    @media (${breakpoints.ss4}){
        right: 1rem;
            
        
        
    }

    
   

`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
    background-color: #0A0A0A;
    
    @media (${breakpoints.sl2}){
        padding: 10px 20px;
    }
    


    .mobileMenu{    
        display: none;
        background: none;
        border: none;
        cursor: pointer;

        div {
            width: 30px;
            height: 4px;
            background: #FF6600;
            border-radius: 10px;
            
            
            &:nth-child(2) {
                margin: 8px 0;
            }

        }


        @media (${breakpoints.ss4}) {
            display: block;
        }

    }    
    
`;

export const MobileSideBar = styled.div` 
        position: fixed;
        top: 0;
        right: -100%;
        width: 60%;
        height: 50vh;
        padding: 2rem 4rem 0 0;
        background: #111;
        border-radius: 20px;
        border: 1px solid #1d1d1d;
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        transition: right 0.3s ease-in-out;
        z-index: 999;

        .close{
            font-size: 22px;
            font-weight: bold;
            position: relative;
            bottom: 50%;
            right: 20%;
            color: #ff6600;
            cursor: pointer;
            background: none;
            border: none;
        
            
        }

        .options{

            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;

            a {
                color: white;
                text-decoration: none;
                font-size: 1.2rem;
                cursor: pointer;

                @media (${breakpoints.ss3}){
            
                    font-size: 1rem;
        
        
                }
                
            }
        }

        

        &.open {
            right: 0;
        }



        
    

`;

export const Logo = styled.div`
    img{
        max-width: 80px;

        @media (${breakpoints.ss4}){
            max-width: 60px;
            
        
        
        }
        
    }


`;

export const Menus = styled.div`
    
    a{
        color: #fff;
        margin-left: 50px;
        position: relative;

        &:nth-child(1)::after, &:nth-child(2)::after{
            content: '';
            width: 0%;
            height: 2px;
            background: #a8a2a2;
            position: absolute;
            left: 0;
            bottom: 0;
            transition: width 0.6s ease;
            background: #FF6600;
            
        }

        &:hover::after{
            width: 100%;
        }

        @media (${breakpoints.sl1}){
            margin-left: 30px;
            font-size: 15px;
        }

        @media (${breakpoints.ss4}){
            display: none;
            
        
        
        }

    }    
`;

export const LinkContact = styled.a`
    background: #FF6600;
    border-radius: 100px;
    padding: 10px 20px;
    border: 1px solid transparent;
    

    &:hover{
       background: transparent ;
       border: 1px solid  #FF6600;
    }

    &:active{
        color:rgb(114, 49, 6);
    }

    @media (${breakpoints.sl1}){
        padding: 10px;
    }

`;

export const Link = styled.a`
    background: #FF6600;
    padding: 10px 20px;
    border-radius: 100px;
    border: 1px solid transparent;

    &:hover{
        background: transparent ;
        border: 1px solid  #FF6600;
    }

    &:active{
        color:rgb(114, 49, 6);
    }

    @media (${breakpoints.ss1}){
        padding: 8px 10px;
    }
`;

export const Apresentation = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    gap: 5%;
    text-align: center;
    margin-top: 10%;
    position: relative;


    @media (${breakpoints.sl1}){
        gap: 2%;
    }


    @media (${breakpoints.sm2}){
        flex-direction: column-reverse;
        gap: 50px
    }
    



    .line-one{
        position: absolute;
        top: 72%;
        width: 50%;
        height: 1px;
        border: none;
        background: #FF6600;
        z-index: -1;
        

        @media (${breakpoints.sl2}){
            width: 70%;
            right: 25%;
        }
        @media (${breakpoints.sl1}){
            width: 70%;
            right: 20%;
        }
        

        @media (${breakpoints.sm2}){
            top: 40%;
            right: 50%;
        }
        
        
        
        
    }

    .line-two{
        position: absolute;
        right: 35%;
        top: 40%;
        height: 100%;
        z-index: -1;
        background: #FF6600;
        width: 1px;
        border: none;
        
        
        @media (${breakpoints.sm2}){
            top: 40%;
            height: 60%;
            right: 35%;
        }

    }
    
    
    
    
    

    

`;

export const FirstText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;


    @media (${breakpoints.ss1}){
        gap: 0;
    }


    

    
    
    
    

`;

export const Name = styled.div`
    line-height: 40px;
    opacity: ${(props) => (props.$visible ? '1' : '0')};
    transform: ${(props) => (props.$visible ? 'translateX(0)' : 'translateX(-300px)')} ;
    transition: all 1s ease;
    transition-delay: 0.4s;

    p{
        font-size: 32px;
        color: #FF6600;
        font-weight: bold;


        @media (${breakpoints.sl1}){
            font-size: 20px;
        }

        @media (${breakpoints.ss1}){
            font-size: 16px;
        }
        
    }

    
    
      

`;

export const Title = styled.h1`
    font-size: 64px;
    font-weight: bold;

    @media (${breakpoints.sl1}){
        font-size: 40px;
    }

    @media (${breakpoints.ss1}){
        font-size: 30px;
    }
    
`;

export const LinkArea = styled.div`
    display: flex;
    justify-content: center;
    gap: 5%;
    font-size: 18px;
    font-weight: 400;
    opacity: ${(props) => (props.$visible ? '1' : '0')};
    transform: ${(props) => (props.$visible ? 'translateX(0)' : 'translateX(-300px)')} ;
    transition: all 1s ease;
    transition-delay: 0.2s;


    @media (${breakpoints.sl1}){
        font-size: 14px;
        gap: 5px;
    }
    @media (${breakpoints.ss1}){
        font-size: 12px;
    }

   
`;

export const Avatar = styled.div`
    display: flex;
    opacity: ${(props) => (props.$visible ? '1' : '0')};
    transform: ${(props) => (props.$visible ? 'translateX(0)' : 'translateX(300px)')} ;
    transition: all 1s ease;

    
    
    
    img{
        width: 400px;
        border-radius: 10%;
        border: 4px solid #FF6600;
        z-index: 1;
        filter: drop-shadow(0 0 30px hsla(0, 0%, 17%, 0.40));

        @media (${breakpoints.sl1}){
            width: 300px;
        }

        @media (${breakpoints.sm2}){
            width: 250px;
        }
        @media (${breakpoints.ss1}){
            width: 200px;
        }
    }

    
    
    
`;

export const About = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 300px;
    width: 100%;
    opacity: ${(props) => (props.$visible ? '1' : '0')};
    transform: ${(props) => (props.$visible ? 'translateX(0)' : 'translateX(300px)')} ;
    transition: all 1s ease;


    @media (${breakpoints.sm2}){
        margin-top: 200px;
    }
    

    p{
        width: 50%;
        padding: 100px 0;
        text-align: center;
        font-size: 30px;
        
       
        @media (${breakpoints.sl4}){
            width: 90%;
            
        }
        @media (${breakpoints.sl3}){
            width: 80%;
            font-size: 28px;
        }
       
       
        @media (${breakpoints.sl2}){
            width: 80%;
            font-size: 28px;
        }

        @media (${breakpoints.sl1}){
            font-size: 24px;
        
        }
        @media (${breakpoints.sm2}){
            font-size: 20px;
            padding: 50px 0;
        
        
        }
        @media (${breakpoints.ss4}){
            font-size: 18px;
            
        
        
        }

        @media (${breakpoints.ss3}){
            font-size: 13px;
            width: 90vw;
        }

    }

    hr{
        width: 50%;
        height: 1px;
        border: none;
        background: #FF6600 ;
        
    }
`;
export const Category = styled.h2`
    font-size: 40px;
    

    @media (${breakpoints.sl1}){
        font-size: 35px;
        
    }
    @media (${breakpoints.sm2}){
        font-size: 28px;
        
    }

    @media (${breakpoints.ss4}){
        font-size: 24px;
            
        
        
    }
    
    
    
    

    
    
`;

export const SkillsArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 51%;
    margin: 0 auto;
    border: 5px solid #FF6600;
    border-radius: 100px;
    gap: 10px;
    margin-top: 50px ;
    opacity: ${(props) => (props.$visible ? '1' : '0')};
    transform: ${(props) => (props.$visible ? 'scale(1)' : 'scale(0.8)')};
    transition: all 1s ease;
   

    @media (${breakpoints.sl4}){
        width: 80%;
            
    }
    
    @media (${breakpoints.sl3}){
        width: 80%;
        
    }
    @media (${breakpoints.sl2}){
        width: 70%;
        
    }
    @media (${breakpoints.sl1016}){
        width: 70%;
        
    }
    @media (${breakpoints.sl1}){
        width: 80%;
        
    }
    @media (${breakpoints.sm1}){
       width: 90% ;
    }
    @media (${breakpoints.ss2}){
        border: 2px solid #FF6600;
        border-radius: 80px;
        gap: 0;
    }
    @media (${breakpoints.ss3}){
        border: 2px solid #FF6600;
        border-radius: 80px;
        gap: 0;
    }

    

    

    

`;
export const Skills = styled(motion.div)`
    display: flex;
    gap: 30px;
    width: max-content;
    padding: 50px;

    @media (${breakpoints.ss2}){
        padding:0 0 10px 0;
        
    }
    


    img{
        width: 100px;
        height: 100px;
        opacity: ${(props) => (props.$visible ? '1' : '0')};
        transform: ${(props) => (props.$visible ? 'translateX(0)' : 'translateX(80px)')};
        transition: opacity 0.6s  ease 0.3s , transform 0.6s ease 0.3s;
       

        @media (${breakpoints.sm2}){
            width: 80px
        }
        @media (${breakpoints.sm1}){
            width: 80px;
        }
        @media (${breakpoints.ss3}){
            width: 80px;
        }

        @media (${breakpoints.ss2}){
            width: 60px;
        
        }

        
      
    }


`;

export const Carousel = styled(motion.div)`
    display: flex;
    align-items: center;
    gap: 30px;
    overflow-x: hidden;
    max-width: 50vw; 
    padding: 20px;


    @media (${breakpoints.sl4}){
        max-width: 78vw ;
            
    }

    @media (${breakpoints.sl3}){
        max-width: 78vw;
        
    }
    @media (${breakpoints.sl2}){
        max-width: 68vw;
        
    }
    
    @media (${breakpoints.sl1016}){
        width: 100vw;
        
        
    }


    @media (${breakpoints.sl1}){
        max-width: 78vw; ;
                
    }

    @media (${breakpoints.sm1}){
        max-width: 85vw ;
    }
    

    @media (${breakpoints.ss2}){
        max-width: 88vw;
        
    }

    @media (${breakpoints.ss1}){
        max-width: 85vw;
    }

    
`;

export const ProjectsArea = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 200px;
    

    hr{
        width: 50%;
        background:  #FF6600 ;
        height: 1px;
        border: none;


    }
`;
export const Projects = styled.div`
    margin-top: 100px;
    display: grid;
    grid-template-columns: repeat(2, minmax(300px, 1fr));
    gap: 100px;
    text-align: center;
    
    @media (${breakpoints.sl3}){
        gap: 10px;
        
    }
    
    @media (${breakpoints.sm3}){
        grid-template-columns: repeat(1, 90vw);
        
        
    }
    


    
    
    

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        background:rgb(31, 31, 31);
        padding: 20px;
        border-radius: 50px;
        flex-wrap: wrap;


        @media (${breakpoints.sl3}){
            width: 500px
        }
        @media (${breakpoints.sl1016}){
            width: 100%;
            padding: 10px;
            margin: 0 10px;
            
        }
        @media (${breakpoints.sl1}){
           
        }
        
        
        @media (${breakpoints.sm3}){
            width:100%;
            margin: 20px 0;
            align-items: center;
            
        }
        @media (${breakpoints.ss2}){
            background: none;
            padding: 0;
            margin: 0;
            gap: 5px;
            margin: 30px 0;
        }

        

        video{
            @media (${breakpoints.sl3}){
                width: 450px;
            }
            @media (${breakpoints.sl1016}){
                width: 100%;
                
                
            }

            @media (${breakpoints.sl1}){
                width: 100%;
            }
            @media (${breakpoints.sm3}){
                min-width: 100%;
                
                 
            }
            @media (${breakpoints.ss2}){
                width: 360px;
                height: auto;
                border: 1px solid #FF6600;
            }
        }    
        

        .btnProjects{
            display: flex;
            flex-direction: row;
            gap: 20px;
            padding: 20px;

            @media (${breakpoints.sl3}){
                width: auto;
                padding: 10px;
                gap: 10px;
                
            }
            @media (${breakpoints.sl1016}) {
                font-size: 14px;
                
            }

            @media (${breakpoints.sm3}){
                padding: 20px;
            }

            @media (${breakpoints.sm1}){
            
                padding: 5px;
            }

            @media (${breakpoints.ss2}){
                padding: 0;
                font-size: 12px;
            }
        }

    }

    

`;

export const ProjectTitle = styled.h2`
    @media (${breakpoints.sl2}) {
        font-size: 20px;
    }

    @media (${breakpoints.ss2}){
        font-size: 16px ;
    }
`;

export const ContactArea = styled(motion.div)`
  width: 100%;
  margin-top: 300px;
  background-color:#0f0f0f;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  hr{
    width: 100%;
    height: 1px;
    border: none;
    background: #FF6600 ;
  }

  
`;

export const ContactTitle = styled.h2`
    font-size: 24px;
    padding: 20px 0 0;

    @media (${breakpoints.ss2}){
        font-size: 20px;
    }

    
    

`;

export const Contact = styled.div`
   width: 100%;
   padding: 20px;
`;

export const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 15px;
  width: 30%;


    @media (${breakpoints.sl1}){
        width: 50% ;
                
    }
    @media (${breakpoints.ss2}){
         width: 75%;
    }

  input, textarea {
    padding: 12px 15px;
    color: #111;
    font-size: 16px;
    border-radius: 8px;
    border: none;
    resize: none;
  }

  textarea {
    min-height: 120px;
  }

  button {
    background: #FF6600;
    padding: 10px 20px;
    border-radius: 100px;
    border: 1px solid transparent;
    cursor: pointer;

    &:hover{
        background: transparent ;
        border: 1px solid  #FF6600;
    }

    &:active{
        color:rgb(114, 49, 6);
    }
  }    
`;
export const Footer = styled.footer`
    width: 100%;
    background: #0f0f0f;

    div{
        display: flex;
        justify-content: center;
        gap: 10px;
        padding: 30px;
    }
    
`;
