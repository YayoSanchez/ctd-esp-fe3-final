import React from "react";
import { useForm } from 'react-hook-form'


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    reset()
  })

  

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input type="text"
          {...register("nombre", {
            required: {
              value: true,
              message: "Se requiere Nombre"
            },
            minLength: {
              value: 2,
              message: "El nombre requiere de más de dos caracteres"
            },
            maxLength: {
              value: 30,
              message: "El nombre requiere menos de treinta caracteres"
            }
          })} />
        {errors.nombre && <span>{errors.nombre.message}</span>}
        <label htmlFor="correo">Correo</label>
        <input type="email"
          {...register("correo",{
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "Email invalido"
            }
          })} />
        <label htmlFor="password">Password</label>
        <input type="password"
          {...register("password", {
            required: {
              value: true,
              message: "El password es requerido"
            },
            minLength: {
              value: 6,
              message: "El password debe de contener al menos 6 caracteres"
            },
          })} />
          {errors.password && <span>{errors.password.message}</span>}
        <label htmlFor="confirmarPassword">Confirmar password</label>
        <input type="password"
          {...register("confirmPassword", {
            required: "El confirmar password es requerido",
            validate: (value) =>
              value === watch("password") || "Las contraseñas no coinciden",
          })}
        />
        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
