import React from "react";
import { useForm } from 'react-hook-form'


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const { register, handleSubmit, formState: {errors} } = useForm()
  
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input type="text"
          {...register("nombre", {
            required : {
              value : true,
              message: "Se requiere Nombre"
            },
            minLength: {
              value: 2,
              message: "El nombre requiere de más de dos caracteres"
            },
            maxLength : {
              value: 30,
              message: "El nombre requiere menos de treinta caracteres"
            }, 
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Email invalido"
            }
          })} />
          {errors.nombre && <span>{errors.nombre.message}</span>}
        <label htmlFor="correo">Correo</label>
        <input type="email"
          {...register("correo")} />
        <label htmlFor="password">Password</label>
        <input type="password"
          {...register("password",{
            required : true
          })} />
          {errors.password && <span>el password es requerido</span>}
        <label htmlFor="confirmarPassword">Confirmar password</label>
        <input type="password"
          {...register("confirmPassword",{
            required : true
          })} />
          {errors.confirmPassword && <span>el confurmar password es requerido</span>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
