// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // No 'root' property needed if your HTML files are in subdirectories directly under the project root.
  // Vite defaults to process.cwd() (the project root) as the 'root' if not specified.

  server: {
    // Set the path to open relative to your project root
    open: '/flight/flightdetails.html',
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
        flightBookingDetails: resolve(
          __dirname,
          'flight/flightbookingdetails.html'
        ),

        // Hotel Pages
        hotelSearch: resolve(__dirname, 'hotel/hotelsearch.html'),
        listingHotel: resolve(__dirname, 'hotel/listinghotel.html'),
        hotelDetails: resolve(__dirname, 'hotel/hoteldetails.html'),
        hotelBookingDetails: resolve(
          __dirname,
          'hotel/hotelbookingdetails.html'
        ),

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
