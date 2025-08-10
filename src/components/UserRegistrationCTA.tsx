import React from 'react';

const UserRegistrationCTA = () => {
  return (
    <section className="flex flex-col items-center gap-20 self-stretch bg-background px-16 py-28 max-md:px-8 max-md:py-20 max-sm:px-4 max-sm:py-[60px]">
      <div className="flex max-w-screen-xl mx-auto flex-col items-start gap-20 self-stretch">
        <div className="flex items-center gap-8 self-stretch bg-[#F2F2F2] p-12 rounded-2xl border-0 border-solid border-[rgba(7,10,4,0.15)] max-md:flex-col max-md:gap-6 max-md:p-8 max-sm:p-6">
          <div className="flex flex-col items-start gap-6 flex-[1_0_0]">
            <h2 className="self-stretch text-foreground text-[44px] font-medium leading-[52.8px] tracking-[-0.44px] max-md:text-4xl max-sm:text-[28px]">
              Ver tu historial de Evaluaciones
            </h2>
            <p className="self-stretch text-foreground text-lg font-normal leading-[27px] max-sm:text-base">
              Disponible solo para usuarios registrados, para ver y descargar
              tus resultados anteriores en PDF.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <button className="flex justify-center items-center gap-2 cursor-pointer rounded-xl border-none bg-jade hover:bg-jade-hover text-jade-foreground px-6 py-3 transition-colors">
              <span className="text-base font-medium leading-6">
                Registrar
              </span>
            </button>
            <button className="flex justify-center items-center gap-2 cursor-pointer rounded-xl border-none bg-transparent hover:bg-muted px-6 py-3 transition-colors">
              <span className="text-foreground text-base font-medium leading-6">
                Login
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserRegistrationCTA;
