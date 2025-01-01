import React from 'react'

function PaymentTerms() {
  return (
    <>
      <div className="w-full flex flex-wrap flex-col pt-16 items-center justify-center text-center bg-gray-200">
        <div className="pt-10 text-4xl font-bold font-serif">Payment Terms</div>
        <div className="w-36 h-1 border-b-4 border-indigo-400 mt-2 rounded-2xl md:mt-4"></div>
      </div>

      <div className="w-full mx-auto p-8 bg-gray-200">
        <p className="mb-4 text-2xl text-center font-semibold text-blue-gray-700">
          Welcome to Conceptual Classes! These Payment Terms outline the terms
          and conditions related to payments made for our services.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-blue-gray-600">
          1. Payment Methods
        </h2>
        <p className="mb-4 font-serif">
          We accept various payment methods, including credit/debit cards, bank
          transfers, and online payment systems like PayPal. All payments must
          be made in full before accessing our services.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-blue-gray-700">
          2. Subscription Plans
        </h2>
        <p className="mb-4 font-serif">
          Conceptual Classes offers multiple subscription plans based on the
          duration of the service (monthly, quarterly, yearly). Payment for
          subscription plans must be made at the beginning of each billing
          period.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-blue-gray-700">
          3. Refund Policy
        </h2>
        <p className="mb-4 font-serif">
          Payments made for subscriptions and services are non-refundable.
          However, in case of a technical error or issue with the service, we
          may review and provide partial refunds on a case-by-case basis.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-blue-gray-700">
          4. Billing Cycle
        </h2>
        <p className="mb-4 font-serif">
          Subscription charges will be billed automatically at the start of each
          billing cycle. You will receive a notification for each upcoming
          payment. If payment fails, your access to the services will be
          suspended until the payment is resolved.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-blue-gray-700">
          5. Price Changes
        </h2>
        <p className="mb-4 font-serif">
          We reserve the right to change the prices for any of our services or
          subscriptions. Any price changes will be communicated to you in
          advance, and you can choose to continue or cancel your subscription
          accordingly.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-blue-gray-700">
          6. Payment Confirmation
        </h2>
        <p className="mb-4 font-serif">
          After completing the payment process, you will receive a confirmation
          email containing the details of your transaction. Please retain this
          information for future reference.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-blue-gray-700">
          7. Payment Security
        </h2>
        <p className="mb-4 font-serif">
          We use secure payment gateways and encryption methods to ensure that
          your payment information is protected. We do not store your credit
          card details or any sensitive financial information.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-blue-gray-700">
          8. Changes to Payment Terms
        </h2>
        <p className="mb-4 font-serif">
          We may update these Payment Terms from time to time. Any changes will
          be posted here, and the updated date will be noted at the bottom of
          this page.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-blue-gray-700">
          9. Contact Us
        </h2>
        <p className="mb-4 font-serif">
          If you have any questions or concerns regarding these Payment Terms,
          please contact us at{" "}
          <a
            href="mailto:conceptual.ac.in@gmail.com"
            className="underline text-blue-500"
          >
            conceptual.ac.in@gmail.com
          </a>
          .
        </p>

        <footer className="text-center mt-8">
          <p>© 2024 Conceptual Classes. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default PaymentTerms
