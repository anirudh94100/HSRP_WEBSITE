"use client";

import React from 'react';
import { Toaster } from 'react-hot-toast';

const ToastProvider = () => {
  return (
    <Toaster 
      position="top-right"
      toastOptions={{
        success: {
          style: {
            background: '#22c55e',
            color: 'white',
          },
          iconTheme: {
            primary: 'white',
            secondary: '#22c55e',
          },
        },
        error: {
          style: {
            background: '#ef4444',
            color: 'white',
          },
           iconTheme: {
            primary: 'white',
            secondary: '#ef4444',
          },
        },
      }}
    />
  );
};

export default ToastProvider;