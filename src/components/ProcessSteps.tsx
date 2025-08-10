import React from 'react';

const ProcessSteps = () => {
  return (
    <section className="flex flex-col items-center gap-20 self-stretch bg-background px-16 py-28 max-md:px-8 max-md:py-20 max-sm:px-4 max-sm:py-[60px]">
      <div className="flex max-w-screen-xl mx-auto flex-col items-center gap-20 self-stretch">
        <header className="flex max-w-screen-md flex-col items-center gap-4 self-stretch">
          <div className="flex items-center">
            <span className="text-foreground text-base font-semibold leading-6">
              Evalúa
            </span>
          </div>
          <div className="flex flex-col items-center gap-6 self-stretch">
            <h2 className="self-stretch text-foreground text-center text-[52px] font-medium leading-[62.4px] tracking-[-0.52px] max-md:text-4xl max-sm:text-[28px]">
              Descubre tu riesgo de diabetes fácilmente
            </h2>
            <p className="self-stretch text-foreground text-center text-lg font-normal leading-[27px] max-sm:text-base">
              Completa el formulario con tus datos personales y clínicos.
              Obtén un análisis claro y visual de tu riesgo de diabetes tipo
              2.
            </p>
          </div>
        </header>
        <div className="flex flex-col items-start gap-16 self-stretch">
          <div className="flex justify-center items-start gap-12 self-stretch max-md:flex-col max-md:gap-8">
            <article className="flex flex-col justify-center items-center gap-8 flex-[1_0_0]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/7a5e0d87e2f9e3e514d22f2fe86f877f04615e80?width=714"
                alt="Data collection form interface"
                className="w-[357px] h-[211px] aspect-[357/211] object-cover rounded-2xl max-md:w-full max-md:max-w-[357px]"
              />
              <div className="flex flex-col items-center gap-6 self-stretch">
                <h3 className="self-stretch text-foreground text-center text-4xl font-medium leading-[46.8px] tracking-[-0.36px] max-sm:text-2xl">
                  Datos necesarios para la evaluación
                </h3>
                <p className="self-stretch text-foreground text-center text-base font-normal leading-6">
                  Deberá ingresar su edad, sexo, medidas y otros datos más.
                </p>
              </div>
            </article>
            <article className="flex flex-col justify-center items-center gap-8 flex-[1_0_0]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/697294b461cfb4d5d9cbe138df7a2b0d4fd69772?width=712"
                alt="Risk analysis visualization"
                className="w-[357px] h-[211px] aspect-[357/211] object-cover rounded-2xl max-md:w-full max-md:max-w-[357px]"
              />
              <div className="flex flex-col items-center gap-6 self-stretch">
                <h3 className="self-stretch text-[#070A04] text-center text-4xl font-medium leading-[46.8px] tracking-[-0.36px] max-sm:text-2xl">
                  Información sobre el riesgo de diabetes
                </h3>
                <p className="self-stretch text-[#070A04] text-center text-base font-normal leading-6">
                  Conoce cómo tus hábitos afectan tu salud.
                </p>
              </div>
            </article>
            <article className="flex flex-col justify-center items-center gap-8 flex-[1_0_0]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/c65ca3f98a30d95da582f53994e68b757e3ec851?width=714"
                alt="Start evaluation button interface"
                className="w-[357px] h-[211px] aspect-[357/211] object-cover rounded-2xl max-md:w-full max-md:max-w-[357px]"
              />
              <div className="flex flex-col items-center gap-6 self-stretch">
                <h3 className="self-stretch text-[#070A04] text-center text-4xl font-medium leading-[46.8px] tracking-[-0.36px] max-sm:text-2xl">
                  Inicia tu evaluación ahora
                </h3>
                <p className="self-stretch text-[#070A04] text-center text-base font-normal leading-6">
                  Haz clic en el botón para comenzar.
                </p>
              </div>
            </article>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="flex justify-center items-center gap-2 cursor-pointer rounded-xl border-none bg-jade hover:bg-jade-hover text-jade-foreground px-6 py-3 transition-colors">
            <span className="text-base font-medium leading-6">
              Iniciar
            </span>
          </button>
          <button className="flex justify-center items-center gap-2 cursor-pointer rounded-xl border-none bg-transparent hover:bg-muted px-4 py-2 transition-colors">
            <span className="text-foreground text-base font-medium leading-6">
              Ayuda
            </span>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"chevron-right\"> <path d=\"M9.38721 6.67285C9.48803 6.67285 9.56501 6.70326 9.64307 6.78125L14.5874 11.7256C14.6413 11.7795 14.6665 11.8215 14.6782 11.8496V11.8506C14.693 11.8861 14.7017 11.9259 14.7017 11.9746C14.7017 12.0233 14.693 12.0631 14.6782 12.0986V12.0996C14.6665 12.1277 14.6413 12.1697 14.5874 12.2236L9.61865 17.1924C9.54088 17.2702 9.47374 17.292 9.39307 17.2891C9.29904 17.2856 9.21818 17.2537 9.13232 17.168C9.0542 17.0898 9.02295 17.013 9.02295 16.9121C9.02295 16.8112 9.0542 16.7344 9.13232 16.6562L13.814 11.9746L9.10693 7.26758C9.02927 7.18988 9.00733 7.12357 9.01025 7.04297C9.0137 6.9487 9.04627 6.86731 9.13232 6.78125C9.21025 6.70344 9.28662 6.67293 9.38721 6.67285Z\" fill=\"#070A04\" stroke=\"#070A04\"></path> </svg>",
              }}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
