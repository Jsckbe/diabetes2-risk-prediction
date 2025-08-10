import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const faqData: FAQItem[] = [
    {
      question: "¿Cómo funciona la evaluación?",
      answer: "La evaluación se realiza a través de un formulario donde ingresas tus datos clínicos y demográficos. Utilizamos inteligencia artificial para calcular tu riesgo de diabetes tipo 2. Al finalizar, recibirás un resultado claro y recomendaciones personalizadas."
    },
    {
      question: "¿Es seguro usarlo?",
      answer: "Sí, tu información está protegida y se maneja de acuerdo con las leyes de privacidad. Implementamos medidas de seguridad para garantizar que tus datos estén a salvo. Puedes eliminar tu historial en cualquier momento."
    },
    {
      question: "¿Qué datos necesito?",
      answer: "Necesitarás proporcionar información como tu edad, sexo, IMC y antecedentes familiares. Estos datos son esenciales para realizar una evaluación precisa. Asegúrate de tenerlos a mano antes de comenzar."
    },
    {
      question: "¿Qué sucede después?",
      answer: "Después de completar la evaluación, recibirás un informe con tu nivel de riesgo. También tendrás la opción de registrarte para guardar tu historial y descargar un PDF. Esto te permitirá hacer un seguimiento de tu salud a lo largo del tiempo."
    },
    {
      question: "¿Puedo actualizar mis datos?",
      answer: "Sí, puedes actualizar tu perfil en cualquier momento. Simplemente inicia sesión y dirígete a la sección de 'Actualizar Perfil'. Asegúrate de mantener tu información actualizada para obtener resultados más precisos."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="flex flex-col items-center gap-20 self-stretch bg-white px-16 py-28 max-md:px-8 max-md:py-20 max-sm:px-4 max-sm:py-[60px]">
      <div className="flex max-w-screen-xl flex-col items-start gap-20 self-stretch">
        <div className="flex items-start gap-20 self-stretch max-md:flex-col max-md:gap-10 max-sm:flex-col max-sm:gap-8">
          <div className="flex w-[500px] flex-col items-start gap-8 max-sm:w-full">
            <div className="flex flex-col items-start gap-6 self-stretch">
              <h2 className="self-stretch text-[#070A04] text-[52px] font-medium leading-[62.4px] tracking-[-0.52px] max-md:text-4xl max-sm:text-[28px]">
                Preguntas
              </h2>
              <p className="self-stretch text-[#070A04] text-lg font-normal leading-[27px] max-sm:text-base">
                Aquí encontrarás respuestas a las preguntas más comunes sobre
                nuestra plataforma y la diabetes.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <button className="flex justify-center items-center gap-2 cursor-pointer rounded-xl border-none bg-transparent hover:bg-gray-100 px-4 py-2 transition-colors">
                <span className="text-[#070A04] text-base font-medium leading-6">
                  Contactar
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 flex-[1_0_0]">
            {faqData.map((item, index) => (
              <article key={index} className="flex flex-col items-start self-stretch bg-[#F2F2F2] rounded-2xl border-0 border-solid border-[rgba(7,10,4,0.15)]">
                <button
                  onClick={() => toggleItem(index)}
                  className="flex items-center gap-6 self-stretch cursor-pointer px-6 py-5 max-sm:px-5 max-sm:py-4 w-full text-left bg-transparent border-none"
                  aria-expanded={openItems.includes(index)}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="flex-[1_0_0] text-[#070A04] text-lg font-bold leading-[27px] max-sm:text-base">
                    {item.question}
                  </h3>
                  <div className="transform transition-transform duration-200" style={{
                    transform: openItems.includes(index) ? 'rotate(45deg)' : 'rotate(0deg)'
                  }}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          "<svg width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"accordion-icon\"> <path d=\"M17.5996 6.4248C17.7639 6.4248 17.8659 6.47331 17.9463 6.55371C18.0265 6.63402 18.0751 6.73551 18.0752 6.89941C18.0752 7.06362 18.0266 7.16571 17.9463 7.24609L12.6924 12.5L13.0459 12.8535L17.9463 17.7529C18.0267 17.8333 18.0752 17.9355 18.0752 18.0996C18.0752 18.2639 18.0267 18.3659 17.9463 18.4463C17.8659 18.5267 17.7639 18.5752 17.5996 18.5752C17.4355 18.5752 17.3333 18.5267 17.2529 18.4463L12.3535 13.5459L12 13.1924L6.74609 18.4463C6.66571 18.5266 6.56362 18.5752 6.39941 18.5752C6.23551 18.5751 6.13402 18.5265 6.05371 18.4463C5.97331 18.3659 5.9248 18.2639 5.9248 18.0996C5.92484 17.9355 5.97334 17.8333 6.05371 17.7529L11.3066 12.5L10.9531 12.1465L6.05371 7.24609C5.97331 7.16569 5.9248 7.06368 5.9248 6.89941C5.92488 6.73537 5.97337 6.63405 6.05371 6.55371C6.13405 6.47337 6.23537 6.42488 6.39941 6.4248C6.56368 6.4248 6.66569 6.47331 6.74609 6.55371L11.6465 11.4531L12 11.8066L17.2529 6.55371C17.3333 6.47334 17.4355 6.42484 17.5996 6.4248Z\" fill=\"#070A04\" stroke=\"#070A04\"></path> </svg>",
                      }}
                    />
                  </div>
                </button>
                {openItems.includes(index) && (
                  <div
                    id={`faq-answer-${index}`}
                    className="flex items-start gap-4 self-stretch pt-0 pb-6 px-6 max-sm:pt-0 max-sm:pb-5 max-sm:px-5"
                  >
                    <p className="flex-[1_0_0] text-[#070A04] text-base font-normal leading-6 max-sm:text-sm">
                      {item.answer}
                    </p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
