import React from "react";
import Formlogo from "../assets/form-logo.png"
import '../App.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Header from "../componentes/Header";

const schema = yup.object({
    name: yup.string().required("o nome é obrigatório"),
    email: yup.string().email("Digite um email válido").required("o email é obrigatório"),
    password: yup.string().min(6, "A senha deve ter pelo menos 6 digitos").required("A senha é obrigatório"),
    confirmPassword: yup.string().required("Confirmar senha é obrigatório").oneOf([yup.ref("password")],"As senhas devem ser iguais"),
  }).required();
  
  function Formulario() {
    const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)});
  
    function submit(dados){
      console.log(dados)
    } 
  
  
    function Enviar(){
      var nome = document.getElementById("nomeid"); 
      var email = document.getElementById("email"); 
      var senha = document.getElementById("senha"); 
      var confirmsenha = document.getElementById("confirmasenha"); 

      if (nome.value != "") { 
      alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso'); 
      }
      nome.value="";
      email.value="";
      senha.value="";
      confirmsenha.value="";

    }
  
  
    return (
    <div>
      <Header/>
  
      <form onSubmit={handleSubmit (submit)}>
        <img src={Formlogo} alt= "imagem-logo"></img>
  
        <label>
          Nome
        <input type="text" id="nomeid" {...register("name", { required: true })}/>
        <span>{errors.name?.message}</span>
        </label>
  
        <label>
          Email
        <input type="text" id="email"{...register("email")}/>
        <span>{errors.email?.message}</span>
        </label>
  
        <label>
          Senha
        <input type ="password" id="senha"{...register("password")}/>
        <span>{errors.password?.message}</span>
        </label>
  
        <label>
          Confirmar Senha
        <input type="password" id="confirmasenha"{...register("confirmPassword")}/>
        <span>{errors.confirmPassword?.message}</span>
        </label>
  
      <button type="submit"  onClick={Enviar}>Cadastrar-se</button>
      </form>
      </div>
  
    );
  }
  export default Formulario;