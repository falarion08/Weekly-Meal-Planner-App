import React from 'react';

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const AlertModal: React.FC<AlertModalProps> = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full p-4">
          <div className="text-lg font-semibold">{message}</div>
          <div className="mt-4 flex justify-end">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
