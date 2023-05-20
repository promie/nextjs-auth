# NextJS Auth
This project utilises NextJS 13 app router to create a straightforward authentication system with Next-auth and Prisma. It includes an API router for user and post CRUD operations and implements protected routes using JWT tokens. The application is built with NextJS and provides a full-stack solution.

During the development process, significant learning and experimentation took place with the new NextJS 13 app router and Next-auth 4.0.0. The enhanced NextJS app router offers impressive power and flexibility, representing a substantial improvement over its predecessor. Similarly, Next-auth 4.0.0 introduces several advancements, including increased flexibility, enhanced power, and improved usability.

Additionally, Prisma, one of the finest ORMs for NodeJS, is utilized in this project. It proves to be user-friendly and robust, particularly when used with SQLLite. Notably, Prisma features a built-in studio, enabling database visualisation through a web browser. To learn how to run the application, please refer to the "DB Migration & Studio" section in the documentation below.

## Requirements
- Node 18.16.0 LTS
- NPX 8.x

## Installation
```bash
$ npm install
```

## How to run
### Local
To run the app in development mode locally, run the below command on the root directory:

```bash
$ npm run dev
```

The NextJS application and server will be up on `http://localhost:3000`.

## DB Migration & Studio
When the changes are made to your Prisma schema, you must migrate the database. To do so, run the below command on the root directory:

```bash
$ npm run prisma:migrate
```

To visualise the database, run the below command on the root directory:

```bash
$ npm run prisma:studio
```
