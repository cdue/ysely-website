import { Container } from '@/components/Container';
import Button from '@/components/Button/Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';

interface IFormInput {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export const Contact = () => {
  const {
    register,
    formState: { isSubmitting, isSubmitSuccessful, errors },
    handleSubmit,
    reset,
  } = useForm<IFormInput>();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        message: '',
      });
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const JSONdata = JSON.stringify({
      from: data.email,
      ...data,
    });

    const endpoint = '/api/contact';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    const status = await response.status;
    if (status === 200) {
      toast.success(
        <>
          Merci pour votre message. <br />
          On vous répond très vite 👋
        </>
      );
    } else {
      toast.error(
        <>
          Oups, Il y a de la friture sur la ligne... 😬 <br />
          Merci de réessayer plus tard 🙏
        </>
      );
    }
  };

  // TODO: Extract FromGroup, FormField, and so on, and the refactor this form

  return (
    <section
      id="contact"
      aria-label="Discutons de votre projet"
      className="overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24"
    >
      <Container className="relative mx-auto max-w-xl">
        <svg
          className="absolute left-full translate-x-1/2 transform"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-primary-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <svg
          className="absolute right-full bottom-0 -translate-x-1/2 transform"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-primary-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Parlez moi de votre projet
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Vous avez un projet et vous souhaitez savoir si nous pourrions le
            réaliser ensemble ?
            <br />
            Dites m&apos;en plus sur vous et sur votre projet, je vous réponds
            au plus vite !
          </p>
        </div>
        <div className="mt-12">
          <form
            noValidate
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                Prénom
              </label>
              <div
                className={`mt-1 ${
                  errors.firstName && 'relative rounded-md shadow-sm'
                }`}
              >
                <input
                  type="text"
                  id="firstName"
                  {...register('firstName')}
                  aria-invalid={errors.firstName ? 'true' : 'false'}
                  className={`block w-full rounded-md py-3 px-4 sm:text-sm ${
                    errors.firstName
                      ? 'border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
                      : 'border-gray-300 shadow-sm focus:border-primary-300 focus:ring-primary-300'
                  }`}
                />
                {errors.firstName && (
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ExclamationCircleIcon
                      className="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </div>
                )}
              </div>
              {errors.firstName && (
                <p
                  id="firstName-error"
                  className="mt-2 text-sm italic text-red-500"
                  role="alert"
                >
                  {errors.firstName?.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Nom
              </label>
              <div
                className={`mt-1 ${
                  errors.lastName && 'relative rounded-md shadow-sm'
                }`}
              >
                <input
                  type="text"
                  id="lastName"
                  {...register('lastName')}
                  aria-invalid={errors.lastName ? 'true' : 'false'}
                  className={`block w-full rounded-md py-3 px-4 sm:text-sm ${
                    errors.lastName
                      ? 'border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
                      : 'border-gray-300 shadow-sm focus:border-primary-300 focus:ring-primary-300'
                  }`}
                />
                {errors.lastName && (
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ExclamationCircleIcon
                      className="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </div>
                )}
              </div>
              {errors.lastName && (
                <p
                  id="lastName-error"
                  className="mt-2 text-sm italic text-red-500"
                  role="alert"
                >
                  {errors.lastName?.message}
                </p>
              )}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Société / Association
              </label>
              <div
                className={`mt-1 ${
                  errors.company && 'relative rounded-md shadow-sm'
                }`}
              >
                <input
                  type="text"
                  id="company"
                  {...register('company')}
                  aria-invalid={errors.company ? 'true' : 'false'}
                  className={`block w-full rounded-md py-3 px-4 sm:text-sm ${
                    errors.company
                      ? 'border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
                      : 'border-gray-300 shadow-sm focus:border-primary-300 focus:ring-primary-300'
                  }`}
                />
                {errors.company && (
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ExclamationCircleIcon
                      className="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </div>
                )}
              </div>
              {errors.company && (
                <p
                  id="company-error"
                  className="mt-2 text-sm italic text-red-500"
                  role="alert"
                >
                  {errors.company?.message}
                </p>
              )}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email *
              </label>
              <div
                className={`mt-1 ${
                  errors.email && 'relative rounded-md shadow-sm'
                }`}
              >
                <input
                  type="text"
                  id="email"
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'champ requis',
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'adresse email invalide',
                    },
                  })}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  className={`block w-full rounded-md py-3 px-4 sm:text-sm ${
                    errors.email
                      ? 'border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
                      : 'border-gray-300 shadow-sm focus:border-primary-300 focus:ring-primary-300'
                  }`}
                  required
                />
                {errors.email && (
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ExclamationCircleIcon
                      className="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </div>
                )}
              </div>
              {errors.email && (
                <p
                  id="email-error"
                  className="mt-2 text-sm italic text-red-500"
                  role="alert"
                >
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Numéro de téléphone
              </label>
              <div
                className={`mt-1 ${
                  errors.phone && 'relative rounded-md shadow-sm'
                }`}
              >
                <input
                  type="text"
                  id="phone"
                  {...register('phone', {
                    pattern: {
                      value: /^[+]{0,1}[()0-9 ]+$/i,
                      message: 'format incorrect',
                    },
                  })}
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  className={`block w-full rounded-md py-3 px-4 sm:text-sm ${
                    errors.phone
                      ? 'border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
                      : 'border-gray-300 shadow-sm focus:border-primary-300 focus:ring-primary-300'
                  }`}
                  placeholder="+33 6 01 02 03 04"
                />
                {errors.phone && (
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ExclamationCircleIcon
                      className="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </div>
                )}
              </div>
              {errors.phone && (
                <p
                  id="phone-error"
                  className="mt-2 text-sm italic text-red-500"
                  role="alert"
                >
                  {errors.phone?.message}
                </p>
              )}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <div
                className={`mt-1 ${
                  errors.message && 'relative rounded-md shadow-sm'
                }`}
              >
                <textarea
                  id="message"
                  rows={4}
                  {...register('message', {
                    required: {
                      value: true,
                      message: 'champ requis',
                    },
                  })}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  className={`block w-full rounded-md py-3 px-4 sm:text-sm ${
                    errors.message
                      ? 'border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
                      : 'border-gray-300 shadow-sm focus:border-primary-300 focus:ring-primary-300'
                  }`}
                  defaultValue={''}
                  required
                />
                {errors.message && (
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ExclamationCircleIcon
                      className="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </div>
                )}
              </div>
              {errors.message && (
                <p
                  id="message-error"
                  className="mt-2 text-sm italic text-red-500"
                  role="alert"
                >
                  {errors.message?.message}
                </p>
              )}
            </div>
            <div className="sm:col-span-2">
              <Button
                type="submit"
                className="w-full px-6 py-3"
                variant="solid"
                disabled={isSubmitting}
                isLoading={isSubmitting}
                color="primary"
              >
                Envoyer
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};
