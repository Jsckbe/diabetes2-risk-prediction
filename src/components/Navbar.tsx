import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import DropdownMenu from './DropdownMenu';

const Navbar = () => {
  const { user, logout } = useAuth();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="flex flex-col items-center self-stretch bg-background">
      <div className="flex h-[72px] justify-between items-center self-stretch px-16 py-0 max-md:px-8 max-md:py-0 max-sm:px-4 max-sm:py-0">
        <div className="flex w-full max-w-[1334px] mx-auto items-center justify-between">
          <Link to="/" className="flex w-[120px] h-12 justify-center items-center shrink-0 pl-[6.667px] pr-[7.333px] py-0">
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    "<svg id=\"I11207:53346;4727:53042\" layer-name=\"Logo-wide 1\" width=\"71\" height=\"36\" viewBox=\"0 0 71 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"logo\" style=\"width: 70px; height: 36px; flex-shrink: 0\"> <g clip-path=\"url(#clip0_13203_435)\"> <path d=\"M67.9112 17.0816L67.8741 17.1188C68.1343 16.4126 68.6546 16.1524 69.1006 16.1524C69.7325 16.1524 70.29 16.6356 70.29 17.3418C70.29 17.4905 70.29 17.6763 70.2157 17.8993C68.9148 21.2445 66.1643 22.9542 63.4882 23.2144C62.2617 25.2958 60.2546 26.8197 57.3926 26.8197C53.3041 26.8197 51.4829 23.5861 51.4829 20.0551C51.4829 15.7064 54.2334 10.8745 58.8422 10.8745C59.8457 10.8745 60.7006 11.0976 61.4068 11.3949C63.4882 12.1754 64.8263 14.8887 64.8263 17.7878C64.8263 18.717 64.7519 19.6462 64.5289 20.5383C65.9042 20.0551 67.205 18.94 67.9112 17.0816ZM60.1431 13.9223V13.8852C59.3254 13.8852 58.8422 14.963 58.8422 16.2639C58.8422 18.1595 59.8829 19.9064 61.5183 20.5383C61.7785 19.7206 61.89 18.7914 61.89 17.7135C61.89 15.6321 61.2581 13.9223 60.1431 13.9223ZM57.4298 24.1064C58.4705 24.1064 59.5112 23.6604 60.3289 22.7312C57.913 21.6533 56.3891 19.1259 56.3891 16.7099C56.3891 15.8922 56.5378 15.0374 56.7608 14.294C55.2741 15.5206 54.4192 17.9365 54.4192 20.0551C54.4192 22.8055 55.7201 24.1064 57.4298 24.1064Z\" fill=\"#070A04\"></path> <path d=\"M52.0568 17.0813L52.0196 17.1185C52.2798 16.4123 52.7258 16.115 53.1718 16.115C53.8037 16.115 54.4355 16.6725 54.4355 17.3787C54.4355 17.5645 54.3984 17.7132 54.324 17.899C52.8745 21.43 50.7187 25.5557 47.2621 27.9716L47.1878 28.715C46.7789 33.1752 44.5117 35.9999 41.6497 35.9999C39.4939 35.9999 38.2302 34.5132 38.2302 32.7663C38.2302 29.607 41.4638 28.4548 44.4745 26.5221C44.5488 25.7415 44.586 24.8495 44.6231 23.8459C43.1364 25.4813 41.5382 26.1504 40.1258 26.1504C37.301 26.1504 34.9966 23.8459 34.9966 20.315C34.9966 14.8884 38.5647 11.3203 42.5417 11.3203H42.5789C45.2922 11.3203 48.1913 12.7698 48.1913 15.3716C48.1913 16.2265 47.8196 20.8725 47.5223 24.4778C49.5293 22.5822 51.2019 19.4973 52.0568 17.0813ZM40.5346 23.4743C41.9099 23.4743 43.7683 22.6194 44.9205 18.4194C45.1063 17.4902 45.2178 16.6725 45.1807 15.7061C44.9577 14.7026 44.1028 14.1079 42.8762 14.1079C40.3488 14.1079 37.9329 16.5238 37.9329 20.2035C37.9329 22.4336 38.9736 23.4743 40.5346 23.4743ZM41.947 33.2867H41.9842C42.7647 33.2867 43.6196 32.7663 44.1771 29.4212C42.5417 30.3875 41.0178 31.3539 41.0178 32.5061C41.0178 32.9893 41.3895 33.2867 41.947 33.2867Z\" fill=\"#070A04\"></path> <path d=\"M35.6485 17.0816L35.6114 17.1188C35.8715 16.4126 36.3919 16.1524 36.8379 16.1524C37.4698 16.1524 38.0273 16.6356 38.0273 17.3418C38.0273 17.4905 38.0273 17.6763 37.953 17.8993C36.6521 21.2445 33.9016 22.9542 31.2255 23.2144C29.999 25.2958 27.9919 26.8197 25.1299 26.8197C21.0414 26.8197 19.2202 23.5861 19.2202 20.0551C19.2202 15.7064 21.9706 10.8745 26.5795 10.8745C27.583 10.8745 28.4379 11.0976 29.1441 11.3949C31.2255 12.1754 32.5636 14.8887 32.5636 17.7878C32.5636 18.717 32.4892 19.6462 32.2662 20.5383C33.6415 20.0551 34.9423 18.94 35.6485 17.0816ZM27.8804 13.9223V13.8852C27.0627 13.8852 26.5795 14.963 26.5795 16.2639C26.5795 18.1595 27.6202 19.9064 29.2556 20.5383C29.5158 19.7206 29.6273 18.7914 29.6273 17.7135C29.6273 15.6321 28.9954 13.9223 27.8804 13.9223ZM25.1671 24.1064C26.2078 24.1064 27.2485 23.6604 28.0662 22.7312C25.6503 21.6533 24.1264 19.1259 24.1264 16.7099C24.1264 15.8922 24.2751 15.0374 24.4981 14.294C23.0114 15.5206 22.1565 17.9365 22.1565 20.0551C22.1565 22.8055 23.4574 24.1064 25.1671 24.1064Z\" fill=\"#070A04\"></path> <path d=\"M21.1094 15.9085C20.589 15.9085 20.143 16.1687 19.8456 16.8749C18.8793 19.328 16.8721 23.4909 14.8278 23.4909C13.5406 23.4909 12.5445 23.1998 11.5379 22.9056C10.51 22.6052 9.47117 22.3015 8.10028 22.3015C7.61708 22.3015 6.94804 22.3759 6.31617 22.4874C8.21975 19.8916 8.93089 16.7479 9.61997 10.8056C8.32251 10.723 7.2671 10.4833 6.49782 10.2412C5.67617 17.7777 4.74311 20.6513 1.33554 23.4909C0.889514 23.8626 0.666504 24.383 0.666504 24.9034C0.666504 25.7211 1.37272 26.4273 2.26477 26.4273C2.56212 26.4273 2.89663 26.3158 3.23115 26.1671C5.12677 25.3122 6.279 25.0892 7.69142 25.0892C8.58959 25.0892 9.66433 25.3461 10.815 25.621C12.1404 25.9378 13.5665 26.2786 14.9394 26.2786C17.95 26.2786 19.92 23.3423 22.1129 17.6554C22.2245 17.4696 22.2616 17.2466 22.2616 17.0607C22.2616 16.3545 21.7041 15.9085 21.1094 15.9085Z\" fill=\"#070A04\"></path> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.68617 8.70287C7.35926 8.93784 8.41008 9.2114 9.77251 9.29233L9.99552 9.29222C14.1956 9.29222 16.9461 6.6904 16.9461 3.56821C16.9461 1.56109 15.385 0 13.192 0C10.2557 0 8.21142 2.00712 7.17069 5.98419C5.86978 5.27798 4.97773 4.01424 4.5317 2.41598C4.30868 1.63543 3.82549 1.15223 3.15644 1.15223C2.33873 1.15223 1.81836 1.78411 1.81836 2.63899C1.81836 5.16648 3.78832 7.58245 6.68749 8.69752L6.68617 8.70287ZM10.2185 6.57889C10.776 4.01424 11.6681 2.78767 12.8575 2.78767C13.4894 2.78767 13.8982 3.15936 13.8982 3.8284C13.8982 5.05497 12.5973 6.50455 10.2185 6.57889Z\" fill=\"#070A04\"></path> </g> <defs> <clipPath id=\"clip0_13203_435\"> <rect width=\"70\" height=\"36\" fill=\"white\" transform=\"translate(0.666504)\"></rect> </clipPath> </defs> </svg>",
                }}
              />
            </div>
          </Link>
          <nav className="flex items-center gap-6 max-sm:hidden">
            <div className="flex items-center gap-8 max-md:hidden">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-foreground text-base font-normal leading-6 cursor-pointer hover:text-muted-foreground transition-colors px-4 py-2 rounded-lg hover:bg-button-secondary"
              >
                Inicio Rápido
              </button>
              <button 
                onClick={() => scrollToSection('contact-form')}
                className="text-foreground text-base font-normal leading-6 cursor-pointer hover:text-muted-foreground transition-colors px-4 py-2 rounded-lg hover:bg-button-secondary"
              >
                Evaluar Riesgo
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-foreground text-base font-normal leading-6 cursor-pointer hover:text-muted-foreground transition-colors px-4 py-2 rounded-lg hover:bg-button-secondary"
              >
                Centro Ayuda
              </button>
              <DropdownMenu />
            </div>
          </nav>
          
          {user ? (
            <div className="flex justify-center items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-jade rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-jade-foreground">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <span className="text-foreground text-base font-medium">{user.name}</span>
              </div>
              <button 
                onClick={logout}
                className="flex justify-center items-center gap-2 cursor-pointer rounded-xl border-none bg-button-secondary hover:bg-button-secondary-hover text-button-secondary-foreground px-4 py-2 transition-colors"
              >
                <span className="text-base font-medium leading-6">
                  Cerrar Sesión
                </span>
              </button>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-4">
              <Link to="/login">
                <button className="flex justify-center items-center gap-2 cursor-pointer rounded-xl border-none bg-button-secondary hover:bg-button-secondary-hover text-button-secondary-foreground px-4 py-2 transition-colors">
                  <span className="text-base font-medium leading-6">
                    Login
                  </span>
                </button>
              </Link>
              <Link to="/register">
                <button className="flex justify-center items-center gap-2 cursor-pointer rounded-xl border-none bg-jade hover:bg-jade-hover text-jade-foreground px-4 py-2 transition-colors">
                  <span className="text-base font-medium leading-6">
                    Registrarse
                  </span>
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
