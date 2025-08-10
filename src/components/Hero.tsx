import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col items-center gap-20 self-stretch min-h-[824px] bg-background px-16 py-0 max-md:px-8 max-md:py-0 max-sm:px-4 max-sm:py-0">
      <div className="flex max-w-screen-xl mx-auto flex-col items-start gap-20 flex-[1_0_0] self-stretch pt-20">
        <div className="flex items-center flex-[1_0_0] self-stretch gap-20 max-md:flex-col max-md:gap-10">
          <div className="flex flex-col justify-center items-start gap-8 flex-[1_0_0] self-stretch pr-20">
            <div className="flex flex-col items-start gap-6 self-stretch">
              <h1 className="self-stretch text-foreground text-7xl font-medium leading-[86.4px] tracking-[-0.72px] max-md:text-5xl max-sm:text-[32px]">
                Plataforma de predicción diabetes tipo 2
              </h1>
              <div className="flex items-start content-start gap-6 self-stretch flex-wrap">
                <p className="w-[560px] text-foreground text-lg font-normal leading-[27px] max-md:w-full max-sm:text-base">
                  Nuestra plataforma te ayuda a evaluar tu riesgo de diabetes
                  tipo 2 de manera sencilla y accesible. Completa el
                  formulario y obtén resultados claros que te guiarán hacia
                  una vida más saludable.
                </p>
                <div className="flex items-start gap-2.5">
                  <div className="flex items-start gap-4">
                    <button className="flex justify-center items-center gap-2 cursor-pointer rounded-xl border-none bg-transparent hover:bg-muted px-4 py-2 transition-colors">
                      <span className="text-foreground text-base font-medium leading-6">
                        + Info
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[900px] items-start gap-4 flex-[1_0_0] overflow-hidden max-md:h-[400px] max-sm:h-[300px]">
            <div className="flex w-[311px] flex-col items-start gap-4 animate-scroll-up max-sm:w-[150px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/e0cd105e136963102bad3144545ef8ddd323d438?width=623"
                alt="Diabetes prevention lifestyle"
                className="h-[332px] shrink-0 self-stretch aspect-[77/82] object-cover rounded-2xl max-sm:h-[180px]"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/3fb29a29ec429d1fd1fbdf5fab8dfd498d4119aa?width=623"
                alt="Healthy eating habits"
                className="h-[332px] shrink-0 self-stretch aspect-[77/82] object-cover rounded-2xl max-sm:h-[180px]"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a31cac47bce4444552e2ff9c6fae643a320bb05f?width=623"
                alt="Medical consultation"
                className="h-[332px] shrink-0 self-stretch aspect-[77/82] object-cover rounded-2xl max-sm:h-[180px]"
              />
            </div>
            <div className="flex w-[311px] flex-col items-start gap-4 animate-scroll-up max-sm:w-[150px]" style={{animationDelay: '10s'}}>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/815ee8cf1c2297c4345e546cf48fc80c31ece1dc?width=623"
                alt="Exercise and fitness"
                className="h-[332px] shrink-0 self-stretch aspect-[77/82] object-cover rounded-2xl max-sm:h-[180px]"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/284ac0c86d21cd06a492cc43bbb82e6b445492a8?width=623"
                alt="Health monitoring"
                className="h-[332px] shrink-0 self-stretch aspect-[77/82] object-cover rounded-2xl max-sm:h-[180px]"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/9f3d0ea1036fbb8e40016ab72e59436cfdbc9e41?width=623"
                alt="Diabetes awareness"
                className="h-[332px] shrink-0 self-stretch aspect-[77/82] object-cover rounded-2xl max-sm:h-[180px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
