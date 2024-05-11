import React, { useState, useEffect } from 'react';

interface VerificationProps {
  phoneNumber: string;
  onVerify: (code: string) => void;
  on resendCode: () => void;
}

const Verification: React.FC<VerificationProps> = ({
  phoneNumber,
  onVerify,
  onResendCode,
}) => {
  const [code, setCode] = useState('');
  const [secondsRemaining, setSecondsRemaining] = useState(13);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSecondsRemaining(Math.max(0, secondsRemaining - 1));
    }, 1000);
    return () => clearInterval(timerId);
  }, [secondsRemaining]);

  const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onVerify(code);
  };

  const handleResendCode = () => {
    onResendCode();
    setSecondsRemaining(13);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white px-8 py-16 rounded-md shadow-md">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-800">imedic PHARMACY</h1>
          <h2 className="text-xl font-bold text-gray-800">Verification</h2>
        </div>
        <p className="text-gray-700 mb-6">
          An OTP is sent to your mobile number check your phone to verify {phoneNumber}
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="flex items-center">
            <input
              type="text"
              className="px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter Code"
              value={code}
              onChange={handleCodeChange}
              maxLength={6}
            />
            <button
              type="button"
              className="disabled:opacity-50 ml-4 px-3 py-2 border border-gray-300 rounded-md text-gray-500 hover:text-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              disabled={secondsRemaining > 0}
              onClick={handleResendCode}
            >
              Send again
            </button>
          </div>
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            disabled={code.length !== 6}
          >
            VERIFY
          </button>
          {secondsRemaining > 0 && (
            <p className="text-center text-red-500">The code will expire in 00:{secondsRemaining.toString().padStart(2, '0')}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Verification;
