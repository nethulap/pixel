# Pixel

 This is a booking application designed for doctors in a medical center to help them manage their appointments with patients. The application is built using Angular([Angular CLI](https://github.com/angular/angular-cli) version 15.1.6.), .NET 7, MongoDB, and Identity Server. 

## Features

* **Appointment Scheduling:** The doctors can view their schedule for the day, week or month and can add, edit or delete appointments as required.
* **Patient Management:** The application allows the doctors to manage their patients' records, including their medical history and appointment history.
* **Reminders and Notifications:** The doctors receive notifications for upcoming appointments and reminders for pending tasks.
* **User Authentication and Authorization:** The application has a secure login system that allows only authorized users to access the system.

## Requirements

To run this application, you will need:

* Node.js (v14.16.1 or higher)
* .NET 7
* MongoDB (v4.4 or higher)
* Identity Server (v4.0 or higher)

## Installation

1. Clone the repository

```bash
`git@github.com:nethulap/pixel.git`
```

2. Install Dependencies

```bash
`cd pixel
 npm install`
```

3. Configure MongoDB

* Install and start MongoDB
* Create a database named "BookingDb"
* Create collections named "Appointments" and "Patients"

4. Configure IdentityServer 

* Install and start Identity Server
* Configure the application to use Identity Server for authentication

5. Run the application

```bash
`cd pixel-api
 npm install`
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Support

If you encounter any issues while using this application, please open an issue on the repository or contact the developer directly.

## License

This application is licensed under the MIT License. See the LICENSE file for more details.
