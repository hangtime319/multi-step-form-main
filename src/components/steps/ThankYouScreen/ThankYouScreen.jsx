const ThankYouScreen = () => {
  return (
    <article className='flex flex-col items-center gap-5 max-w-sm m-auto'>
        <img src="./images/icon-thank-you.svg" alt="thank you" />
        <h2 className='text-2xl font-semibold text-blue-950'>Thank you!</h2>
        <p className="text-sm text-gray-500 text-center">
          Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
        </p>
      </article>
  )
}

export default ThankYouScreen