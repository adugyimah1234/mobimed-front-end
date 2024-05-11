import React from 'react';

interface NotificationProps {
  title: string;
  onDismiss?: () => void;
}

const Notification: React.FC<NotificationProps> = ({ title, onDismiss }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm z-50">
      <div className="bg-white rounded-md shadow-md px-8 py-4 text-center">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xl font-bold text-gray-800">{title}</h4>
          {onDismiss && (
            <button type="button" onClick={onDismiss}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500 hover:text-gray-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l5.293-5.293a1 1 0 111.414 1.414L11.414 10l5.293 5.293a1 1 0 01-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 10L3.293 4.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
        <svg
          className="mx-auto h-8 w-8 text-green-500"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C6.47 22 2 17.53 2 12S6.47 2 12 2s10 4.47 10 10-4.47 10-10 10zm0-18a8 8 0 1 1 0 16 8 8 0 0 1 0-16z"
            fill="currentColor"
          />
        </svg>
        <p className="mt-4 text-gray-600">{title}</p>
      </div>
    </div>
  );
};

export default Notification;
