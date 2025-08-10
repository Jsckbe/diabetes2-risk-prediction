import React, { useState } from 'react';

interface FormData {
  age: string;
  gender: string;
  waist: string;
  familyHistory: string;
  education: string;
  ethnicity: string;
  bmi: string;
  smoking: string;
  physicalActivity: string;
  diabetesDiagnosis: string;
  monthlyIncome: string;
  consent: boolean;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    age: '',
    gender: '',
    waist: '',
    familyHistory: '',
    education: '',
    ethnicity: '',
    bmi: '',
    smoking: '',
    physicalActivity: '',
    diabetesDiagnosis: '',
    monthlyIncome: '',
    consent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <section className="flex justify-end items-center self-stretch min-h-[1000px] bg-white px-16 py-28 max-md:px-8 max-md:py-20 max-sm:px-4 max-sm:py-[60px]">
      <div className="w-full max-w-screen-xl relative mx-auto my-0 max-sm:p-0">
        <header className="flex flex-col justify-center items-start gap-4 max-w-[822px] mb-10 max-sm:mb-6">
          <div className="flex items-center">
            <span className="text-[#070A04] text-base font-semibold leading-6">
              Salud y Bienestar
            </span>
          </div>
          <div className="flex flex-col items-start gap-[27px] self-stretch">
            <h2 className="self-stretch text-[#070A04] text-[52px] font-medium leading-[62.4px] tracking-[-0.52px] max-md:text-4xl max-sm:text-[28px]">
              Modelo Predictivo para la Detección de Diabetes
            </h2>
            <p className="self-stretch text-[#070A04] text-lg font-normal leading-[27px] max-sm:text-base">
              Evalúe su riesgo de diabetes de manera sencilla Ingrese sus
              datos:
            </p>
          </div>
        </header>
        <form onSubmit={handleSubmit} className="w-full max-w-[614px] flex flex-col gap-6">
          <div className="flex justify-start items-start gap-6 w-full max-md:flex-col max-md:gap-4">
            <div className="flex flex-col items-start gap-2 flex-1">
              <label htmlFor="age" className="self-stretch text-[#070A04] text-base font-normal leading-6">
                Edad
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="Su edad actual"
                className="flex items-center gap-2 self-stretch border bg-[rgba(7,10,4,0.05)] px-3 py-2 rounded-xl border-solid border-[rgba(255,255,255,0.00)] text-[#070A04] placeholder:text-[rgba(7,10,4,0.60)]"
                required
              />
            </div>
            <div className="flex flex-col items-start gap-2 flex-1">
              <label htmlFor="gender" className="self-stretch text-[#070A04] text-base font-normal leading-6">
                Sexo
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="flex items-center gap-2 self-stretch border bg-[rgba(7,10,4,0.05)] px-3 py-2 rounded-xl border-solid border-[rgba(255,255,255,0.00)] text-[#070A04]"
                required
              >
                <option value="">Indique su género (M/F)</option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
              </select>
            </div>
          </div>

          <div className="flex justify-start items-start gap-6 w-full max-md:flex-col max-md:gap-4">
            <div className="flex flex-col items-start gap-2 flex-1">
              <label htmlFor="waist" className="self-stretch text-[#070A04] text-base font-normal leading-6">
                Cintura
              </label>
              <input
                type="number"
                id="waist"
                name="waist"
                value={formData.waist}
                onChange={handleInputChange}
                placeholder="Medida de su cintura en cm"
                className="flex items-center gap-2 self-stretch border bg-[rgba(7,10,4,0.05)] px-3 py-2 rounded-xl border-solid border-[rgba(255,255,255,0.00)] text-[#070A04] placeholder:text-[rgba(7,10,4,0.60)]"
                required
              />
            </div>
            <fieldset className="flex flex-col items-start gap-2 flex-1">
              <legend className="self-stretch text-[#070A04] text-base font-normal leading-6">
                Historial familiar. Antecedentes de diabetes en su familia?(Si/No)
              </legend>
              <div className="flex items-center gap-6 mt-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="familyHistory"
                    value="Si"
                    checked={formData.familyHistory === 'Si'}
                    onChange={(e) => handleRadioChange('familyHistory', e.target.value)}
                    className="w-[18px] h-[18px] shrink-0 border bg-[rgba(7,10,4,0.05)] rounded-[100px] border-solid border-[rgba(255,255,255,0.00)]"
                    required
                  />
                  <span className="text-[#070A04] text-base font-normal leading-6">
                    Si
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="familyHistory"
                    value="No"
                    checked={formData.familyHistory === 'No'}
                    onChange={(e) => handleRadioChange('familyHistory', e.target.value)}
                    className="w-[18px] h-[18px] shrink-0 border bg-[rgba(7,10,4,0.05)] rounded-[100px] border-solid border-[rgba(255,255,255,0.00)]"
                  />
                  <span className="text-[#070A04] text-base font-normal leading-6">
                    No
                  </span>
                </label>
              </div>
            </fieldset>
          </div>

          <div className="flex flex-col items-start gap-2 flex-1">
            <label htmlFor="education" className="self-stretch text-[#070A04] text-base font-normal leading-6">
              Nivel educativo alcanzado
            </label>
            <select
              id="education"
              name="education"
              value={formData.education}
              onChange={handleInputChange}
              className="flex items-center gap-4 border self-stretch bg-[rgba(7,10,4,0.05)] px-3 py-2 rounded-xl border-solid border-[rgba(255,255,255,0.00)] text-[#070A04]"
              required
            >
              <option value="">(Primaria, Secundaria, Superior)...</option>
              <option value="Primaria">Primaria</option>
              <option value="Secundaria">Secundaria</option>
              <option value="Superior">Superior</option>
            </select>
          </div>

          <div className="flex justify-start items-start gap-6 w-full max-md:flex-col max-md:gap-4">
            <div className="flex flex-col items-start gap-2 flex-1">
              <label htmlFor="ethnicity" className="self-stretch text-[#070A04] text-base font-normal leading-6">
                Etnia
              </label>
              <input
                type="text"
                id="ethnicity"
                name="ethnicity"
                value={formData.ethnicity}
                onChange={handleInputChange}
                placeholder="Indique su grupo étnico"
                className="flex items-center gap-2 self-stretch border bg-[rgba(7,10,4,0.05)] px-3 py-2 rounded-xl border-solid border-[rgba(255,255,255,0.00)] text-[#070A04] placeholder:text-[rgba(7,10,4,0.60)]"
                required
              />
            </div>
            <div className="flex flex-col items-start gap-2 flex-1">
              <label htmlFor="bmi" className="self-stretch text-[#070A04] text-base font-normal leading-6">
                IMC
              </label>
              <input
                type="number"
                step="0.1"
                id="bmi"
                name="bmi"
                value={formData.bmi}
                onChange={handleInputChange}
                placeholder="Su índice de masa corporal"
                className="flex items-center gap-2 self-stretch border bg-[rgba(7,10,4,0.05)] px-3 py-2 rounded-xl border-solid border-[rgba(255,255,255,0.00)] text-[#070A04] placeholder:text-[rgba(7,10,4,0.60)]"
                required
              />
            </div>
          </div>

          <fieldset className="flex flex-col items-start gap-2 flex-1">
            <legend className="self-stretch text-[#070A04] text-base font-normal leading-6">
              Fuma actualmente
            </legend>
            <div className="flex items-center gap-6 mt-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="smoking"
                  value="Si"
                  checked={formData.smoking === 'Si'}
                  onChange={(e) => handleRadioChange('smoking', e.target.value)}
                  className="w-[18px] h-[18px] shrink-0 border bg-[rgba(7,10,4,0.05)] rounded-[100px] border-solid border-[rgba(255,255,255,0.00)]"
                  required
                />
                <span className="text-[#070A04] text-base font-normal leading-6">
                  Si
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="smoking"
                  value="No"
                  checked={formData.smoking === 'No'}
                  onChange={(e) => handleRadioChange('smoking', e.target.value)}
                  className="w-[18px] h-[18px] shrink-0 border bg-[rgba(7,10,4,0.05)] rounded-[100px] border-solid border-[rgba(255,255,255,0.00)]"
                />
                <span className="text-[#070A04] text-base font-normal leading-6">
                  No
                </span>
              </label>
            </div>
          </fieldset>

          <div className="flex justify-start items-start gap-6 w-full max-md:flex-col max-md:gap-4">
            <div className="flex flex-col items-start gap-2 flex-1">
              <label htmlFor="physicalActivity" className="self-stretch text-[#070A04] text-base font-normal leading-6">
                Actividad física
              </label>
            </div>
            <select
              id="physicalActivity"
              name="physicalActivity"
              value={formData.physicalActivity}
              onChange={handleInputChange}
              className="flex items-center gap-4 border self-stretch bg-[rgba(7,10,4,0.05)] px-3 py-2 rounded-xl border-solid border-[rgba(255,255,255,0.00)] text-[#070A04]"
              required
            >
              <option value="">(Bajo, medio, alto)...</option>
              <option value="Bajo">Bajo</option>
              <option value="Medio">Medio</option>
              <option value="Alto">Alto</option>
            </select>
          </div>

          <fieldset className="flex flex-col items-start gap-2 flex-1">
            <legend className="self-stretch text-[#070A04] text-base font-normal leading-6">
              Ha sido diagnosticado previamente con diabetes (target)
            </legend>
            <div className="flex items-center gap-6 mt-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="diabetesDiagnosis"
                  value="Si"
                  checked={formData.diabetesDiagnosis === 'Si'}
                  onChange={(e) => handleRadioChange('diabetesDiagnosis', e.target.value)}
                  className="w-[18px] h-[18px] shrink-0 border bg-[rgba(7,10,4,0.05)] rounded-[100px] border-solid border-[rgba(255,255,255,0.00)]"
                  required
                />
                <span className="text-[#070A04] text-base font-normal leading-6">
                  Si
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="diabetesDiagnosis"
                  value="No"
                  checked={formData.diabetesDiagnosis === 'No'}
                  onChange={(e) => handleRadioChange('diabetesDiagnosis', e.target.value)}
                  className="w-[18px] h-[18px] shrink-0 border bg-[rgba(7,10,4,0.05)] rounded-[100px] border-solid border-[rgba(255,255,255,0.00)]"
                />
                <span className="text-[#070A04] text-base font-normal leading-6">
                  No
                </span>
              </label>
            </div>
          </fieldset>

          <div className="flex flex-col items-start gap-2 flex-1">
            <label htmlFor="monthlyIncome" className="self-stretch text-[#070A04] text-base font-normal leading-6">
              Ingreso mensual
            </label>
            <input
              type="number"
              id="monthlyIncome"
              name="monthlyIncome"
              value={formData.monthlyIncome}
              onChange={handleInputChange}
              placeholder="Indique su ingreso mensual"
              className="flex items-center gap-2 self-stretch border bg-[rgba(7,10,4,0.05)] px-3 py-2 rounded-xl border-solid border-[rgba(255,255,255,0.00)] text-[#070A04] placeholder:text-[rgba(7,10,4,0.60)]"
              required
            />
          </div>

          <label className="flex items-center gap-2 mx-0 my-4 cursor-pointer">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleInputChange}
              className="w-[18px] h-[18px] rounded border bg-[rgba(7,10,4,0.05)] border-solid border-[rgba(255,255,255,0.00)]"
              required
            />
            <span className="text-[#070A04] text-sm font-normal leading-[21px] max-w-[496px]">
              Una vez que haya ingresado todos los datos, haga clic en el
              botón para continuar con la evaluación de su riesgo.
            </span>
          </label>

          <button
            type="submit"
            className="flex justify-center items-center gap-2 cursor-pointer w-full max-w-[457px] mt-6 rounded-xl border-none bg-[#070A04] text-white px-6 py-3 hover:bg-gray-800 transition-colors max-sm:max-w-full"
          >
            <span className="text-base font-medium leading-6">
              Generar Predicción
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
