import { useEffect, useState } from "react";
import { useFrom } from "../hooks/useFrom";

const initialForm = {
  dni: "",
  lastName: "",
  phone: "",
};

const validationsForm = (form) => {
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let numberThen = /^.{1,10}$/;

  let phoneNumber = form.phone.trim();
  let after300Number = parseInt(phoneNumber.toString().slice(0, 3));

  let errors = {};
  if (!form.dni.trim()) {
    errors.dni = "El Campo Cedula es requerido";
  } else if (!/^\d+$/.test(form.dni)) {
    errors.dni = "Solo se permiten números";
  }

  // Validación de lastName
  if (!form.lastName.trim()) {
    errors.lastName = "El Campo Apellido es requerido";
  } else if (!regexName.test(form.lastName.trim())) {
    errors.lastName = "Solo se permiten letras y espacios";
  }

  // Validación de phone
  if (!form.phone.trim()) {
    errors.phone = "El Campo telefono es requerido";
  } else if (!/^\d+$/.test(form.phone.trim())) {
    errors.phone = "Solo se permiten números";
  } else if (after300Number < 300 || after300Number > 399) {
    // Verificar si el número es mayor que "300"
    errors.phone = "El número telefónico debe comenzar con '300'";
  } else if (!numberThen.test(form.phone.trim())) {
    errors.phone = "Esto no es un numero telefonico Valido ";
  }
  console.log(after300Number);

  return errors;
};

const ConctaForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    acepTerminos,
    setAcepTerminos,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFrom(initialForm, validationsForm);
  const [activacion, setActivacion] = useState(false);

  useEffect(() => {
    // Realiza la validación del formulario cuando el estado de 'errors' cambia
    if (Object.keys(errors).length === 0) {
      setActivacion(true); // Habilita la activación si no hay errores
    } else {
      setActivacion(false); // Deshabilita la activación si hay errores
    }
  }, [errors]); // Ejecuta este efecto cuando el estado de 'errors' cambia

  return (
    <>
      <form onSubmit={handleSubmit} className="w-auto mt-o   ">
        <div className=" mb-4 bg-[#E8EEFF] flex justify-around items-center w-[296] h-[56px] shadow-inner shadow-[#4676C32C] rounded-[18px] text-[#818CB4] ">
          <div className=" w-1/4  h-full flex justify-center items-center ">
            <i className="bx bx-id-card text-[33px] flex"></i>
          </div>
          <div className="w-3/4  fex  text-start">
            <label htmlFor="dni" className="block  w-full text-[12px]  ">
              Cédula
            </label>
            <input
              type="text"
              id="dni"
              name="dni"
              value={form.dni}
              required
              minLength={1}
              maxLength={20}
              onBlur={handleBlur}
              onChange={handleChange}
              className="w-full  bg-transparent place-content-start placeholder-[#363C52] font-semibold rounded-md  appearance-none focus:outline-none  "
              placeholder="000.000.000.000"
            />
          </div>
        </div>
        {errors.dni && (
          <p className="text-red-600 mb-2 font-semibold">{errors.dni}</p>
        )}
        {/* lasName */}
        <div className=" mb-4 bg-[#E8EEFF] flex justify-around items-center w-[296] h-[56px] shadow-inner shadow-[#4676C32C] rounded-[18px] text-[#818CB4] ">
          <div className=" w-1/4  h-full flex justify-center items-center ">
            <i className="bi bi-person text-[33px] flex"></i>
          </div>
          <div className="w-3/4  fex  text-start">
            <label htmlFor="lastName" className="block  w-full text-[12px]  ">
              Primer Apellido
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={form.lastName}
              required
              minLength={1}
              maxLength={20}
              onBlur={handleBlur}
              onChange={handleChange}
              className="w-full  bg-transparent place-content-start placeholder-[#363C52] font-semibold rounded-md  focus:outline-none "
              placeholder="Parra"
            />
          </div>
        </div>
        {errors.lastName && (
          <p className="text-red-600 mb-2 font-semibold">{errors.lastName}</p>
        )}
        {/* phone*/}
        <div className=" mb-4 bg-[#E8EEFF] flex justify-around items-center w-[296] h-[56px] shadow-inner shadow-[#4676C32C] rounded-[18px] text-[#818CB4] ">
          <div className=" w-1/4  h-full flex justify-center items-center ">
            <i className="bi bi-phone text-[33px] flex"></i>
          </div>
          <div className="w-3/4  fex  text-start">
            <label htmlFor="phone" className="block  w-full text-[12px]  ">
              Celular
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={form.phone}
              required
              minLength={1}
              maxLength={10}
              onBlur={handleBlur}
              onChange={handleChange}
              className="w-full  bg-transparent place-content-start placeholder-[#363C52] font-semibold rounded-md  appearance-none focus:outline-none"
              placeholder="333.3333.333"
            />
          </div>
        </div>
        {errors.phone && (
          <p className="text-red-600 mb-2 font-semibold">{errors.phone}</p>
        )}

        <div className="mt-10 mb-6    flex justify-between   mx-[10px]">
          <input
            type="checkbox"
            id="aceptaTerminos"
            name="aceptaTerminos"
            checked={form.acepptT}
            required
            onBlur={handleBlur}
            onChange={handleChange}
            onChange={() => setAcepTerminos(!acepTerminos)}
            className="w-1/3 h-6  rounded-full  border-[#0599FB] flex text-blue-500 text-2xl shadow-md focus:appearance-auto "
            value={form.acepptT}
            disabled={!activacion}
          />

          <label
            htmlFor="aceptTerminos"
            className="inline-block pr-1 text-md ml-4  tracking-tight focus:outline-none outline-none text-[#818CB4]   justify-start items-center text-start"
          >
            Acepto los
            <a href="" className="text-[#0599FB] underline underline-offset-2">
              {" "}
              Términos y Condiciones{" "}
            </a>
            y{" "}
            <a
              href=""
              className="text-[#0599FB] underline  underline-offset-2"
              style={{ textDecoration: "underline" }}
            >
              la Política de tratamiento de datos
            </a>
          </label>
        </div>
        <div className=" shadow-[-8px_-8px__16px_rgb(rgba(0,122,248,0.16))] shadow-[#4676C31C] rounded-[32px]  drop-shadow-[-8px_-8px__16px_rgb(rgba(0,122,248,0.16))] ">
          <button
            className={`w-full h-12 rounded-[32px] drop-shadow-[-8px_-8px__16px_rgb(rgba(0,122,248,0.16))] bg-gradient-to-b from-[#05BCFD] to-[#0599FB]  text-[16px]  text-white  shadow-xl shadow-[#4676C31C]    ${
              !acepTerminos && "opacity-50 cursor-not-allowed"
            } `}
            disabled={!acepTerminos}
          >
            Enviar
          </button>
        </div>
      </form>
    </>
  );
};
export default ConctaForm;
