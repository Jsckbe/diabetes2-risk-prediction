import React from 'react';

const ContactInfo = () => {
  return (
    <section className="flex flex-col items-center gap-20 self-stretch bg-background px-16 py-28 max-md:px-8 max-md:py-20 max-sm:px-4 max-sm:py-[60px]">
      <div className="flex max-w-screen-xl mx-auto flex-col items-start gap-20 self-stretch">
        <header className="flex max-w-screen-md flex-col items-start gap-4 self-stretch">
          <div className="flex items-center">
            <span className="text-[#070A04] text-base font-semibold leading-6">
              Contáctanos
            </span>
          </div>
          <div className="flex flex-col items-start gap-6 self-stretch">
            <h2 className="self-stretch text-[#070A04] text-[52px] font-medium leading-[62.4px] tracking-[-0.52px] max-md:text-4xl max-sm:text-[28px]">
              Contáctanos
            </h2>
            <p className="self-stretch text-[#070A04] text-lg font-normal leading-[27px] max-sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </header>
        <div className="flex items-start gap-20 self-stretch max-md:flex-col max-md:gap-10">
          <div className="flex max-w-[400px] flex-col items-start gap-10 flex-[1_0_0] self-stretch max-sm:max-w-full">
            <article className="flex flex-col items-start gap-4 self-stretch">
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"contact-icon\"> <path d=\"M4.73877 5.62598H27.2612C27.7386 5.62598 28.1473 5.79505 28.5093 6.15723C28.8715 6.51923 29.0405 6.92792 29.0405 7.40527V24.5947C29.0405 25.0693 28.8713 25.4753 28.5093 25.8359C28.1474 26.1967 27.7391 26.3662 27.2612 26.3662H4.73877C4.32308 26.3662 3.95997 26.2367 3.63428 25.9629L3.49658 25.8369C3.13594 25.4765 2.96729 25.0698 2.96729 24.5947V7.40527L2.9751 7.22852C3.01244 6.8256 3.18122 6.47365 3.49658 6.15723H3.49756C3.85816 5.7952 4.26423 5.62598 4.73877 5.62598ZM4.23877 7.56543V25.0947H27.7612V8.49414L26.9868 9.00391L16.3657 15.9961C16.2804 16.0409 16.2047 16.077 16.1372 16.1035C16.116 16.1119 16.0731 16.123 15.9995 16.123C15.9262 16.123 15.884 16.1118 15.8628 16.1035C15.7951 16.0769 15.719 16.0411 15.6333 15.9961L5.23877 9.15234V8.2207L15.7261 15.0898L15.9995 15.2695L16.2729 15.0898L27.4019 7.82324L28.8081 6.90527H3.229L4.23877 7.56543Z\" fill=\"#070A04\" stroke=\"#070A04\"></path> </svg>",
                  }}
                />
              </div>
              <div className="flex flex-col items-start gap-2 self-stretch">
                <h3 className="self-stretch text-foreground text-[22px] font-medium leading-[30.8px] tracking-[-0.22px]">
                  Correo
                </h3>
                <p className="self-stretch text-foreground text-base font-normal leading-6">
                  Contactanos para cualquier consulta sobre diabetes y salud
                </p>
                <a
                  href="mailto:soporte@diabetes.com"
                  className="self-stretch text-foreground text-base font-normal leading-6 underline hover:text-muted-foreground transition-colors"
                >
                  soporte@diabetes.com
                </a>
              </div>
            </article>
            <article className="flex flex-col items-start gap-4 self-stretch">
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"contact-icon\"> <path d=\"M5.49219 4.29297H10.1592C10.443 4.29305 10.6544 4.37934 10.8271 4.54199C11.02 4.72357 11.1657 4.97248 11.251 5.3125L12.1406 9.34082C12.1876 9.6688 12.1778 9.93944 12.125 10.1611C12.076 10.3672 11.977 10.5392 11.8213 10.6875L11.8154 10.6943L8.45801 14.0049L8.17871 14.2803L8.37891 14.6172C8.94471 15.568 9.54572 16.458 10.1816 17.2871C10.8204 18.1199 11.5295 18.912 12.3086 19.6631C13.1222 20.5033 13.9724 21.2654 14.8594 21.9482C15.7523 22.6357 16.6849 23.2372 17.6572 23.752L17.9883 23.9277L18.25 23.6592L21.4561 20.3691L21.4658 20.3584C21.6699 20.1369 21.8905 19.9983 22.1299 19.9268L22.1309 19.9277C22.3249 19.8702 22.5182 19.8482 22.7129 19.8623L22.9082 19.8887L26.6816 20.7236C27.0067 20.8142 27.2514 20.9736 27.4365 21.1973C27.6175 21.4158 27.707 21.6631 27.707 21.96V26.5078C27.707 26.8656 27.5922 27.1386 27.3672 27.3613C27.1394 27.5866 26.8661 27.6992 26.5156 27.6992C23.988 27.6991 21.4042 27.0919 18.7598 25.8633C16.1162 24.6351 13.6588 22.8892 11.3887 20.6191C9.26066 18.4911 7.5924 16.1973 6.37793 13.7383L6.14062 13.2451L5.91699 12.749C4.83546 10.2746 4.30078 7.85669 4.30078 5.49219C4.3008 5.17911 4.38859 4.92968 4.56152 4.7207L4.64062 4.63379C4.86557 4.40761 5.13813 4.29297 5.49219 4.29297ZM5.58789 6.09375C5.6286 7.03203 5.77615 8.01839 6.02734 9.05176C6.28008 10.0914 6.67748 11.2422 7.21387 12.501L7.50293 13.1797L8.02637 12.6592L10.7178 9.98145L10.9111 9.78906L10.8545 9.52246L10.0957 5.96777L10.0117 5.57227H5.56543L5.58789 6.09375ZM26.4287 21.9717L26.0293 21.8896L22.7158 21.2041L22.4443 21.1475L22.2529 21.3486L19.6357 24.0918L19.1543 24.5957L19.7861 24.8896C20.7022 25.3158 21.6963 25.6624 22.7666 25.9307C23.8382 26.1992 24.884 26.3605 25.9033 26.4121L26.4287 26.4385V21.9717Z\" fill=\"#070A04\" stroke=\"#070A04\"></path> </svg>",
                  }}
                />
              </div>
              <div className="flex flex-col items-start gap-2 self-stretch">
                <h3 className="self-stretch text-foreground text-[22px] font-medium leading-[30.8px] tracking-[-0.22px]">
                  Teléfono
                </h3>
                <p className="self-stretch text-foreground text-base font-normal leading-6">
                  Atención personalizada de lunes a viernes
                </p>
                <a
                  href="tel:+51999999999"
                  className="self-stretch text-foreground text-base font-normal leading-6 underline hover:text-muted-foreground transition-colors"
                >
                  +51 999 999 999
                </a>
              </div>
            </article>
            
            <div className="flex flex-col items-start gap-4 self-stretch">
              <h3 className="text-foreground text-[22px] font-medium leading-[30.8px] tracking-[-0.22px]">
                Síguenos
              </h3>
              <div className="flex items-center gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-button-secondary hover:bg-button-secondary-hover transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-button-secondary hover:bg-button-secondary-hover transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-button-secondary hover:bg-button-secondary-hover transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.328-1.297L6.468 14.34c.467.637 1.203 1.05 2.034 1.05c1.376 0 2.498-1.111 2.498-2.498c0-1.376-1.122-2.498-2.498-2.498c-.831 0-1.567.414-2.034 1.05L4.121 9.993c.88-.806 2.031-1.297 3.328-1.297c2.664 0 4.83 2.166 4.83 4.83c0 2.664-2.166 4.462-4.83 4.462z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-start gap-8 flex-[1_0_0] max-md:w-full">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/contact-support-image.jpg?width=600"
              alt="Equipo de soporte médico especializado en diabetes"
              className="w-full h-[400px] object-cover rounded-2xl"
            />
            <div className="flex flex-col items-start gap-4 self-stretch">
              <h3 className="text-foreground text-[22px] font-medium leading-[30.8px] tracking-[-0.22px]">
                ¿Necesitas ayuda?
              </h3>
              <p className="text-foreground text-base font-normal leading-6">
                Nuestro equipo de especialistas está disponible para resolver todas tus dudas sobre diabetes y el uso de nuestra plataforma.
              </p>
              <a
                href="#faq"
                className="flex items-center gap-2 text-jade hover:text-jade-hover transition-colors"
              >
                <span className="text-base font-medium">Ver preguntas frecuentes</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
