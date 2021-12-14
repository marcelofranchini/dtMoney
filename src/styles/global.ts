import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   :root {
       --background: #f0f2f5;
       --red: #e52e40;
       --blue:#5429cc;
       --green: #33cc95;

       --blue-light: #6933ff;

       --text-title: #363f5f;
       --text-body: #969CB3;

       --shape: #ffffff;

   }

   //font-size 16px padrao desk
   html {
       @media(max-width: 1080px){
           font-size: 93.75%;//15px - % para ser acessivel na hora do usuário aumentar 

       }
       @media(max-width: 720px){
           font-size: 87.5%; //14px

       }
   }

   // REM = 1rem = 16px  -> ele segue o tamanho da font padrao

   * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-size: 400;
    }

    h1, h2, h3, h4, h5, strong{
        font-size: 600;
    }
    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }


    .react-modal-overlay{
        background: rgba(0,0,0,0.5);

        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        background: var(--background);
        width: 100%;
        max-width: 576px;
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
    }

    .react-modal-close{
        position: absolute;
        border: 0;
        right: 1.5rem;
        top: 1.5rem;
        background: transparent;

        transition: filter 0.2s;

        &:hover {
        filter: brightness(0.8);
        }
    }




`;
