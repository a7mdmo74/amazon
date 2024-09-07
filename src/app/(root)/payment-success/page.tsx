import Link from 'next/link';

export default function OrderConfirmation({
  searchParams: { amount },
}: {
  searchParams: { amount: string };
}) {
  return (
    <main className="max-w-3xl mx-auto p-8 text-gray-800">
      <div className="border border-gray-300 rounded-lg p-6 bg-white shadow-md">
        <div className="flex items-center justify-center mb-6">
          <svg
            className="w-16 h-16 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-center">
          Order Confirmed!
        </h1>
        <p className="text-xl mb-6 text-center">Thank you for your purchase.</p>
        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <p className="text-lg font-semibold mb-2">Order Details:</p>
          <p className="font-bold mt-2">Total: ${amount}</p>
        </div>
        <p className="text-sm text-gray-600 text-center">
          A confirmation email has been sent to your registered email address.
        </p>
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
}
