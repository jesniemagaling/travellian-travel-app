// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // No 'root' property needed if your HTML files are in subdirectories directly under the project root.
  // Vite defaults to process.cwd() (the project root) as the 'root' if not specified.

  server: {
    // Set the path to open relative to your project root
    open: '/stay/staysconfirmation.html',
  },

  build: {
    rollupOptions: {
      input: {
        // Landing Page
        main: resolve(__dirname, 'landing/index.html'),

        // Flight Pages
        flightSearch: resolve(__dirname, 'flight/flightsearch.html'),
        flightListing: resolve(__dirname, 'flight/flightlisting.html'),
        flightDetails: resolve(__dirname, 'flight/flightdetails.html'),
        flightConfirmation: resolve(
          __dirname,
          'flight/flightconfiramation.html'
        ),
        flightBookingDetails: resolve(
          __dirname,
          'flight/flightbookingdetails.html'
        ),

        // Hotel Pages
        searchStays: resolve(__dirname, 'stay/searchstays.html'),
        staysBookingDetails: resolve(
          __dirname,
          'stay/staysbookingdetails.html'
        ),
        staysConfirmation: resolve(__dirname, 'stay/staysconfirmation.html'),
        staysDetails: resolve(__dirname, 'stay/staysdetails.html'),
        staysListing: resolve(__dirname, 'stay/stayslisting.html'),

        // Auth Pages
        login: resolve(__dirname, 'auth/login.html'),
        signup: resolve(__dirname, 'auth/signup.html'),
        forgetPass: resolve(__dirname, 'auth/forgotpassword.html'),
        account: resolve(__dirname, 'auth/account.html'),
        accountHistory: resolve(__dirname, 'auth/accounthistory.html'),
        accountPaymentMethod: resolve(
          __dirname,
          'auth/accountpaymentmethod.html'
        ),
        favorites: resolve(__dirname, 'auth/favorites.html'),
      },
    },
  },
});
