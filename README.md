# Design Factory Project
This project includes a Next.js frontend and a Strapi CMS backend. Please follow the steps below to run the project.

## Clone the project

First, clone the project from the GitHub repository to your local machine:

```bash
git clone https://github.com/HaoZhangSid/Design-factory.git
```

Please make sure your code is up to date with the latest master branch. After that, you can create your own branch. To do this, follow these steps:

Make sure you're on the master branch:

```bash
git checkout master
```
Pull the latest changes:

```bash
git pull origin master
```
Create a new branch:

```bash
git checkout -b your-branch-name

```

## Install dependencies

Frontend (Next.js)
Navigate to the frontend project directory and install the dependencies:
```bash
cd sampola
npm install
```

Backend (Strapi CMS)
Navigate to the backend project directory and install the dependencies:
```bash
cd my-strapi-project
npm install
```

## Start the development servers
Start the Strapi backend:
Navigate to the my-strapi-project directory and run the following command to start Strapi:
```
npm run develop
```
### The Strapi CMS admin panel will be running at:
http://localhost:1337/admin

Strapi login credentials:
Username: admin@gmail.com
Password: Qwer1234.


Start the Next.js frontend:
Navigate to the sampola directory and run the following command to start the Next.js frontend:
```
npm run dev
```

The frontend will be running at http://localhost:3000/.


You can focus on the website's style and layout first and temporarily store the content information on the frontend. Once the content is finalized, we will translate it into multiple languages and then store it in the CMS. Finally, the frontend will use an API to fetch the content from the CMS.

If you encounter any issues, feel free to ask in the group, or ChatGPT can help solve most of your questions.